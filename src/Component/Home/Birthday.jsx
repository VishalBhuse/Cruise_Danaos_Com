import React from "react";
import { birthData, sailing } from "../../UTIL/localstorageauth/PagesData/Data";
import { Box, Text, Image, Button, SimpleGrid, VStack } from "@chakra-ui/react";
const Birthday = () => {
  return (
    <>
      <Box w="90%" mx={"auto"} my="20px" pb="25px">
        {birthData?.map((item) => (
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5} mt="12" key={item.id}>
            <Box height={["240px","240px", "400px", "400px"]}>
              <Image src={item.img} alt={item.alt} w="100%" h="100%"></Image>
            </Box>
            <Box textAlign={"center"} height={["240px","240px", "400px", "400px"]}>
              <VStack
                h="100%"
                p="3"
                justifyContent={[
                  "center",
                  "center",
                  "space-between",
                  "space-between",
                ]}
              >
                <Text
                  fontWeight="700"
                  fontSize={["20px", "20px", "30px", "42px"]}
                >
                  {item.text}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["15px", "20px", "25px", "36px"]}
                >
                  {item.start}
                </Text>
                <Box>
                  <Text
                    fontWeight="400"
                    fontSize={["13px", "17px", "20px", "24px"]}
                    textAlign="justify"
                    w="100%"
                    noOfLines={'2'}
                  >
                    {item.desc}
                  </Text>
                </Box>
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
              </VStack>
            </Box>
          </SimpleGrid>
        ))}
      </Box>
      <Box w="90%" mx="auto" mt="2rem" mb="10px">
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={7}>
          {sailing?.map((e, ind) => (
            <SimpleGrid
              columns={[1, 2, 2, 2]}
              spacing={2}
              key={ind}
              p="2"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            >
              <Box>
                <Image src={e.imgurl} alt="d" w="100%" h="100%" />
              </Box>
              <Box
                h="100%"
                display={"flex"}
                justifyContent="space-between"
                flexDirection={"column"}
              >
                <Text
                  fontWeight="700"
                  fontSize={["1.5rem", "2rem", "18px", "20px"]}
                  color="#000000"
                >
                  {e.title}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["1.2rem", "1rem", "18px", "20px"]}
                  color="#000000"
                  textAlign={"justify"}
                >
                  {e.desc}
                  <br />
                  Starts From Rs.{e.prise}
                </Text>
                <Button
                  w={{ base: "100%", md: "113px" }}
                  h="40px"
                  backgroundColor={"#081839"}
                  color="white"
                  _hover={{ backgroundColor: "#081839" }}
                  fontWeight={"700"}
                  fontSize={["1.2rem", "1rem", "18px", "20px"]}
                  mt="20px"
                >
                  Book Now
                </Button>
              </Box>
            </SimpleGrid>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Birthday;
