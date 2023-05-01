import { Box, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { packagePageData } from "../../UTIL/localstorageauth/PagesData/Data";

const Package = () => {
  return (
    <>
      <Box
        mt={["-20px", "-20px", "-70px", "-70px"]}
        w="100%"
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
        position="relative"
      >
        <Box
        w="100%"
          position={"absolute"}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Text
            mt={["0rem","0rem","-6rem","-6rem"]}
            fontSize={{ sm: "15px", md: "25px", lg: "50px", xl: "50px" }}
            color={"#F2CD5B"}
            textAlign="center"
            fontWeight={"700"}
          >
            “ Set Sail On Your Dream Vacation.”
          </Text>
        </Box>
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
