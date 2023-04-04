import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Button,
  OrderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { sailingsixdata } from "../../UTIL/localstorageauth/PagesData/Data";

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
            mt={["30px", "50px", "40px"]}
            fontSize={{ sm: "15px", md: "25px", lg: "40px", xl: "50px" }}
            color={"#00000"}
            fontWeight={"700"}
            textAlign="center"
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
            As the sun melts into the horizon and nightfall takes its place, our
            majestic Danaos Tourism comes to life hosting guests enjoying our
            award-winning Sunset Sail and City Lights Dinner Cruise. Voted the
            Outstanding Attraction Experience 2022 by the Singapore Tourism
            Board, these sentiments are echoed internationally by Tripadvisor
            winning the Traveler’s Choice Award for the last 3 consecutive years
            and taking top honours with the Best of the Best accolade in 2022
            putting Royal Albatross in the top 1% of attractions worldwide.
            <br />
            <br />
            Our dine and sail packages are perfect for celebrating in style, be
            it a romantic date, a special birthday or anniversary, or simply an
            opportunity to spend quality time with family and friends, you are
            assured of an unforgettable evening with Royal Albatross and its
            award-winning crew. Savour the gastronomical delights of our
            7-course dinner, complemented with a wine tasting session to
            complement your delectable meal. Experience an unobstructed view of
            Nature transitioning between day and night, through our Sunset Sail
            Cruise that allows passengers to enjoy the best of both settings.
            Prefer the evening breeze, and witness as Singapore comes to life at
            night? The City Lights Cruise will illuminate your senses, as you
            and your loved ones cruise Singapore’s calm port waters on our
            open-air breezy decks and admire the coastline, with fireworks
            courtesy of the Wings of Time night show at Sentosa.
            <br />
            <br />
            The magic is not limited to just your surroundings; our Danaos
            Tourism takes centerstage in delivering an enchanting evening at
            sea. With the traditional rigging of this 4-mast 22-sail luxury
            Danaos Tourism towering overhead, 360-degree sea views, and mood
            lighting surrounding you, the Royal Albatross creates a truly unique
            dining ambiance like no other! Rich in history, the Royal Albatross
            upholds its authenticity by retaining traditional sailing methods.
            Down below on the main deck, our stunning air-conditioned Grand
            Salon is always available for relaxing and chilling. Along with two
            premium bars, a flying seat over the water and our carefully
            selected live entertainment, our harbour cruises and dinner cruises
            have all the ingredients for an unforgettable evening on board our
            amazing superyacht
            <br />
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
          {sailingsixdata.map((e, ind) => (
            <Text key={ind} as="span">
              <Box height="auto">
                <SimpleGrid columns={[2, 2, 2, 2]} spacing="2">
                  <Box h="240px">
                    <Image
                      borderRadius={"10px"}
                      src={e.imgurl}
                      alt="d"
                      w="100%"
                      h="100%"
                    />
                  </Box>

                  <Box height={["240px", "240px", "240px"]} px="2">
                    <VStack
                      textAlign={"justify"}
                      h="100%"
                      alignItems={"flex-start"}
                      justifyContent={[
                        "center",
                        "space-between",
                        "space-between",
                      ]}
                      textTransform="capitalize"
                    >
                      <Text
                        letterSpacing={"2px"}
                        fontWeight="700"
                        fontSize={{ base: "18px", md: "18px", lg: "20px" }}
                        color="#000000"
                      >
                        {e.title}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "14px", md: "12px", lg: "15px" }}
                        color="#000000"
                        textAlign={"justify"}
                        noOfLines="3"
                      >
                        {e.desc}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "12px", md: "12px", lg: "15px" }}
                        color="#000000"
                        textAlign={"justify"}
                      >
                        Starts From Rs.{e.prise}
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
                    </VStack>
                  </Box>
                </SimpleGrid>
              </Box>
            </Text>
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
          {sailingsixdata.map((e, ind) => (
            <Text key={ind} as="span">
              <Box height="auto">
                <SimpleGrid columns={[2, 2, 2, 2]} spacing="2">
                  <Box h="240px">
                    <Image
                      src={e.imgurl}
                      alt="d"
                      w="100%"
                      h="100%"
                      borderRadius={"10px"}
                    />
                  </Box>

                  <Box height={["240px", "240px", "240px"]} px="2">
                    <VStack
                      textAlign={"justify"}
                      h="100%"
                      alignItems={"flex-start"}
                      justifyContent={[
                        "center",
                        "space-between",
                        "space-between",
                      ]}
                      textTransform="capitalize"
                    >
                      <Text
                        letterSpacing={"2px"}
                        fontWeight="700"
                        fontSize={{ base: "18px", md: "18px", lg: "20px" }}
                        color="#000000"
                      >
                        {e.title}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "14px", md: "12px", lg: "15px" }}
                        color="#000000"
                        textAlign={"justify"}
                        noOfLines="3"
                      >
                        {e.desc}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "12px", md: "12px", lg: "15px" }}
                        color="#000000"
                        textAlign={"justify"}
                      >
                        Starts From Rs.{e.prise}
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
                    </VStack>
                  </Box>
                </SimpleGrid>
              </Box>
            </Text>
          ))}
        </SimpleGrid>

        <Text
          fontWeight="700"
          fontSize={{ base: "13px", md: "15px", lg: "20px" }}
          my={{ base: "10px", md: "5px" }}
        >
          Terms & Conditions:
        </Text>
        <OrderedList
          fontSize={{ base: "10px", md: "13px", lg: "15px" }}
          fontWeight="500"
          textAlign={"justify"}
        >
          <ListItem>
            Promo code redemption is only with the purchase of a pair of
            regular-priced City Lights dinner cruise tickets (INR 225++) on
            Danaos Tourism with promotion code “TAKEMEHOME” only. Promo code has
            no monetary value and is valid for same-day, one-way, single
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
            Under no circumstances will Danaos Tourism be held responsible or
            liable in any way for any claims, damages, losses, expenses, costs,
            or liabilities whatsoever.
          </ListItem>
          <ListItem>
            Danaos Tourism reserves the right to change these terms and
            conditions at any time without prior notice. This promo code cannot
            be used in conjunction with any other ongoing promotions.
          </ListItem>
        </OrderedList>
      </Box>
    </>
  );
};

export default Sailing;
