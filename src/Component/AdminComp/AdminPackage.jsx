import { Box, HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { Rating } from "../../Rating/Rating";
import DeletePackageModal from "./DeleteModal/DeletePackageModal";
import AddTableModal from "./PackageModal/AddTableModal";
import DeleteTableModal from "./DeleteModal/DeleteTableModal";
import AddPackage from "./PackageModal/AddPackage";

const AdminPackage = () => {
  const [manage, setManage] = useState([]);

  const getManageData = async () => {
    await axios
      .get(
        "https://backenddanaoscruise-production-ed75.up.railway.app/managepackage"
      )
      .then((res) => {
        // console.log(res.data);
        setManage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getManageData();
  }, []);
  return (
    <>
      <Box w="90%" mx="auto" bg="#081839">
        <Box
          w="100%"
          mx="auto"
          mb="3"
          bg="#fff"
          border={"2px solid #081839"}
          borderTopLeftRadius={["0px", "0px", "0px", "150px"]}
          borderTopRightRadius={["0px", "0px", "0px", "150px"]}
        >
          <Box w="90%" mx="auto">
            <Box pt="5" pb="3" w="100%" mx="auto" mb="1">
              <HStack
                w="90%"
                mx="auto"
                justifyContent={"space-around"}
                flexDirection={["column", "column", "row", "row"]}
              >
                <Box>
                  <InputGroup mb="5px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiSearch />}
                      py={["10px", "10px", "10px", "25px"]}
                      fontSize="25px"
                    />
                    <Input
                      fontSize={["10px", "10px", "15px", "17px", "18px"]}
                      py={["10px", "10px", "10px", "25px"]}
                      type="text"
                      letterSpacing={"5px"}
                      placeholder="Search with ID..."
                      w={{
                        base: "200px",
                        sm: "300px",
                        md: "400px",
                        lg: "450px",
                      }}
                      backgroundColor={"#FFFFFF"}
                      border="2px solid #000000"
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <HStack
                    spacing={"8"}
                    w="100%"
                    mx="auto"
                    justifyContent={[
                      "center",
                      "flex-start",
                      "flex-end",
                      "flex-end",
                    ]}
                  >
                    <AddPackage getData={getManageData} />
                  </HStack>
                </Box>
              </HStack>
            </Box>

            <Box w="100%" mx="auto">
              <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={8} mt="2">
                {manage?.map((pac, ind) => (
                  <Text as={"span"} key={ind}>
                    <Box>
                      <Box
                        height={["45px", "55px", "64px", "64px"]}
                        backgroundColor={"#081839"}
                        textAlign={"center"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Text
                          textTransform="capitalize"
                          color={"#F1CC5C"}
                          fontWeight="700"
                          fontSize={["13px", "15px", "15px", "15px", "15px"]}
                        >
                          {pac.heading1}
                        </Text>
                      </Box>
                      <Box mt={2} textTransform="capitalize">
                        <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={2}>
                          <Box height="12rem">
                            <Image src={"./img/serv2.png"} boxSize="100%" />
                          </Box>
                          <Box height="auto" textTransform="capitalize">
                            <VStack
                              h="100%"
                              justifyContent={[
                                "flex-start",
                                "flex-start",
                                "space-between",
                                "space-between",
                              ]}
                              alignItems="flex-start"
                            >
                              <Text
                                fontSize={[
                                  "22px",
                                  "30px",
                                  "23px",
                                  "25px",
                                  "30px",
                                ]}
                                fontWeight="700"
                              >
                                {pac.packageName}
                              </Text>
                              <Text
                                fontSize={[
                                  "13px",
                                  "15px",
                                  "15px",
                                  "17px",
                                  "18px",
                                ]}
                                fontWeight="500"
                              >
                                Sailing Date - {pac.sailingDate}
                              </Text>
                              <Text>
                                <Rating stars={pac.rating} />
                              </Text>
                              <HStack
                                w="100%"
                                justifyContent={[
                                  "space-between",
                                  "space-evenly",
                                  "space-around",
                                  "space-around",
                                ]}
                                alignItems={"center"}
                              >
                                <Text>
                                  {
                                    <DeletePackageModal
                                      id={pac._id}
                                      getData={getManageData}
                                      packName={pac.packageName}
                                    />
                                  }
                                </Text>
                                <Text>
                                  {
                                    <AddTableModal
                                      id={pac._id}
                                      getData={getManageData}
                                    />
                                  }
                                </Text>
                              </HStack>
                            </VStack>
                          </Box>
                        </SimpleGrid>
                        <Box mt={[2, 2, 2, 7, 7]}>
                          <VStack
                            w="100%"
                            mx="auto"
                            justifyContent={"space-between"}
                          >
                            <HStack
                              w="95%"
                              mx="auto"
                              justifyContent={"space-between"}
                              textTransform={"capitalize"}
                              fontWeight="600"
                              fontSize={[
                                "10px",
                                "12px",
                                "12px",
                                "14px",
                                "16px",
                              ]}
                              textAlign="center"
                            >
                              <Text w="20%">Tables</Text>
                              <Text w="20%">Price</Text>
                              <Text w="20%">OfferPrice</Text>
                              <Text w="20%">Changes</Text>
                              <Text w="20%">Action</Text>
                            </HStack>

                            {pac.tables &&
                              pac.tables.map((item) => (
                                <HStack
                                  w="95%"
                                  mx="auto"
                                  justifyContent={"space-between"}
                                  textTransform={"capitalize"}
                                  fontWeight="600"
                                  fontSize={[
                                    "8px",
                                    "10px",
                                    "10px",
                                    "12px",
                                    "14px",
                                  ]}
                                  key={item._id}
                                  textAlign="center"
                                >
                                  <Text w="20%">
                                    For {item.personSize} Persons
                                  </Text>
                                  <Text w="20%">Rs {item.price}</Text>
                                  <Text w="20%">Rs {item.offerPrice}</Text>
                                  <Text w="20%">
                                    Rs {item.price - item.offerPrice}
                                  </Text>
                                  <Text w="20%">
                                    <DeleteTableModal
                                      packageId={pac._id}
                                      tableid={item._id}
                                      getData={getManageData}
                                    />
                                  </Text>
                                </HStack>
                              ))}
                          </VStack>
                        </Box>
                      </Box>
                    </Box>
                  </Text>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminPackage;

// <br />
// <br />
// <Box
//   margin={"auto"}
//   display={"flex"}
//   justifyContent={"center"}
//   alignItems={"center"}
// >
//   <Grid
//     templateColumns={[
//       "repeat(1, 1fr)",
//       "repeat(1, 1fr)",
//       "repeat(1, 1fr)",
//       "repeat(2, 1fr)",
//     ]}
//     textAlign={"left"}
//     gap={3}
//   >
//     {manage &&
//       manage.map((e) => (
//         <GridItem width={["360px", "400px", "780px", "567px"]}>
//           {/* table div */}
//           <Box>
//             <TableContainer>
//               <Table variant="simple" overflowX="auto">
//                 <Thead style={{ borderBottom: "red" }}>
//                   <Tr>
//                     <Th
//                       color={"black"}
//                       textTransform={"lowercase"}
//                       fontSize={"12px"}
//                     >
//                       Tables
//                     </Th>
//                     <Th
//                       color={"black"}
//                       textTransform={"lowercase"}
//                       fontSize={"12px"}
//                     >
//                       Price
//                     </Th>
//                     <Th
//                       color={"black"}
//                       textTransform={"lowercase"}
//                       fontSize={"12px"}
//                     >
//                       OfferPrice
//                     </Th>
//                     <Th
//                       color={"black"}
//                       textTransform={"lowercase"}
//                       fontSize={"12px"}
//                     >
//                       Changes
//                     </Th>
//                   </Tr>
//                 </Thead>
//                 {e.tables &&
//                   e.tables.map((item) => (
//                     <Tbody backgroundColor={"white"}>
//                       <Tr key={item.id}>
//                         <Td>For {item.personSize} Persons</Td>
//                         <Td>Rs {item.price}</Td>
//                         <Td>Rs {item.offerPrice}</Td>
//                         <Td>Rs {item.price - item.offerPrice}</Td>
//                         <Td>
//                           <DeleteTableModal
//                             packageId={e._id}
//                             tableid={item._id}
//                             getData={getManageData}
//                           />
//                         </Td>
//                       </Tr>
//                     </Tbody>
//                   ))}
//               </Table>
//             </TableContainer>
//           </Box>
//         </GridItem>
//       ))}
//   </Grid>
// </Box>
