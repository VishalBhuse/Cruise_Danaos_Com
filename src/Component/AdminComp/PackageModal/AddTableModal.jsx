import {
  Button,
  FormControl,
  FormLabel,
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

const AddTableModal = ({ id, getData }) => {
  // console.log(id)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addTable, setaddTable] = useState({});
  const toast = useToast();

  const handleAdd = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setaddTable({ ...addTable, [name]: value });
  };

  const handleAddTable = async () => {
    const payload = {
      personSize: addTable.personSize,
      price: addTable.price,
      offerPrice: addTable.offerPrice,
    };
    await axios
      .post(
        `https://backenddanaoscruise-production-ed75.up.railway.app/managepackage/tables/${id}`,
        payload
      )
      .then(() => {
        toast({
          description: "Table Value Added successfully",
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
        backgroundColor={"#081839"}
        color={"white"}
        onClick={onOpen}
        _hover={{ backgroundColor: "#081839" }}
        size="sm"
      >
        Add Table
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Table Value</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Person Size</FormLabel>
              <Input
                onChange={handleAdd}
                name="personSize"
                type="number"
                placeholder="Enter the Person Size"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                onChange={handleAdd}
                name="price"
                type="number"
                placeholder="Enter the Price"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Offer Price</FormLabel>
              <Input
                onChange={handleAdd}
                name="offerPrice"
                type="number"
                placeholder="Enter the Offer Price"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                handleAddTable();
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Add Table
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTableModal;
