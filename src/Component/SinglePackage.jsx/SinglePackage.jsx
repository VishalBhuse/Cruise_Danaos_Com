import {
  Box,
  Stack,
  Text,
  Image,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetAPICALL } from "../../Config/Functions/getFun";

const SinglePackage = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const packcart = useSelector((state) => state.cart.package);
  // console.log(packcart);

  const getPackageData = async () => {
    GetAPICALL(`managepackage/${params.package_id}`)
      .then((res) => {
        // console.log(res.data.length);
        setDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [product, setProduct] = useState([]);
  const [checkedMap, setCheckedMap] = useState({});
  const handleCheckboxChange = (event, obj) => {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked;

    setCheckedMap((prevCheckedMap) => {
      if (isChecked) {
        return { ...prevCheckedMap, [checkboxId]: obj };
      } else {
        const { [checkboxId]: removed, ...rest } = prevCheckedMap;
        return rest;
      }
    });

    const checkedObjects = Object.values({
      ...checkedMap,
      [checkboxId]: isChecked ? obj : undefined,
    }).filter(Boolean);

    setProduct(checkedObjects);
  };

  const handleChecout = () => {
    // console.log(details, "details");
    // console.log(product, "prod");

    const newData = [{ details: { ...details }, prod: { ...product } }];
    dispatch({ type: "UPDATE_TO_CART", payload: { ...newData } });
  };

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
            <Text
              mt="1"
              color="blue.600"
              fontSize={{ base: "1xl", sm: "2xl", lg: "2xl" }}
              fontWeight={"500"}
            >
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
                  <Text
                    as={"span"}
                    fontWeight={"bold"}
                    textTransform="capitalize"
                  >
                    Sailing Date:
                  </Text>
                  <Text fontWeight={"600"}>{details.sailingDate}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text
                    as={"span"}
                    fontWeight={"bold"}
                    textTransform="capitalize"
                  >
                    Rating:
                  </Text>
                  <Text fontWeight={"600"}>{details.rating}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text
                    as={"span"}
                    fontWeight={"bold"}
                    textTransform="capitalize"
                  >
                    availability:
                  </Text>
                  <Text fontWeight={"600"}>{details.availability}</Text>
                </HStack>
              </Box>
            </Box>
            <TableContainer>
              <Table
                variant="simple"
                overflowX="auto"
                size={["sm", "md", "md"]}
              >
                <Thead style={{ backgroundColor: "#081839" }}>
                  <Tr>
                    <Th
                      fontSize={["10px", "12px", "12px", "14px", "16px"]}
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                    ></Th>
                    <Th
                      fontSize={["10px", "12px", "12px", "14px", "16px"]}
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                    >
                      Tables
                    </Th>
                    <Th
                      fontSize={["10px", "12px", "12px", "14px", "16px"]}
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                    >
                      Price
                    </Th>
                    <Th
                      fontSize={["10px", "12px", "12px", "14px", "16px"]}
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                    >
                      OfferPrice
                    </Th>
                    <Th
                      fontSize={["10px", "12px", "12px", "14px", "16px"]}
                      color={"#F1CC5C"}
                      textTransform={"uppercase"}
                    >
                      Changes
                    </Th>
                  </Tr>
                </Thead>
                {details.tables &&
                  details.tables.map((item) => (
                    <Tbody backgroundColor={"white"} key={item._id}>
                      <Tr key={item.id}>
                        <Td>
                          <Checkbox
                            type="checkbox"
                            id={item._id}
                            checked={!!checkedMap[item._id]}
                            onChange={(event) =>
                              handleCheckboxChange(event, item)
                            }
                          />
                          {/* <Checkbox onClick={() => handleChekout(item)} /> */}
                        </Td>
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

          <Link to="/checkout">
            <Button
              rounded={"none"}
              w={"full"}
              size={"lg"}
              py={["5", "6", "7"]}
              bg={"#081839"}
              color={useColorModeValue("#F1CC5C", "#F1CC5C")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleChecout}
            >
              Checkout
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default SinglePackage;
