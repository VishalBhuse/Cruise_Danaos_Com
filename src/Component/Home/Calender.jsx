import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  Box,
  Text,
  Grid,
  Button,
  HStack,
  VStack,
  GridItem,
} from "@chakra-ui/react";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Box w="90%" mx="auto">
      <Grid
        mt="5"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={1}
      >
        <GridItem colSpan={{ base: 1, sm: 2, md: 1, lg: 1 }}>
          <Box w="90%" m="auto">
            <VStack>
              <Box backgroundColor={"#DBDBDB"} textAlign="center">
                <Text fontWeight="500" fontSize={{ base: "18px", md: "22px" }}>
                  Search Schedule
                </Text>
                <Box
                  backgroundColor="#000000"
                  h="2px"
                  w={{ base: "60%", md: "80%" }}
                  my="1"
                ></Box>
                <Text
                  fontWeight="300"
                  fontSize={{ base: "18px", md: "22px" }}
                  textAlign={"left"}
                  ml={{ base: "1", md: "2" }}
                >
                  Select Sailing Date{" "}
                </Text>
                <Calendar
                  onChange={onChange}
                  value={value}
                  style={{ width: "40%" }}
                />
              </Box>
              <HStack>
                <Button
                  borderRadius={"5px"}
                  backgroundColor={"#1B7813"}
                  size={{ base: "sm", md: "lg" }}
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#1B7813",
                    color: "#fff",
                  }}
                  fontWeight="700"
                  fontSize={{ base: "8px", md: "10px", lg: "9px" }}
                  h={{ base: "28px", md: "34px" }}
                >
                  AVAILABLE
                </Button>
                <Button
                  borderRadius={"5px"}
                  backgroundColor={"#958813"}
                  size={{ base: "sm", md: "lg" }}
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#958813",
                    color: "#fff",
                  }}
                  fontWeight="700"
                  fontSize={{ base: "8px", md: "10px", lg: "9px" }}
                  h={{ base: "28px", md: "34px" }}
                >
                  SELLING FAST
                </Button>
                <Button
                  borderRadius={"5px"}
                  backgroundColor={"#C30000"}
                  size={{ base: "sm", md: "lg" }}
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#C30000",
                    color: "#fff",
                  }}
                  fontWeight="700"
                  fontSize={{ base: "8px", md: "10px", lg: "9px" }}
                  h={{ base: "28px", md: "34px" }}
                >
                  SOLD OUT
                </Button>
              </HStack>
              <Button
                borderRadius={"5px"}
                backgroundColor={"#081839"}
                size="lg"
                color={"#fff"}
                _hover={{
                  backgroundColor: "#081839",
                  color: "#fff",
                }}
                fontWeight="700"
                fontSize={{ base: "12px", md: "14px", lg: "18px" }}
                w={{ base: "80%", md: "95%" }}
                h={{ base: "40px", md: "48px" }}
                mx={"auto"}
                mt="4"
              >
                Check availability{" "}
              </Button>
            </VStack>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, sm: 2, md: 2, lg: 4 }}>
          <Box
            w="100%"
            bg="url('./img/vishal/ded.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            h="auto"
            py={["1", "1", "2"]}
          >
            <Box w="80%" m="auto">
              <Box
                mb="5"
                mt={{ base: "20", md: "3", lg: "5" }}
                borderRadius={{ base: "10px", md: "20px" }}
                textAlign={"center"}
                backgroundColor={"rgba(138, 133, 127, 0.7)"}
                color="#fff"
                py={{ base: "2", md: "3", lg: "5" }}
                px="2"
              >
                <Text
                  fontSize={{ base: "15px", md: "15px", lg: "22px" }}
                  fontWeight="700"
                >
                  We Are Dedicated
                </Text>
                <Box
                  backgroundColor="#fff"
                  h="1px"
                  w={{ base: "20%", md: "30%" }}
                  mx="auto"
                ></Box>
                <Text
                  fontSize={{ base: "15px", md: "15px", lg: "22px" }}
                  fontWeight="700"
                >
                  Finding the Best Prices & Experiences for you
                </Text>
                <Text
                  fontSize={{ base: "12px", md: "12px", lg: "16px" }}
                  fontWeight="500"
                  color="#fff"
                  my={{ base: "2", md: "3", lg: "5" }}
                  textAlign={"left"}
                  width={{ base: "100%", md: "fit-content", lg: "80%" }}
                  mx="auto"
                >
                  Book your cruise with us, with a partner travel agent or
                  directly with the cruise line. It’s your Vacation!
                </Text>
                <Text
                  fontSize={{ base: "12px", md: "12px", lg: "16px" }}
                  fontWeight="500"
                  color="#fff"
                  my={{ base: "2", md: "3", lg: "5" }}
                  textAlign={"left"}
                  width={{ base: "100%", md: "fit-content", lg: "80%" }}
                  mx="auto"
                >
                  Best Price Guarantee - we will work with a network of travel
                  partners after you book with us to make sure you have the best
                  price for you and your group.
                </Text>
                <Text
                  fontSize={{ base: "12px", md: "12px", lg: "16px" }}
                  fontWeight="500"
                  color="#fff"
                  my={{ base: "2", md: "3", lg: "5" }}
                  textAlign={"left"}
                  width={{ base: "100%", md: "fit-content", lg: "80%" }}
                  mx="auto"
                >
                  Select a Travel Agent in your area who specializes in cruise
                  vacations.
                </Text>
              </Box>

              <HStack
                mt="10"
                w="100%"
                m="auto"
                mb="1rem"
                flexWrap="wrap"
                justifyContent={"center"}
              >
                <Button
                  borderRadius={"10px"}
                  backgroundColor={"#081839"}
                  color={"#fff"}
                  _hover={{
                    backgroundColor: "#081839",
                    color: "#fff",
                  }}
                  fontWeight="700"
                  fontSize={{ sm: "10px", md: "12px", lg: "14px" }}
                  w={{ sm: "100%", md: "45%", lg: "45%" }}
                  mx={"auto"}
                  my={2}
                >
                  Start Basic Cruise Search
                </Button>
                <Button
                  borderRadius={"10px"}
                  backgroundColor={"#F2CD5B"}
                  color={"#081839"}
                  _hover={{
                    backgroundColor: "#F2CD5B",
                    color: "#081839",
                  }}
                  fontWeight="700"
                  fontSize={{ sm: "10px", md: "12px", lg: "14px" }}
                  w={{ sm: "100%", md: "45%", lg: "45%" }}
                  mx={"auto"}
                  my={2}
                >
                  Start Basic Cruise Search
                </Button>
              </HStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Calender;
