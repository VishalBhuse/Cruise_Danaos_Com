import React from "react";
import { Box, Text, Grid, Image, Button } from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Gallery = () => {
  return (
    <Box w="90%" mx="auto">
      <Text
        textAlign={"center"}
        fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
        lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
        color={"#00000"}
        fontWeight={"700"}
        borderBottom={"2px solid #1E1E1E"}
      >
        Gallery
      </Text>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={5}
        mt="5"
      >
        <Image src="./img/vishal/hmg1.png" alt="pa1" w="100%" h="auto" />
        <Image src="./img/vishal/hmg2.png" alt="pa2" w="100%" h="auto" />
      </Grid>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={5}
        mt="5"
      >
        <Image src="./img/vishal/hmg3.png" alt="pa31" w="100%" h="auto" />
        <Image src="./img/vishal/hmg4.png" alt="pa4" w="100%" h="auto" />
      </Grid>

      <Box w="100%" mx="auto" textAlign={"center"} my={{ base: "5", md: "10" }}>
        <Button
          p="1rem"
          py='1.5rem'
          fontWeight="700"
          fontSize={{ base: "18px", md: "30px" }}
          _hover={{
            background: "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
          }}
          background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
          textTransform={"capitalize"}
        >
          view more &nbsp;
          <HiOutlineArrowRight />
        </Button>
      </Box>

      <Box borderBottom={"2px solid #1E1E1E"} my="2">
        <Text
          textAlign={"center"}
          fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
          lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "50px" }}
          color={"#00000"}
          fontWeight={"700"}
        >
          Top Reviews from Customers
        </Text>
      </Box>
    </Box>
  );
};

export default Gallery;
