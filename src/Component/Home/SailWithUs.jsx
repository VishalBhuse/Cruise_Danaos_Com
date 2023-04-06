import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { ourProd } from "../../UTIL/localstorageauth/PagesData/Data";
const SailWithUs = () => {
  return (
    <>
      <Text
        lineHeight={"42px"}
        fontSize={"26px"}
        textAlign="center"
        fontWeight="600"
      >
        Sail With Us
      </Text>
      <Text
        mb="5"
        pb="2"
        fontWeight={400}
        fontSize={"22px"}
        lineHeight={"27px"}
        textAlign="center"
        borderBottom={"2px solid #1E1E1E"}
      >
        -Our Products-
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {ourProd?.map((item) => (
          <Box height="auto" key={item.id}>
            <Box
              w="100%"
              bg={`url(${item.img})`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height={{ base: "300px", md: "300px", lg: "300px" }}
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
    </>
  );
};

export default SailWithUs;
