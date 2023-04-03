import {
  Button,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
  HStack,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaEdit } from "react-icons/fa";

const EditProfileModal = ({ getData, authid, user, setuser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const getEditUser = () => {
    axios
      .patch(
        `https://backenddanaoscruise-production-ed75.up.railway.app/user/edituser/${authid}`,
        {
          ...user,
        }
      )
      .then((r) => {
        console.log(r);
        onClose();
        getData();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaEdit />}
        colorScheme="yellow"
        borderRadius="5px"
        fontWeight="700"
        fontSize="14px"
        size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
      >
        Edit Profile
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={["sm", "md", "xl", "xl", "2xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel mt={[2, 2, 2, 0, 0]}>Last name</FormLabel>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl mt={[2, 2, 2, 2, 2]}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Mobile Number</FormLabel>
                <Input
                  name="mobilenumber"
                  type="number"
                  placeholder="Mobile Number"
                  value={user.mobilenumber}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Gender</FormLabel>
                <Select
                  name="gender"
                  placeholder="Gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <option value="Gender">Gender</option>
                  <option value="Male">male</option>
                  <option value="Female">female</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Date of Birth</FormLabel>
                <Input
                  name="dateofbirth"
                  type="date"
                  placeholder="Date of Birth"
                  value={user.dateofbirth}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Address</FormLabel>
                <Input
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={user.address}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={getEditUser}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
