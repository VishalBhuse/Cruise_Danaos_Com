import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";

const AddPackage = ({ getData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [add, setAdd] = useState({});

  const handleAdd = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setAdd({ ...add, [name]: value });
  };

  const handleAddPackage = async () => {
    const payload = {
      heading1: add.title1,
      packageName: add.pname,
      sailingDate: add.sdate,
      rating: add.rating,
      availability: add.availability,
    };
    await axios
      .post(
        "https://backenddanaoscruise-production-ed75.up.railway.app/managepackage",
        payload
      )
      .then(() => {
        toast({
          description: "Packaged Added successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-center",
        });
        getData();
      });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AiFillPlusSquare />}
        background="#F1CC5C"
        borderRadius="5px"
        fontWeight="700"
        size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
        fontSize={{
          base: "10px",
          sm: "12px",
          md: "14px",
          lg: "14px",
        }}
        lineHeight="15px"
        color="#081839"
      >
        Add New
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "xl", "2xl"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Package</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack flexDirection={["column", "column", "row"]}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="title1"
                  value={add.title1 || ""}
                  type="text"
                  placeholder="e.g. Lorem"
                  height={"50px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={[2, 2, 0, 0]}>PackageName</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="pname"
                  value={add.pname || ""}
                  type="text"
                  placeholder="e.g. Ispum"
                  height={"50px"}
                />
              </FormControl>
            </HStack>
            <HStack flexDirection={["column", "column", "row"]}>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2]}>SailingDate</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="sdate"
                  value={add.sdate || ""}
                  type="date"
                  placeholder="e.g. Lorem Ispum12@gmail.com"
                  height={"50px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2]}>Rating</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="rating"
                  value={add.rating || ""}
                  type="number"
                  placeholder="e.g. number"
                  height={"50px"}
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel mt={[2, 2, 2, 2]}>Availability</FormLabel>
              <Input
                onChange={handleAdd}
                name="availability"
                value={add.availability || ""}
                type="number"
                placeholder="e.g. number"
                height={"50px"}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={"#081839"}
              color={"white"}
              mr={3}
              onClick={onClose}
              _hover={{ backgroundColor: "#081839" }}
            >
              Close
            </Button>
            <Button
              _hover={{ backgroundColor: "#081839" }}
              backgroundColor={"#081839"}
              color={"white"}
              mr={3}
              onClick={() => {
                handleAddPackage();
                onClose();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPackage;
