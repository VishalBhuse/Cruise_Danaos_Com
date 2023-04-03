import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  Image,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "./Header";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Header />
      <Box>
        <Flex
          w="90%"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          align={"center"}
        >
          <Flex
            flex={{ base: 2, md: "auto" }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              fontSize={"23px"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <MdClose w={3} h={3} />
                ) : (
                  <GiHamburgerMenu w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={"flex-end"}>
            <Link to={"/"}>
              <Image
                display={["block", "block", "none"]}
                src="./img/vishal/footerlogo.png"
                boxSize={"60px"}
              ></Image>
            </Link>

            <Flex
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              justifyContent="center"
              bg="#081839"
              color="#F2CD5C"
              fontWeight="600"
              fontSize={"22px"}
              py="30px"
              px="30px"
              w="fit-content"
              borderRadius={"20px"}
              mx="auto"
              h="25px"
              mt="-1.5rem"
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        <br />
      </Box>
    </>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <HStack spacing={"25px"} alignItems="center">
          <Link to={"/"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Home
            </Text>
          </Link>
          <Link to={"/package"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Packages
            </Text>
          </Link>
          <Link to={"/sailing"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Sailing
            </Text>
          </Link>
          <Link to={"/gallery"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Gallery
            </Text>
          </Link>

          <Link to={"/offer"}>
            <Text
              _hover={{
                transform: "scale(1.2)",
                borderBottom: "1px solid #F2CD5C",
              }}
            >
              Offers
            </Text>
          </Link>
        </HStack>
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Box>
        <VStack fontWeight={"600"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/package"}>Packages</Link>
          <Link to={"/sailing"}>Sailing</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/offer"}>Offer</Link>
        </VStack>
      </Box>
    </Stack>
  );
};
