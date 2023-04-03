import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../Redux/actiontypes/auth.types";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const { isAuth } = useSelector((state) => state.auth);

  const handleSignup = () => {
    navigate("/signpage");
  };

  const handleLogin = () => {
    navigate("/loginpage");
  };
  return (
    <Box w="100%" mb="2">
      <Box backgroundColor={"#D4E2FE"} py="1">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={[0, 2, 2, 4]}
        >
          <GridItem
            colSpan={{ base: 1, md: 1 }}
            textAlign={"center"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            py="2"
          >
            <Link to={"/"}>
              <HStack>
                <Image
                  height={"100px"}
                  src="./img/vishal/footerlogo.png"
                  alt="log"
                ></Image>
                <Text
                  color="#081839"
                  fontWeight="700"
                  fontSize={{ sm: "14px", md: "20px", lg: "34px" }}
                  lineHeight="41px"
                >
                  DANAOS
                </Text>
              </HStack>
            </Link>
          </GridItem>
          <GridItem
            px="2"
            colSpan={{ base: 1, md: 1 }}
            display="flex"
            justifyContent={"center"}
            textAlign="center"
            alignItems="center"
            py="2"
            w="100%"
          >
            <InputGroup display={["none", "block", "block"]}>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearch />}
                py="25px"
                fontSize="25px"
              />
              <Input
                py="25px"
                type="text"
                letterSpacing={"5px"}
                placeholder="Search..."
                backgroundColor={"#FFFFFF"}
                mx="auto"
              />
            </InputGroup>
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 1 }}
            display="flex"
            justifyContent={"center"}
            textAlign="center"
            alignItems="center"
          >
            <Box
              gap={"10px"}
              display="flex"
              justifyContent={"center"}
              textAlign="center"
              alignItems="center"
              py="3"
            >
              {auth.role === "admin" ? (
                <Button
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    navigate("/");
                  }}
                >
                  {isAuth && "Log-Out"}
                </Button>
              ) : auth.role ? (
                <Button
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    navigate("/");
                  }}
                >
                  {isAuth && "Log-Out"}{" "}
                </Button>
              ) : (
                <Button
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}
              {auth.role === "admin" || auth.role === "user" ? null : (
                <Button
                  onClick={handleSignup}
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={["15px", "16px", "22px", "22px"]}
                  px={["5", "8", "8", "10"]}
                >
                  Sign-Up
                </Button>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Box>
      {/* <Box w="100%" py="1rem" backgroundColor={"#D4E2FE"}>
        <Box
          w="100%"
          display="flex"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Box>
            <HStack
              display="flex"
              flexDirection={{ sm: "column", md: "column", lg: "row" }}
            >
              <Box>
                <Image height={"80px"} src="./img/mainlogo.png" alt="d"></Image>
                <Image
                  width={"80px"}
                  src="./img/danaostext.png"
                  alt="d"
                ></Image>
              </Box>

              <Text
                color="#081839"
                fontWeight="700"
                fontSize={{ sm: "14px", md: "20px", lg: "34px" }}
                lineHeight="41px"
              >
                DANAOS
              </Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiSearch />}
                  py="25px"
                  fontSize="25px"
                />
                <Input
                  py="25px"
                  type="text"
                  letterSpacing={"5px"}
                  placeholder="Search..."
                  w={{ sm: "200px", md: "350px", lg: "450px" }}
                  backgroundColor={"#FFFFFF"}
                />
              </InputGroup>

              {auth.role === "admin" ? (
                <Button
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={{ sm: "10px", md: "15px", lg: "22px" }}
                  px={{ sm: "5", md: "10", lg: "10" }}
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    navigate("/");
                  }}
                >
                  {isAuth && "Log-Out"}
                </Button>
              ) : auth.role ? (
                <Button
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={{ sm: "10px", md: "15px", lg: "22px" }}
                  px={{ sm: "5", md: "10", lg: "10" }}
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    navigate("/");
                  }}
                >
                  {isAuth && "Log-Out"}{" "}
                </Button>
              ) : (
                <Button
                  backgroundColor={"#081839"}
                  size="lg"
                  color={"#F2CD5C"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#F2CD5C",
                  }}
                  fontWeight="700"
                  fontSize={{ sm: "10px", md: "15px", lg: "22px" }}
                  px={{ sm: "5", md: "10", lg: "10" }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}

              <Button
                onClick={handleSignup}
                backgroundColor={"#081839"}
                size="lg"
                color={"#F2CD5C"}
                _hover={{
                  backgroundColor: "#081839",
                  color: "#F2CD5C",
                }}
                fontWeight="700"
                fontSize={{ sm: "10px", md: "15px", lg: "22px" }}
                px={{ sm: "5", md: "10", lg: "10" }}
              >
                Signup
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box w={{ sm: "70%", md: "60%", lg: "50%" }} mx="auto" mt="-25px">
        <HStack
          backgroundColor={"#081839"}
          color={"#F2CD5C"}
          justifyContent="space-around"
          borderRadius={"15px"}
          fontWeight="700"
          fontSize={{ sm: "8px", md: "12px", lg: "24px" }}
          px={{ sm: "2", md: "3", lg: "5" }}
          py={{ sm: "2", md: "2", lg: "3" }}
        >
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/packages">
            <Text>Package</Text>
          </Link>
          <Link to="/sailing">
            <Text>Sailing</Text>
          </Link>
          <Link to="/gallery">
            <Text>Gallery</Text>
          </Link>
          <Link to="/offers">
            <Text>Offers</Text>
          </Link>
        </HStack>
      </Box>
      
    */}
    <HStack justifyContent={"flex-end"} w="90%" mx={"auto"}>
      {auth.role === "admin" ? (
        <Button onClick={() => navigate("/admin")}>Dashboard</Button>
      ) : auth.role ? (
        <Button onClick={() => navigate("/userprofile")}>Your Profile</Button>
      ) : null}
    </HStack> 
    </Box>
  );
};
export default Header;