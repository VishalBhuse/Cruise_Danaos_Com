import React from "react";
import {
  travelData,
  traveldest,
} from "../../UTIL/localstorageauth/PagesData/Data";
import { Box, Text, SimpleGrid, HStack, VStack } from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";
import { Rating } from "../../Rating/Rating";

const BestAndTopTravel = () => {
  return (
    <>
      <Box w="90%" mx="auto" mt="3rem" mb="10px">
        <Text
          textAlign={"center"}
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
          mb="5"
        >
          Best Travel Deal’s
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {travelData?.map((item, ind) => (
            <Box height="auto" key={ind}>
              <Box
                w="100%"
                bg={`url(${item.imgurl})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height={{ base: "300px", md: "300px", lg: "300px" }}
                display="grid"
                placeItems={"center"}
              ></Box>
              <Box
                fontSize="20px"
                backgroundColor={"#F2CD5B"}
                p="2"
                height={{ base: "auto", md: "140px", lg: "130px" }}
              >
                <VStack
                  alignItems="center"
                  h="100%"
                  textTransform={'capitalize'}
                >
                  <Text w="100%" color="#081839" textAlign="justify" fontSize={'22px'} px='2' noOfLines={'2'}>
                    {item.heading}
                  </Text>
                  <HStack justifyContent={"space-between"} w="100%">
                  <Text >
                    <Rating stars={item.rating} key={item.index} />
                  </Text>
                    <Text  fontSize={'16px'} as="span">
                      Start From -
                      <Text as="span" color="#277E1F">
                        Rs. {item.price}
                      </Text>
                    </Text>
                    
                  </HStack>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box w="90%" mx="auto" mt="10px" mb="10px">
        <Text
          textAlign={"center"}
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
          color={"#00000"}
          fontWeight={"700"}
          borderBottom={"2px solid #1E1E1E"}
          mb="5"
        >
          Top Travel Destinations
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {traveldest?.map((item) => (
            <Box height="auto" key={item.id}>
              <Box
                w="100%"
                bg={`url(${item.img})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height={{ base: "300px", md: "500px", lg: "500px" }}
                display="grid"
                placeItems={"center"}
              >
                <Text
                  w={["100%", "100%", "100%"]}
                  h="75px"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  backgroundColor={"rgba(242, 205, 91, 0.6)"}
                  fontSize="28px"
                  fontWeight="700"
                  color="#081839"
                >
                  {item.text}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default BestAndTopTravel;
