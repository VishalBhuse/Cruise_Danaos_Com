import { Box, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { packagePageData } from "../../UTIL/localstorageauth/PagesData/Data";

const Package = () => {
  return (
    <>
      <Box
        mt="20px"
        w="90%"
        mx="auto"
        bg="url('./img/vishal/pack.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={{ base: "200px", md: "400px", lg: "600px" }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection={"column"}
      >
        <Text
          mt="30px"
          fontSize={{ sm: "15px", md: "25px", lg: "35px", xl: "35px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#F2CD5B"}
          textAlign="center"
          fontWeight={"700"}
        >
          “I wanted freedom, open air and adventure. I found it on the sea.”
        </Text>
        <Text
          textAlign="center"
          fontSize={{ sm: "15px", md: "25px", lg: "35px", xl: "60px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "50px", xl: "100px" }}
          color={"#FFFFFF"}
          fontWeight={"700"}
        >
          Promotions and Packages
        </Text>
      </Box>
      <Box
        w="90%"
        mx={"auto"}
        my="20px"
        borderBottom={"2px solid #000000"}
        pb="25px"
      >
        {packagePageData?.map((item) => (
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2 }}
            spacing={10}
            mt="12"
            key={item.id}
          >
            <Box>
              <Image src={item.img} alt={item.alt} boxSize={"500px"}></Image>
            </Box>
            <Box textAlign={"center"}>
              <VStack spacing={["20px", "20px"]} mt="4">
                <Text fontWeight="700" fontSize={"42px"}>
                  {item.text}
                </Text>
                <Text fontWeight="500" fontSize={"36px"}>
                  {item.start}
                </Text>
                <Box>
                  <Text
                    fontWeight="400"
                    fontSize={"24px"}
                    textAlign="justify"
                    w="100%"
                  >
                    {item.desc}
                  </Text>
                </Box>
                <Link to="/allpackages">
                  <Button
                    fontFamily="700"
                    fontSize={"18px"}
                    textTransform={"capitalize"}
                    backgroundColor={"#081839"}
                    color="#fff"
                    _hover={{ backgroundColor: "#081839" }}
                    px="50px"
                  >
                    Book package
                  </Button>
                </Link>
              </VStack>
            </Box>
          </SimpleGrid>
        ))}
      </Box>
      <Box w="90%" mx={"auto"} textAlign="center" mb="50px">
        <Text fontFamily="bold" fontSize={"22px"}>
          All prices are subject to 10% Service Charge + GSTat the prevailing
          rate.
        </Text>
      </Box>
    </>
  );
};

export default Package;
