import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Button,
  HStack,
  OrderedList,
  ListItem,
  List,
} from "@chakra-ui/react";
import React from "react";
const sailing = [
  {
    id: 1,
    imgurl: "./img/party-birth.png",
    title: "Group Birthday Package",
    prise: "399",
    desc: "Birthday Dinner Cruise - Super Yacht Royal Albatross",
  },
  {
    id: 2,
    imgurl: "./img/party2-birth.png",
    title: "I'm Sorry Package",
    prise: "399",
    desc: "If you are Looking to host your dream wedding,the Royal Albatross is the perfect venue.",
  },
  {
    id: 3,
    imgurl: "./img/party3-birth.png",
    title: "Anniversery Package",
    prise: "399",
    desc: "As our saying goes, Marriages are made in heaven; but celebrated aboard the Royal Albatross!",
  },
  {
    id: 4,
    imgurl: "./img/party-birth.png",
    title: "Group Birthday Package",
    prise: "399",
    desc: "Birthday Dinner Cruise - Super Yacht Royal Albatross",
  },
  {
    id: 5,
    imgurl: "./img/party2-birth.png",
    title: "I'm Sorry Package",
    prise: "399",
    desc: "If you are Looking to host your dream wedding,the Royal Albatross is the perfect venue.",
  },
  {
    id: 6,
    imgurl: "./img/party3-birth.png",
    title: "Anniversery Package",
    prise: "399",
    desc: "As our saying goes, Marriages are made in heaven; but celebrated aboard the Royal Albatross!",
  },
];

const Sailing = () => {
  return (
    <>
      <Box
        mt="20px"
        w="90%"
        mx="auto"
        bg="url('./img/vishal/sail.png')"
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
          fontSize={{ sm: "15px", md: "25px", lg: "40px", xl: "60px" }}
          color={"#00000"}
          textAlign="center"
          fontWeight={"700"}
        >
          Special Sailing
        </Text>
        <Box w="95%" mx="auto">
          <Text
            mt={["30px", "50px", "100px"]}
            fontSize={{ sm: "15px", md: "25px", lg: "40px", xl: "50px" }}
            color={"#00000"}
            fontWeight={"700"}
          >
            If you love relaxing, discovering new places and having fun then
            cruising is the perfect vacation getaway.
          </Text>
        </Box>
      </Box>
      <Box w="90%" mx="auto" my="5">
        <Box borderBottom={"2px solid #1E1E1E"} pb="7">
          <Text
            fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
            lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
            color={"#00000"}
            fontWeight={"700"}
            borderBottom={"2px solid #1E1E1E"}
          >
            Sunset Dinner Cruise with free flow beer and wine
          </Text>
          <Text
            textAlign={"justify"}
            fontWeight="400"
            fontSize={{ sm: "5px", md: "5px", lg: "15px", xl: "20px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            odio aenean sed adipiscing. Nibh tortor id aliquet lectus proin.
            Tempor nec feugiat nisl pretium fusce id velit ut tortor. Tellus
            rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Commodo odio
            aenean sed adipiscing. Nibh tortor id aliquet lectus proin.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Commodo odio
            aenean sed adipiscing. Nibh tortor id aliquet lectus proin. Tempor
            nec feugiat nisl pretium fusce id velit ut tortor. Tellus rutrum
            tellus pellentesque eu tincidunt tortor aliquam nulla.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed
            adipiscing. Nibh tortor id aliquet lectus proin. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed
            adipiscing. Nibh tortor id aliquet lectus proin. Tempor nec feugiat
            nisl pretium fusce id velit ut tortor. Tellus rutrum tellus
            pellentesque eu tincidunt tortor aliquam nulla.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Commodo odio aenean sed
            adipiscing. Nibh tortor id aliquet lectus proin.
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
            lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
            color={"#00000"}
            fontWeight={"700"}
          >
            Ticket Selling Fast - Book Now
          </Text>
        </Box>
        <SimpleGrid
          mt="2"
          columns={[1, 1, 2, 3]}
          spacing="40px"
          borderBottom={"2px solid #1E1E1E"}
          pb="5"
        >
          {sailing.map((e, ind) => (
            <Box key={ind} p="2" h="auto">
              <HStack spacing={5}>
                <Image src={e.imgurl} alt="d" w="40%" h="200px" />
                <Box>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "12px", md: "18px", lg: "20px" }}
                    color="#000000"
                  >
                    {e.title}
                  </Text>
                  <Text
                    fontWeight="500"
                    fontSize={{ base: "10px", md: "12px", lg: "15px" }}
                    color="#000000"
                    textAlign={"justify"}
                  >
                    {e.desc}
                    <br />
                    Starts From ${e.prise}
                  </Text>
                  <Button
                    w={{ base: "100%", md: "113px" }}
                    h="40px"
                    backgroundColor={"#081839"}
                    color="white"
                    _hover={{ backgroundColor: "#081839" }}
                    fontWeight={"700"}
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    mt="20px"
                  >
                    Book Now
                  </Button>
                </Box>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box>
          <Text
            fontSize={{ sm: "15px", md: "25px", lg: "32px", xl: "32px" }}
            lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
            color={"#00000"}
            fontWeight={"700"}
          >
            Popular Packages
          </Text>
        </Box>

        <SimpleGrid
          mt="2"
          columns={[1, 1, 2, 3]}
          spacing="40px"
          borderBottom={"2px solid #1E1E1E"}
          pb="5"
        >
          {sailing.map((e, ind) => (
            <Box key={ind} p="2" h="auto">
              <HStack spacing={5}>
                <Image src={e.imgurl} alt="d" w="40%" h="200px" />
                <Box>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "12px", md: "18px", lg: "20px" }}
                    color="#000000"
                  >
                    {e.title}
                  </Text>
                  <Text
                    fontWeight="500"
                    fontSize={{ base: "10px", md: "12px", lg: "15px" }}
                    color="#000000"
                    textAlign={"justify"}
                  >
                    {e.desc}
                    <br />
                    Starts From ${e.prise}
                  </Text>
                  <Button
                    w={{ base: "100%", md: "113px" }}
                    h="40px"
                    backgroundColor={"#081839"}
                    color="white"
                    _hover={{ backgroundColor: "#081839" }}
                    fontWeight={"700"}
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    mt="20px"
                  >
                    Book Now
                  </Button>
                </Box>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        <Text
          fontWeight="700"
          fontSize={{ base: "7px", md: "13px", lg: "20px" }}
          my={{ base: "5px", md: "5px" }}
        >
          Terms & Conditions:
        </Text>
        <OrderedList
          fontSize={{ base: "5px", md: "11px", lg: "15px" }}
          fontWeight="500"
        >
          <ListItem>
            Promo code redemption is only with the purchase of a pair of
            regular-priced City Lights dinner cruise tickets ($225++) on
            tallship.com.sg with promotion code “TAKEMEHOME” only. Promo code
            has no monetary value and is valid for same-day, one-way, single
            location drop-off, single-use only and cannot be transferred,
            exchanged for cash, or offset for any other products or services.
            Once Limousine booking has been confirmed this coupon will be
            considered claimed.
          </ListItem>
          <ListItem>
            Additional charges due to re-booking of limousine due to no-show,
            additional locations & added expenses from the ride will need to be
            at the customer’s expense and based on limousine service’s standard
            rates.
          </ListItem>
          <ListItem>
            Under no circumstances will Danaos Tourism Adventures Pte Ltd be
            held responsible or liable in any way for any claims, damages,
            losses, expenses, costs, or liabilities whatsoever.
          </ListItem>
          <ListItem>
            Danaos Tourism Adventures Pte Ltd reserves the right to change these
            terms and conditions at any time without prior notice. This promo
            code cannot be used in conjunction with any other ongoing
            promotions.
          </ListItem>
        </OrderedList>
      </Box>
    </>
  );
};

export default Sailing;
