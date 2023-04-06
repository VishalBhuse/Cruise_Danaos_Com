import {
  Box,
  // Text,
  // Grid,
  // Button,
  // HStack,
  // VStack,
  // Input,
} from "@chakra-ui/react";
import React from "react";

// import { HiOutlineArrowRight } from "react-icons/hi";

import Carousel from "../../Component/Home/Carousel";
import Gallery from "../../Component/Home/Gallery";
import TopTravel from "../../Component/Home/TopTravel";
import TopThings from "../../Component/Home/TopThings";
import BestAndTopTravel from "../../Component/Home/BestAndTopTravel";
import Birthday from "../../Component/Home/Birthday";
import HomeServices from "../../Component/Home/HomeServices";
import SailWithUs from "../../Component/Home/SailWithUs";
import Calender from "../../Component/Home/Calender";

const Home = () => {
  return (
    <>
      {/* <Box w="90%" mx="auto">
        <Box
          w="100%"
          bg="url('./img/vishal/homeban.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          height={{ base: "200px", md: "400px", lg: "600px" }}
        >
          <Box w="90%" mx="auto">
            <Box w={["60%", "60%", "50%"]} mt="0.5rem">
              <VStack
                justifyContent={"flex-start"}
                spacing={{ base: "20px", md: "20px", lg: "50px" }}
              >
                <Box>
                  <Text
                    mt={{ base: "10px", md: "15px" }}
                    fontSize={{
                      base: "10px",
                      sm: "15px",
                      md: "25px",
                      lg: "35px",
                      xl: "35px",
                    }}
                    color={"#081839"}
                    fontWeight={"700"}
                  >
                    Living the cruise life. <br /> A bad day on a cruise is
                    better than a good day anywhere else.
                  </Text>
                  <Button
                    mt="3"
                    background={
                      "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                    }
                    _hover={{
                      background:
                        "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                    }}
                    fontWeight={"700"}
                    fontSize={["8px", "15px"]}
                    color={"#081839"}
                    size={["xs", "xs", "md"]}
                  >
                    Book Now
                  </Button>
                </Box>
              </VStack>
            </Box>
            <Box mt="3" display={["none", "none", "none", "block"]}>
              <HStack>
                <Box
                  width={"207px"}
                  height={["308px"]}
                  background={"rgba(8, 24, 57, 0.59)"}
                  borderRadius={"10px"}
                  display="flex"
                  justifyContent={"space-between"}
                  flexDirection="column"
                  px="2"
                  py="2"
                  color={"#FFFFFF"}
                >
                  <Text fontWeight={"700"} fontSize={"32px"} textAlign="center">
                    Tour
                  </Text>
                  <Text
                    fontWeight={"500"}
                    fontSize={"12px"}
                    textAlign="justify"
                  >
                    Celebrate a special occasion such as an anniversary,
                    birthday or proposal on the Royal Albatross. Make your
                    memory unique on board Asia’s only Luxury Danaos. Find
                    special deals and offers exclusively on Asia’s only Luxury
                    Danaos; The Royal Albatross
                  </Text>
                  <Box w="100%" mx="auto" textAlign={"center"}>
                    <Button
                      px={{ base: "2", md: "4" }}
                      py={{ base: "1", md: "2" }}
                      fontWeight="700"
                      fontSize={{ base: "10px", md: "14px" }}
                      _hover={{
                        background:
                          "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                      }}
                      background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                      textTransform={"capitalize"}
                      color="#081839"
                    >
                      view more &nbsp;
                      <HiOutlineArrowRight />
                    </Button>
                  </Box>
                </Box>
                <Box
                  width={"207px"}
                  height={["308px"]}
                  background={"rgba(8, 24, 57, 0.59)"}
                  borderRadius={"10px"}
                  display="flex"
                  justifyContent={"space-between"}
                  flexDirection="column"
                  px="2"
                  py="2"
                  color={"#FFFFFF"}
                >
                  <Text fontWeight={"700"} fontSize={"32px"} textAlign="center">
                    Locations
                  </Text>
                  <Text
                    fontWeight={"500"}
                    fontSize={"12px"}
                    textAlign="justify"
                  >
                    Celebrate a special occasion such as an anniversary,
                    birthday or proposal on the Royal Albatross. Make your
                    memory unique on board Asia’s only Luxury Danaos. Find
                    special deals and offers exclusively on Asia’s only Luxury
                    Danaos; The Royal Albatross
                  </Text>
                  <Box w="100%" mx="auto" textAlign={"center"}>
                    <Button
                      px={{ base: "2", md: "4" }}
                      py={{ base: "1", md: "2" }}
                      fontWeight="700"
                      fontSize={{ base: "10px", md: "14px" }}
                      _hover={{
                        background:
                          "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                      }}
                      background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                      textTransform={"capitalize"}
                      color="#081839"
                    >
                      view more &nbsp;
                      <HiOutlineArrowRight />
                    </Button>
                  </Box>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box> */}
      {/* <Box mt="-1.5rem" mb="3rem" w="80%" mx="auto" bg="red">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
          ]}
          width="100%"
          mx="auto"
          // width={{ sm: "full", md: "full", lg: "80" }}
          background={"#F2CD5B"}
          boxShadow={"4px 4px 4px rgba(0, 0, 0, 0.25)"}
          py={["1", "1", "1", "5"]}
        >
          <Box
            padding={"15px"}
            borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
          >
            <Text
              margin={"10px 0px"}
              color={"#081839"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Where to?
            </Text>
            <Input
              border={"2px solid #081839"}
              width={"100%"}
              placeholder="All destination"
            ></Input>
          </Box>

          <Box
            padding={"15px"}
            borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
          >
            <Text
              margin={"10px 0px"}
              color={"#081839"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              All Cruise Line
            </Text>
            <Input
              border={"2px solid #081839"}
              width={"100%"}
              placeholder="Holland America Line"
            ></Input>
          </Box>

          <Box padding={"15px"}>
            <Text
              margin={"10px 0px"}
              color={"#081839"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Check-In
            </Text>
            <Input
              border={"2px solid #081839"}
              width={"100%"}
              placeholder="12 / 03 / 2023"
            ></Input>
          </Box>
          <Box
            padding={"15px"}
            borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
          >
            <Text
              margin={"10px 0px"}
              color={"#081839"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Check-Out
            </Text>
            <Input
              border={"2px solid #081839"}
              width={"100%"}
              placeholder="12 / 03 / 2023"
            ></Input>
          </Box>

          <Box
            padding={"15px"}
            borderRight={{ sm: "none", md: "none", lg: "1px solid black" }}
          >
            <Text
              margin={"10px 0px"}
              color={"#081839"}
              fontWeight={"700"}
              fontSize={"18px"}
            >
              Persons & Room
            </Text>
            <Input
              border={"2px solid #081839"}
              width={"100%"}
              placeholder="2 Adults - 1 Children 1 Room"
            ></Input>
          </Box>
          <Box padding={"15px"}>
            <Text
              margin={"10px 0px"}
              color={"#081839"}
              fontWeight={"700"}
              fontSize={"18px"}
              visibility="hidden"
            >
              kjnk
            </Text>
            <Button
              background={"#081839"}
              color={"#FFFFFF"}
              fontSize={"16px"}
              size="md"
            >
              Search
            </Button>
          </Box>
        </Grid> */}
        {/* <Box
          marginLeft={{ sm: "240px", md: "570px", lg: "740px" }}
          marginTop={{ sm: "-100px", md: "-100px", lg: "-70px" }}
        >
          <Button
            width="113px"
            textAlign={"end"}
            height={"40px"}
            backgroundColor={"#081839"}
            color="white"
            // marginTop={"10px"}
            _hover={{ backgroundColor: "#081839" }}
          >
            Search
          </Button>
        </Box> */}
      {/* </Box> */}

      {/* calender */}
      <Calender />

      <Box w="90%" mx="auto" mt="2rem" mb="10px">
        {/* sailwuthus */}
        <SailWithUs />
        {/* home service and package map data */}
        <HomeServices />
      </Box>

      {/* birhtday  */}
      <Birthday />
      {/* best and top travel */}
      <BestAndTopTravel />
      {/* TopThings */}
      <TopThings />
      {/* top travel */}
      <TopTravel />
      {/* gallery */}
      <Gallery />
      {/* testimonial */}
      <Carousel />
    </>
  );
};

export default React.memo(Home);
