import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Heading,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../../Rating/Rating";

const AllPackage = () => {
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    await axios
      .get(
        "https://backenddanaoscruise-production-ed75.up.railway.app/managepackage"
      )
      .then((res) => {
        // console.log(res.data)
        setPackages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <Box w="95%" mx="auto">
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="5">
        {packages?.map((item) => (
          <Card maxW="md" key={item._id} textTransform={"capitalize"}>
            <CardBody>
              <Image
                src="./img/vishal/pack4.png"
                alt="vishal/pack4.png"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.packageName}</Heading>
                <Text>{item.heading1}</Text>
                <HStack w="100%" justifyContent={"space-between"}>
                  <VStack gap="0">
                    <Heading
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="600"
                      lineHeight={"15px"}
                      color="blue.600"
                    >
                      Selling Date
                    </Heading>
                    <Text
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="400"
                      lineHeight={"15px"}
                      color="#000000"
                    >
                      {item.sailingDate}
                    </Text>
                  </VStack>
                  <VStack gap="0">
                    <Heading
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="600"
                      lineHeight={"15px"}
                      color="blue.600"
                    >
                      Tables
                    </Heading>
                    <Text
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="400"
                      lineHeight={"15px"}
                      color="#000000"
                    >
                      For {item.tables[0]?.personSize} Persons
                    </Text>
                  </VStack>
                  <VStack gap="0">
                    <Heading
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="600"
                      lineHeight={"15px"}
                      color="blue.600"
                    >
                      Availability
                    </Heading>
                    <Text
                      fontSize={["12px", "15px", "15px", "15px"]}
                      fontWeight="400"
                      lineHeight={"15px"}
                      color="#000000"
                    >
                      {item.availability}
                    </Text>
                  </VStack>
                </HStack>
                <HStack
                  w="100%"
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  fontSize={["9px", "9px", "9px", "14px"]}
                  fontWeight="700"
                  lineHeight={"5px"}
                  // mt="5"
                  p={"10px"}
                >
                  <HStack>
                    <Rating stars={item.rating} />
                  </HStack>
                  <HStack>
                    <Text
                      color={"#081839"}
                      fontSize={["10px", "10px", "10px", "16px"]}
                    >
                      From
                    </Text>
                    <Text
                      color={"#277E1F"}
                      fontSize={["10px", "10px", "10px", "16px"]}
                    >
                      Rs.{item.tables[0]?.price}
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter display={"flex"} justifyContent="center">
              <Link to={`/singlepackage/${item._id}`}>
                <Button variant="solid" colorScheme="blue">
                  Book Now
                </Button>{" "}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllPackage;
