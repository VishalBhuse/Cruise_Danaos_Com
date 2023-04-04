import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePackage = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();

  const getPackageData = async () => {
    await axios
      .get(
        `https://backenddanaoscruise-production-ed75.up.railway.app/managepackage/${params.package_id}`
      )
      .then((res) => {
        // console.log(res.data.length);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(details);

  useEffect(() => {
    getPackageData();
  }, []);

  return (
    <Box width="90%" margin="auto">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          h="100%"
          p="5"
        >
          <Image
            rounded={"md"}
            alt={"product image"}
            src={"https://curise.vercel.app/img/serv2.png"}
            align={"center"}
            w={"90%"}
            mx="auto"
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              color="#2F0F5D"
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {details.packageName}
            </Heading>
            <Text mt="1" color="#19376D" fontSize={"2xl"} fontWeight={"500"}>
              {details.heading1}
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"capitalize"}
                mb={"2"}
              >
                Package Details
              </Text>

              <Box w="90%" mx="auto">
                <HStack justifyContent={"space-between"}>
                  <Text as={"span"} fontWeight={"bold"}  textTransform='capitalize'>
                    Sailing Date:
                  </Text>
                  <Text  textTransform='capitalize' >{details.sailingDate}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text as={"span"} fontWeight={"bold"}  textTransform='capitalize'>
                    Rating:
                  </Text>
                  <Text fontWeight={'600'}>{details.rating}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text as={"span"} fontWeight={"bold"}  textTransform='capitalize'>
                    availability:
                  </Text>
                  <Text fontWeight={'600'}>{details.availability}</Text>
                </HStack>
              </Box>
            </Box>
            <TableContainer>
              <Table variant="simple" overflowX="auto">
                <Thead style={{ backgroundColor: "#081839" }}>
                  <Tr>
                    <Th
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                      fontSize={"12px"}
                    >
                      Tables
                    </Th>
                    <Th
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                      fontSize={"12px"}
                    >
                      Price
                    </Th>
                    <Th
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                      fontSize={"12px"}
                    >
                      OfferPrice
                    </Th>
                    <Th
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                      fontSize={"12px"}
                    >
                      Changes
                    </Th>
                  </Tr>
                </Thead>
                {details.tables &&
                  details.tables.map((item) => (
                    <Tbody backgroundColor={"white"}>
                      <Tr key={item.id}>
                        <Td>For {item.personSize} Persons</Td>
                        <Td>Rs {item.price}</Td>
                        <Td>Rs {item.offerPrice}</Td>
                        <Td>Rs {item.price - item.offerPrice}</Td>
                      </Tr>
                    </Tbody>
                  ))}
              </Table>
            </TableContainer>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={"#081839"}
            color={useColorModeValue("#F1CC5C", "#F1CC5C")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default SinglePackage;
