import {
  Box,
  Text,
  Grid,
  Image,
  Button,
  SimpleGrid,
  HStack,
  VStack,
  GridItem,
  Heading,
  UnorderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { HiOutlineArrowRight } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  birthData,
  ourProd,
  sailing,
  testimonials,
  travelData,
  traveldest,
  worldwide,
} from "../../UTIL/localstorageauth/PagesData/Data";
import { Rating } from "../../Rating/Rating";
SwiperCore.use([Autoplay, Pagination]);

const Home = () => {
  const [value, onChange] = useState(new Date());
  const [services, setservices] = useState([]);
  const getPackageData = async () => {
    await axios
      .get(
        "https://backenddanaoscruise-production-ed75.up.railway.app/managepackage"
      )
      .then((res) => {
        setservices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPackageData();
  }, []);

  return (
    <>
      <Box w="90%" mx="auto">
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
      </Box>

      <Box mt="-1.5rem" mb="3rem" w="80%" mx="auto" bg="red">
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
            {/* <Box padding={"15px"} display='grid' placeItems={'center'}> */}
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
        </Grid>
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
      </Box>

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
                  <Text
                    fontWeight="500"
                    fontSize={{ base: "18px", md: "22px" }}
                  >
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
              bg="url('./img/ded.png')"
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
                  px='2'
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
                    partners after you book with us to make sure you have the
                    best price for you and your group.
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

      <Box w="90%" mx="auto" mt="2rem" mb="10px">
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
                height={{ base: "200px", md: "300px", lg: "300px" }}
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

        <Text
          my="5"
          pb="2"
          color="#081839"
          fontWeight="700"
          fontSize="32px"
          lineHeight="39px"
          borderBottom={"2px solid #1E1E1E"}
        >
          Services
        </Text>

        <Box my="10px">
          <Text
            fontWeight="400"
            textAlign={"justify"}
            fontSize={{ base: "10px", md: "18px", lg: "20px" }}
          >
            With a network of partners and client, Danaos Tourism Private
            Limited is a leader in the Asian Super yacht industry and continues
            to push the boundaries, offering hoteliers, event managers and
            convention planners more options for cruises, hosting corporate
            meetings and entertainment, supporting integrated brand events, and
            organising private charters as well as alongside events. Our
            Company’s Mission and Vision is to be Singapore’s most memorable,
            inspirational and celebration worthy experience. Our mission is to
            provide a safe, unique and iconic dinner cruise within local
            Singapore waters while excelling at customer service and providing
            good value for money.
          </Text>
        </Box>

        <Box my="1rem">
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
            {services?.map((item, ind) => (
              <Box key={ind}>
                <VStack alignItems="left" position={"relative"}>
                  <Image
                    boxsize={["100px", "100px", "100px", "200px"]}
                    src={"./img/serv1.png"}
                    alt={item.alt}
                  />
                  <Text
                    w="35%"
                    h="40px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    backgroundColor={
                      item.rating === "Cruise Only"
                        ? "#081839"
                        : item.rating === "Best Seler"
                        ? "#F2CD5B"
                        : item.rating === "Top Rated"
                        ? "#277E1F"
                        : ""
                    }
                    color={
                      item.text === "Cruise Only"
                        ? "#F2CD5B"
                        : item.text === "Best Seler"
                        ? "#081839"
                        : item.text === "Top Rated"
                        ? "#F2CD5B"
                        : ""
                    }
                    position={"absolute"}
                    top="10%"
                    left={"0"}
                    fontSize="12px"
                    fontWeight="700"
                    lineHeight={"15px"}
                    borderRightRadius={"20px"}
                  >
                    {item.text}
                  </Text>
                </VStack>
                <VStack
                  height={{ base: "auto", md: "190px", lg: "190px" }}
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Text
                    w="100%"
                    fontSize="22px"
                    fontWeight="400"
                    lineHeight={"28px"}
                    color="#000000"
                  >
                    {item.packageName}
                  </Text>
                  <Text
                    w="100%"
                    textAlign="justify"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight={"19px"}
                    color="#000000"
                  >
                    {item.heading1}
                  </Text>
                  <HStack mt="10px" justifyContent={"space-between"} w="100%">
                    <VStack gap="0">
                      <Heading
                        fontSize="12px"
                        fontWeight="800"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        Selling Date
                      </Heading>
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.sailingDate}
                      </Text>
                    </VStack>
                    <VStack gap="0">
                      <Heading
                        fontSize="12px"
                        fontWeight="800"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        Tables
                      </Heading>
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        For {item.tables[0]?.personSize} Persons
                      </Text>
                    </VStack>
                    <VStack gap="0">
                      <Heading
                        fontSize="12px"
                        fontWeight="800"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        Availability
                      </Heading>
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.availability}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack
                    w="100%"
                    justifyContent={"space-between"}
                    fontSize="14px"
                    fontWeight="800"
                    lineHeight={"17px"}
                    mt="5"
                  >
                    <HStack>
                      <img src="./img/starprod.png" alt="star" />
                      <Text>{item.rating}</Text>
                    </HStack>
                    <HStack>
                      <Text color={"#000"}>From</Text>
                      <Text color={"#277E1F"}>{item.tables[0]?.price}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* <Box my="1rem">
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
            {homeService?.map((item) => (
              <Box key={item.id}>
                <VStack alignItems="left" position={"relative"}>
                  <Image
                    boxsize={["100px", "100px", "100px", "200px"]}
                    src={item.img}
                    alt={item.alt}
                  />
                  <Text
                    w="35%"
                    h="40px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    backgroundColor={
                      item.text === "Cruise Only"
                        ? "#081839"
                        : item.text === "Best Seler"
                        ? "#F2CD5B"
                        : item.text === "Top Rated"
                        ? "#277E1F"
                        : ""
                    }
                    color={
                      item.text === "Cruise Only"
                        ? "#F2CD5B"
                        : item.text === "Best Seler"
                        ? "#081839"
                        : item.text === "Top Rated"
                        ? "#F2CD5B"
                        : ""
                    }
                    position={"absolute"}
                    top="10%"
                    left={"0"}
                    fontSize="12px"
                    fontWeight="700"
                    lineHeight={"15px"}
                    borderRightRadius={"20px"}
                  >
                    {item.text}
                  </Text>
                </VStack>
                <VStack
                  height={{ base: "auto", md: "190px", lg: "190px" }}
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Text
                    w="100%"
                    fontSize="22px"
                    fontWeight="400"
                    lineHeight={"28px"}
                    color="#000000"
                  >
                    {item.text2}
                  </Text>
                  <Text
                    w="100%"
                    textAlign="justify"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight={"19px"}
                    color="#000000"
                  >
                    {item.text3}
                  </Text>
                  <HStack mt="10px" justifyContent={"space-between"} w="100%">
                    <VStack gap="0">
                      <Heading
                        fontSize="12px"
                        fontWeight="800"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        Selling Date
                      </Heading>
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.text4}
                      </Text>
                    </VStack>
                    <VStack gap="0">
                      <Heading
                        fontSize="12px"
                        fontWeight="800"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        Departs
                      </Heading>
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.text5}
                      </Text>
                    </VStack>
                    <VStack gap="0">
                      <Heading
                        fontSize="12px"
                        fontWeight="800"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        Part(7)
                      </Heading>
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.text6}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack
                    w="100%"
                    justifyContent={"space-between"}
                    fontSize="14px"
                    fontWeight="800"
                    lineHeight={"17px"}
                    mt="5"
                  >
                    <HStack>
                      <img src="./img/starprod.png" alt="star" />
                      <Text>{item.Rating}</Text>
                    </HStack>
                    <HStack>
                      <Text color={"#000"}>From</Text>
                      <Text color={"#277E1F"}>{item.from}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box> */}
      </Box>

      <Box w="90%" mx={"auto"} my="20px" pb="25px">
        {birthData?.map((item) => (
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} mt="12" key={item.id}>
            <Box>
              <Image src={item.img} alt={item.alt} boxSize={"100%"}></Image>
            </Box>
            <Box textAlign={"center"}>
              <VStack spacing={["20px", "50px"]} mt="4">
                <Text
                  fontWeight="700"
                  fontSize={["20px", "20px", "30px", "42px"]}
                >
                  {item.text}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["15px", "20px", "25px", "36px"]}
                >
                  {item.start}
                </Text>
                <Box>
                  <Text
                    fontWeight="400"
                    fontSize={["13px", "17px", "20px", "24px"]}
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

      <Box w="90%" mx="auto" mt="2rem" mb="10px">
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={7}>
          {sailing?.map((e, ind) => (
            <SimpleGrid columns={[1, 2, 2, 2]} spacing={2} key={ind}>
              <Box>
                <Image src={e.imgurl} alt="d" w="100%" h="100%" />
              </Box>
              <Box
                h="100%"
                display={"flex"}
                justifyContent="space-between"
                flexDirection={"column"}
              >
                <Text
                  fontWeight="700"
                  fontSize={["1.5rem", "2rem", "18px", "20px"]}
                  color="#000000"
                >
                  {e.title}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["1.2rem", "1rem", "18px", "20px"]}
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
                  fontSize={["1.2rem", "1rem", "18px", "20px"]}
                  mt="20px"
                >
                  Book Now
                </Button>
              </Box>
            </SimpleGrid>
          ))}
        </SimpleGrid>
      </Box>

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
                fontWeight="500"
                fontSize="20px"
                backgroundColor={"#F2CD5B"}
                p="2"
                height={{ base: "auto", md: "190px", lg: "190px" }}
              >
                <VStack
                  justifyContent={"space-between"}
                  alignItems="center"
                  h="100%"
                >
                  <Text w="100%" color="#081839" textAlign="justify">
                    {item.heading}
                  </Text>
                  <Text w="100%">
                    <Rating stars={item.rating} key={item.index} />
                  </Text>
                  <HStack justifyContent={"space-between"} w="100%">
                    <Text>
                      Start From -
                      <Text as="span" color="#277E1F">
                        Rs. {item.price}
                      </Text>
                    </Text>
                    <Text fontSize={"40px"} color="#277E1F">
                      <BsPlusCircleFill />
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
          Top things to do World Wide
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {worldwide?.map((item) => (
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

        <Box
          mt="5"
          w="100%"
          bg="url('./img/vishal/bus.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          height={{ base: "auto", md: "auto", lg: "500px" }}
          display="grid"
          placeItems={"center"}
          p="5"
        >
          <Box
            w="90%"
            mx="auto"
            bgColor={" rgba(217, 217, 217, 0.5)"}
            height={{ base: "auto", md: "auto", lg: "400px" }}
            display="grid"
            placeItems={"center"}
          >
            <SimpleGrid
              columns={[1, 1, 2]}
              spacing={[10]}
              w="90%"
              mx="auto"
              zIndex={"9999"}
            >
              <Box textAlign={"justify"} p="5">
                <Text
                  fontWeight="700"
                  fontSize={["15px", "20px", "32px"]}
                  color="#081839"
                >
                  Business Events & Charters
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["12px", "15px", "20px"]}
                  color="#000000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Commodo odio aenean sed adipiscing.
                </Text>
              </Box>
              <Box>
                <Box
                  bgColor={"#ffff"}
                  w="70%"
                  mx="auto"
                  borderRadius={"20px"}
                  p="5"
                  my="2"
                >
                  <Text fontWeight="700" fontSize={["12px", "15px", "22px"]}>
                    Corporate Package <br /> From 30PX
                  </Text>
                  <Text borderBottom={"2px solid #1E1E1E"} mt="5"></Text>
                  <UnorderedList
                    fontWeight="600"
                    my="5"
                    fontSize={["7px", "13px", "18px"]}
                  >
                    <ListItem>Weekday corporate charter.</ListItem>
                    <ListItem>Land And Sea Package.</ListItem>
                    <ListItem>Team Bonding Package.</ListItem>
                  </UnorderedList>
                  <Box w="100%" m="auto" textAlign={"center"}>
                    <Button
                      px={{ base: "6", md: "6" }}
                      fontWeight="700"
                      fontSize={{ base: "6px", md: "12px" }}
                      _hover={{
                        background:
                          "linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)",
                      }}
                      background="linear-gradient(90deg, #F9D33B 0%, #F8ECC1 100%)"
                      textTransform={"capitalize"}
                    >
                      view more &nbsp;
                      <HiOutlineArrowRight />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

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
              w={["60px", "60px", "60px", "60px"]}
              borderRadius={"10px"}
              py="2"
              fontWeight={"800"}
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
              w={["60px", "60px", "60px", "60px"]}
              borderRadius={"10px"}
              py="2"
              fontWeight={"800"}
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
              w={["60px", "60px", "60px", "60px"]}
              borderRadius={"10px"}
              py="2"
              fontWeight={"800"}
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

      {/* gallery */}
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
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/hmg1.png" alt="pa1" w="100%" h="auto" />
          <Image src="./img/vishal/hmg2.png" alt="pa2" w="100%" h="auto" />
        </Grid>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
          mt="5"
        >
          <Image src="./img/vishal/hmg3.png" alt="pa31" w="100%" h="auto" />
          <Image src="./img/vishal/hmg4.png" alt="pa4" w="100%" h="auto" />
        </Grid>

        <Box
          w="100%"
          mx="auto"
          textAlign={"center"}
          my={{ base: "5", md: "10" }}
        >
          <Button
            px={{ base: "6", md: "12" }}
            py={{ base: "3", md: "4" }}
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
            lineHeight={{ sm: "25px", md: "40px", lg: "55px", xl: "55px" }}
            color={"#00000"}
            fontWeight={"700"}
          >
            Top Reviews from Customers
          </Text>
        </Box>
      </Box>

      <Box my="5" mx="5">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Box
                maxH={["520px", "520px", "450px", "420px", "420px"]}
                h={["400px", "400px", "400px", "420px", "420px"]}
                p={["10px", "20px", "30px", "30px", "30px"]}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  p={["10px", "20px"]}
                  borderRadius={["10px", "20px"]}
                  boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Image
                    w={["60px", "80px", "100px"]}
                    h={["60px", "80px", "100px"]}
                    borderRadius={"50%"}
                    objectFit="cover"
                    mb={"10px"}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <Text fontSize={["14px", "16px"]}>{testimonial.text}</Text>
                  <Text
                    marginTop="10px"
                    marginBottom="5px"
                    fontSize={["20px", "24px"]}
                    fontWeight="600"
                    fontStyle="italic"
                  >
                    {testimonial.name}
                  </Text>
                  <Text
                    color="#3e54ac"
                    fontSize={["14px", "16px"]}
                    fontWeight="500"
                  >
                    {testimonial.title}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default React.memo(Home);
