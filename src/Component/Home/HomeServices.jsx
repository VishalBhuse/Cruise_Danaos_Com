import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Rating } from "../../Rating/Rating";
const HomeServices = () => {
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
          With a network of partners and client, Danaos Tourism Private Limited
          is a leader in the Asian Super yacht industry and continues to push
          the boundaries, offering hoteliers, event managers and convention
          planners more options for cruises, hosting corporate meetings and
          entertainment, supporting integrated brand events, and organising
          private charters as well as alongside events. Our Company’s Mission
          and Vision is to be India’s most memorable, inspirational and
          celebration worthy experience. Our mission is to provide a safe,
          unique and iconic dinner cruise within local India waters while
          excelling at customer service and providing good value for money.
        </Text>
      </Box>

      <Box my="1rem">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
          {services?.map((item, ind) => (
            <Box key={ind}>
              <Link to={`/singlepackage/${item._id}`}>
                {/* <VStack alignItems="left" position={"relative"}> */}
                <VStack alignItems="left">
                  <Image
                    // boxsize={["100px", "100px", "100px", "200px"]}
                    height={{
                      base: "190px",
                      sm: "200px",
                      md: "210px",
                      lg: "190px",
                    }}
                    src={"./img/vishal/pack4.png"}
                    alt={item.alt}
                  />
                  {/* <Text
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
                </Text> */}
                </VStack>
                <VStack
                  height={{ base: "auto", md: "190px", lg: "190px" }}
                  justifyContent={"space-between"}
                  alignItems="center"
                  textTransform={"capitalize"}
                >
                  <Text
                    w="100%"
                    fontSize="22px"
                    fontWeight="600"
                    lineHeight={"28px"}
                    color="#000000"
                    textTransform={"capitalize"}
                  >
                    {item.packageName}
                  </Text>
                  <Text
                    w="100%"
                    textAlign="justify"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight={"19px"}
                    color="grey"
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
                      <Rating stars={item.rating} />
                    </HStack>
                    <HStack>
                      <Text color={"#000"}>From</Text>
                      <Text color={"#277E1F"}>Rs.{item.tables[0]?.price}</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default HomeServices;
