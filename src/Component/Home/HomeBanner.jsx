import React from "react";
import { Box, Text, Button, HStack, VStack } from "@chakra-ui/react";

import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <>
      <Box w="90%" mx="auto">
        <Box
          w="100%"
          bg="url('./img/vishal/homeban.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          height={{ base: "200px", md: "400px", lg: "600px" }}
        >
          <Box w="90%" mx="auto">
            <Box w={["60%", "60%", "50%"]} mt="0.5rem">
              <VStack
                justifyContent={"flex-start"}
                spacing={{ base: "20px", md: "20px", lg: "50px" }}
              >
                <Box>
                  <Text
                    mt={{ base: "10px", md: "15px" }}
                    fontSize={{
                      base: "10px",
                      sm: "15px",
                      md: "25px",
                      lg: "35px",
                      xl: "35px",
                    }}
                    color={"#081839"}
                    fontWeight={"700"}
                  >
                    Living the cruise life. <br /> A bad day on a cruise is
                    better than a good day anywhere else.
                  </Text>
                  <Link to="/allpackages">
                    <Button
                      mt="3"
                      background={
                        "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                      }
                      _hover={{
                        background:
                          "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                      }}
                      fontWeight={"700"}
                      fontSize={["8px", "15px"]}
                      color={"#081839"}
                      size={["xs", "xs", "md"]}
                    >
                      Book Now
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Box>
            <Box mt="3" display={["none", "none", "none", "block"]}>
              <HStack>
                <Box
                  width={"207px"}
                  height={["308px"]}
                  background={"rgba(8, 24, 57, 0.59)"}
                  borderRadius={"10px"}
                  display="flex"
                  justifyContent={"space-between"}
                  flexDirection="column"
                  px="2"
                  py="2"
                  color={"#FFFFFF"}
                >
                  <Text fontWeight={"700"} fontSize={"32px"} textAlign="center">
                    Tour
                  </Text>
                  <Text
                    fontWeight={"500"}
                    fontSize={"12px"}
                    textAlign="justify"
                  >
                    Lovers of all things nautical and anyone who’d like to add
                    some luxe to their Instagram – won’t want to miss out on the
                    Nauti Amigo, a classical Danaos ship remodeled as an
                    indulgent superyacht. Enjoy a to-the-point small-group
                    guided tour with ample photo opportunities.
                  </Text>
                  <Box w="100%" mx="auto" textAlign={"center"}>
                    <Link to="/allpackages">
                      <Button
                        px={{ base: "2", md: "4" }}
                        py={{ base: "1", md: "2" }}
                        fontWeight="700"
                        fontSize={{ base: "10px", md: "14px" }}
                        _hover={{
                          background:
                            "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                        }}
                        background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                        textTransform={"capitalize"}
                        color="#081839"
                      >
                        view more &nbsp;
                        <HiOutlineArrowRight />
                      </Button>
                    </Link>
                  </Box>
                </Box>
                <Box
                  width={"207px"}
                  height={["308px"]}
                  background={"rgba(8, 24, 57, 0.59)"}
                  borderRadius={"10px"}
                  display="flex"
                  justifyContent={"space-between"}
                  flexDirection="column"
                  px="2"
                  py="2"
                  color={"#FFFFFF"}
                >
                  <Text fontWeight={"700"} fontSize={"32px"} textAlign="center">
                    Locations
                  </Text>
                  <Text
                    fontWeight={"500"}
                    fontSize={"12px"}
                    textAlign="justify"
                  >
                    Celebrate a special occasion such as an anniversary,
                    birthday or proposal on the Nauti Amigo. Make your memory
                    unique on board India's  only Luxury Danaos. Find special
                    deals and offers exclusively on India's  only Luxury Danaos;
                    The Nauti Amigo
                  </Text>
                  <Box w="100%" mx="auto" textAlign={"center"}>
                    <Link to="/allpackages">
                      <Button
                        px={{ base: "2", md: "4" }}
                        py={{ base: "1", md: "2" }}
                        fontWeight="700"
                        fontSize={{ base: "10px", md: "14px" }}
                        _hover={{
                          background:
                            "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                        }}
                        background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                        textTransform={"capitalize"}
                        color="#081839"
                      >
                        view more &nbsp;
                        <HiOutlineArrowRight />
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeBanner;
