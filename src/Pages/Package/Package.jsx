import { Box, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

const pageData = [
  {
    id: 1,
    text: "Birthday Packages",
    start: "Starts From $499",
    desc: "Celebrate your special birthday with a set of deals and a unique experience with beautiful views that can only be found on board the Royal Albatross.",
    img: "./img/vishal/pack1.png",
    alt: "prod1",
  },
  {
    id: 2,
    text: "Group Birthday Party",
    img: "./img/vishal/pack2.png",
    desc: "Secrets are best unveiled at unforgettable locations and what better way than to deliver an unforgettable surprise with our celebration packages?",
    start: "Starts From $499",
    alt: "prod2",
  },
  {
    id: 3,
    text: "Anniversary Packages",
    img: "./img/vishal/pack3.png",
    desc: "Our wedding anniversary packages have been carefully curated to eternalize this important day and celebrate another beautiful milestone in your lives.",
    start: "Starts From $499",
    alt: "prod3",
  },
  {
    id: 4,
    text: "I am Sorry Packages",
    img: "./img/vishal/pack4.png",
    desc: "why not say “I’m Sorry” with our unique dinner cruise apology package onboard our 4-masted 22 sail superyacht that will surely calm even the most choppy waters",
    start: "Starts From $499",
    alt: "prod4",
  },
  {
    id: 5,
    text: "Proposal Packages",
    img: "./img/vishal/pack5.png",
    desc: "If you are looking for something truly special, unique, and meaningful, simply give us a call and take a moment with us while we sweep your special someone off their feet. A moment you will definitely remember and be proud of for many years to come.",
    start: "Starts From $499",
    alt: "prod5",
  },
  {
    id: 6,
    text: "Team Bonding Packages",
    img: "./img/vishal/pack6.png",
    desc: "Looking for a unique and spacious spot to host your corporate events? We have the perfect venue just for you.",
    start: "Starts From $499",
    alt: "prod6",
  },
];

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
        {pageData?.map((item) => (
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2 }}
            spacing={10}
            mt="12"
            key={item.id}
          >
            <Box>
              <Image src={item.img} alt={item.alt} boxSize={"100%"}></Image>
            </Box>
            <Box textAlign={"center"}>
              <VStack spacing={["20px", "50px"]} mt="4">
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
                <Button
                  fontFamily="700"
                  fontSize={"18px"}
                  textTransform={"capitalize"}
                  backgroundColor={"#081839"}
                  color="#fff"
                  _hover={{ backgroundColor: "#081839" }}
                  px="50px"
                >
                  view package
                </Button>
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
