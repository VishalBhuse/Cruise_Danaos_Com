import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const DeletePackageModal = ({ id, getData, packName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const handleDelete = () => {
    axios
      .delete(
        `https://backenddanaoscruise-production-ed75.up.railway.app/managepackage/${id}`
      )
      .then(() => {
        toast({
          description: "Packaged deleted successfully",
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
      <Button colorScheme="#fff" onClick={onOpen}>
        <AiFillDelete cursor={"pointer"} fontSize={"22px"} color="#dc3544" />
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Package
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to delete{" "}
              <Text as="span" fontWeight={"500"} textTransform="capitalize">
                {" "}
                {packName}{" "}
              </Text>
              .
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeletePackageModal;
