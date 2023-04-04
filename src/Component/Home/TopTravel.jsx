import React from "react";
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
const TopTravel = () => {
  return (
    <Box w="90%" mx="auto" mt="2rem" mb="10px">
      <Text
        textAlign={"center"}
        fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
        lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
        color={"#00000"}
        fontWeight={"700"}
        borderBottom={"2px solid #1E1E1E"}
        mb="5"
      >
        Top Travel Articles
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} mt="5rem">
        <Box position={"relative"}>
          <Image src="./img/vishal/art1.png" alt="3" w="100%" />
          <Box
            position={"absolute"}
            top="-2rem"
            left="2rem"
            bg="#081839"
            w={["55px", "55px", "55px", "55px"]}
            borderRadius={"10px"}
            py="2"
            fontWeight={"600"}
            color={"#fff"}
            textAlign="center"
          >
            7th Mar
          </Box>
          <Text
            textAlign={"center"}
            fontWeight="500"
            w="70%"
            fontSize={{ sm: "18px", md: "16px", lg: "18px", xl: "20px" }}
            mx="auto"
            my="1"
          >
            Virtual Tourist – Singapore Edition – Royal Albatross
          </Text>
        </Box>
        <Box position={"relative"}>
          <Image src="./img/vishal/art2.png" alt="3" w="100%" />
          <Box
            position={"absolute"}
            top="-2rem"
            left="2rem"
            bg="#081839"
            w={["55px", "55px", "55px", "55px"]}
            borderRadius={"10px"}
            py="2"
            fontWeight={"600"}
            color={"#fff"}
            textAlign="center"
          >
            7th Mar
          </Box>
          <Text
            textAlign={"center"}
            fontWeight="500"
            w="70%"
            fontSize={{ sm: "18px", md: "16px", lg: "18px", xl: "20px" }}
            mx="auto"
            my="1"
          >
            Unique Places in Asia only found in Singapore
          </Text>
        </Box>
        <Box position={"relative"}>
          <Box
            position={"absolute"}
            top="-2rem"
            left="2rem"
            bg="#081839"
            w={["55px", "55px", "55px", "55px"]}
            borderRadius={"10px"}
            py="2"
            fontWeight={"600"}
            color={"#fff"}
            textAlign="center"
          >
            7th Mar
          </Box>
          <Image src="./img/vishal/art3.png" alt="3" w="100%" />
          <Text
            textAlign={"center"}
            fontWeight="500"
            w="70%"
            fontSize={{ sm: "18px", md: "16px", lg: "18px", xl: "20px" }}
            mx="auto"
            my="1"
          >
            Majestic Tall Ships that Founded Modern Asia.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TopTravel;
