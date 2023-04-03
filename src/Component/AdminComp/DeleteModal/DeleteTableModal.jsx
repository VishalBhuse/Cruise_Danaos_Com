import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const DeleteTableModal = ({ packageId, tableid, getData }) => {
  // console.log(packageId, tableid);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const handledeletetable = () => {
    axios
      .delete(
        `https://backenddanaoscruise-production-ed75.up.railway.app/managepackage/tables/${packageId}/${tableid}`
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
        <AiFillDelete fontSize="20px" color="#dc3544" />
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
              Are you sure? You want to delete this Table.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handledeletetable} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteTableModal;
