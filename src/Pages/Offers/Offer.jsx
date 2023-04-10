import {
  Box,
  Grid,
  GridItem,
  Image,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Offer = () => {
  return (
    <>
      <Box w="90%" mx="auto">
        <Box
          w="100%"
          bg="url('./img/vishal/offers.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          // height={["auto", "300px", "450px", "550px", "600px"]}
        >
          <Box w={{ base: "90%", md: "80%", lg: "80%" }} mx="auto" h="100%">
            <VStack
              justifyContent={"space-between"}
              spacing={{ base: "20px", md: "20px", lg: "50px" }}
              h="100%"
            >
              <Box>
                <Text
                  fontSize={{
                    base: "30px",
                    sm: "35px",
                    md: "55px",
                    lg: "100px",
                    xl: "100px",
                  }}
                  color={"#081839"}
                  textAlign="center"
                  fontWeight={"700"}
                >
                  Offers & Deals
                </Text>
                <Text
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "24px",
                    xl: "24px",
                  }}
                  color={"#00000"}
                  fontWeight={"400"}
                  mt={{ base: "5px", md: "10px" }}
                  textAlign="center"
                >
                  Find the best offers and deals below and join us on India's
                  Danaos ship where you’re guaranteed open well-ventilated decks
                  and fresh sea breezes!
                </Text>
              </Box>
              <Box textAlign={"justify"}>
                <Text
                  mt="40px"
                  fontWeight="800"
                  fontSize={{
                    base: "19px",
                    sm: "19px",
                    md: "30px",
                    lg: "50px",
                    xl: "50px",
                  }}
                  color={"#fff"}
                >
                  <Text as="span">“The goal is not to sail the </Text>
                  <Text color={"#000000"} as="span">
                    boat, but rather &nbsp;
                  </Text>
                  to help the boat sail herself.”
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>

        <Box
          textAlign={"justify"}
          borderBottom={"2px solid #1E1E1E"}
          my="3"
          mb="2"
        >
          <Text
            fontWeight="800"
            fontSize={{ base: "15px", md: "25px", lg: "35px" }}
          >
            Exclusive Promotions & Discounts Onboard The Nauti Amigo
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "10px", md: "20px", lg: "25px" }}
            my={{ base: "10px", md: "20px" }}
          >
            Find the best deals below and join us on Asia’s only luxury Danaos
            Tourism where you’re guaranteed open well-ventilated decks and fresh
            sea breezes!
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "10px", md: "20px", lg: "25px" }}
            my={{ base: "10px", md: "20px" }}
          >
            Simply ‘copy’ the promo code below during checkout and enjoy the
            promotions!
          </Text>
        </Box>

        <Box mt="10">
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="1rem"
          >
            <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 2 }}>
              <Box>
                <Image
                  src="./img/vishal/offer1.png"
                  alt="of1"
                  // w={["80%", "50%", "100%", "80%", "80%"]}
                  // h="50%"
                  boxSize={["200px", "250px", "350px", "400px"]}
                  mx="auto"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, sm: 1, md: 3, lg: 3 }}>
              <VStack
                h="100%"
                justifyContent={"center"}
                alignItems="flex-start"
              >
                <Box textAlign={"justify"}>
                  <Text
                    fontWeight="800"
                    fontSize={["10px", "19px", "20px", "25px"]}
                  >
                    RAISE YOUR GLASSES
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                    my={{ base: "10px", md: "20px" }}
                  >
                    Promo Code not needed.
                    <br />
                    Valid till: 1 Feb – 31 March 2023
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                    my={{ base: "10px", md: "20px" }}
                  >
                    Complimentary drink from our standard bar.
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                    my={{ base: "10px", md: "20px" }}
                  >
                    Not applicable on special sailings.
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Grid>

          <Grid
            mt="5"
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="1rem"
          >
            <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 2 }}>
              <Box>
                <Image
                  src="./img/vishal/offer2.png"
                  alt="of1"
                  // w={["80%", "50%", "100%", "80%", "80%"]}
                  // h="50%"
                  boxSize={["200px", "250px", "350px", "400px"]}
                  mx="auto"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, sm: 1, md: 3, lg: 3 }}>
              <VStack
                h="100%"
                justifyContent={"center"}
                alignItems="flex-start"
              >
                <Box textAlign={"justify"}>
                  <Text
                    fontWeight="800"
                    fontSize={["10px", "20px", "20px", "25px"]}
                  >
                    GREAT SINGAPORE SAIL Promo
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                    my={{ base: "6px", md: "15px" }}
                  >
                    Promo Code: TAKEMEHOME
                    <br />
                    Valid till: June 2023 Free Single-way
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "9px", md: "13px", lg: "20px" }}
                  >
                    Free Single-way Limo Ride home worth Rs.7000.
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "9px", md: "13px", lg: "20px" }}
                  >
                    Every purchase of 2x Adult City Lights Dinner Cruise!
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Grid>

          <Grid
            mt="5"
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="1rem"
          >
            <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 2 }}>
              <Box>
                <Image
                  src="./img/vishal/offer3.png"
                  alt="of1"
                  // w={["80%", "50%", "100%", "80%", "80%"]}
                  // h="50%"
                  boxSize={["200px", "250px", "350px", "400px"]}
                  mx="auto"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, sm: 1, md: 3, lg: 3 }}>
              <VStack
                h="100%"
                justifyContent={"center"}
                alignItems="flex-start"
              >
                <Box textAlign={"justify"}>
                  <Text
                    fontWeight="800"
                    fontSize={["10px", "20px", "20px", "25px"]}
                  >
                    COMPLIMENTARY PROSECCO
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                    my={{ base: "6px", md: "15px" }}
                  >
                    Promo Code: FREEWINE
                    <br />
                    Valid till: June 2023
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "9px", md: "13px", lg: "20px" }}
                  >
                    A complimentary bottle of Prosecco with every purchase.
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "9px", md: "13px", lg: "20px" }}
                  >
                    And 2x Adult City Lights Dinner Cruise!
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        </Box>

        <Box textAlign={"justify"} mt="10">
          <Text
            fontWeight="700"
            fontSize={["12px", "17px", "20px", "20px"]}
            my={{ base: "5px", md: "5px" }}
          >
            Terms & Conditions:
          </Text>
          <OrderedList
            fontSize={["10px", "15px", "15px", "15px"]}
            fontWeight="500"
          >
            <ListItem>
              Promo code requires the purchase of 2 regular-priced City Lights
              dinner cruise tickets (INR 225++) on danaostourism.com, enter
              promotion code “FREEWINE” at checkout.
            </ListItem>
            <ListItem>
              Promo code has no monetary value, single-use only and cannot be
              transferred, exchanged for cash, or offset for any other products
              or services.
            </ListItem>
            <ListItem>
              Danaos Tourism Ship reserves the right to change these terms and
              conditions at any time without prior notice.
            </ListItem>
            <ListItem>
              This promo code cannot be used in conjunction with any other
              ongoing promotions.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
    </>
  );
};

export default Offer;
