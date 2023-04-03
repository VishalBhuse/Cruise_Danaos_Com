import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  useDisclosure,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import EditProfileModal from "./ProfileModal/EditProfileModal";

const UserDashboard = () => {
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const [user, setuser] = useState({});

  const getData = () => {
    axios
      .get(
        `https://backenddanaoscruise-production-ed75.up.railway.app/user/user/${auth._id}`
      )
      .then((r) => setuser(r.data[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      <Box w="90%" mx="auto" bg="#081839">
        <Box
          w="100%"
          mx="auto"
          mb="3"
          border={"2px solid #081839"}
          bg="#fff"
          borderTopLeftRadius={["0px", "0px", "0px", "150px"]}
          borderTopRightRadius={["0px", "0px", "0px", "150px"]}
        >
          <Box pt="5" pb="3" w="80%" mx="auto" borderBottom="2px solid black">
            <HStack justifyContent={"space-between"}>
              <Text
                fontSize={["15px", "18px", "22px", "28px", "28px"]}
                fontWeight="700"
              >
                My Profile
              </Text>

              <EditProfileModal
                getData={getData}
                authid={auth._id}
                user={user}
                setuser={setuser}
              />
            </HStack>
          </Box>

          <Box w="80%" mx="auto">
            <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing={[2, 2, 10]} py="10">
              <Box height={["150px", "200px", "200px", "370px"]}>
                <Image
                  objectFit={"contain"}
                  src="https://s3-alpha-sig.figma.com/img/2253/f4e1/9f885c46f28141ecb74f3ad7d23217f6?Expires=1681084800&Signature=iA89QMmQWokHrU7W1jluk3xf-pYQJRfJFVeD5WHh~leEfYcMUOHfrtgcnMOL~HG1RxIX-xLW-g9qdDiryht5RpsRnAto433MAOY2JFszW4V-3rsgvAsydta6uRLir1-KA~43La~IFOfgxCCKa0mQLc4rkwqOBAPkwT0tUPQ2bdo9SdirqNcuEe-nWJV-38klCXFijZlWOcfFOcOJoDtZFLLJSXkv3k5j-5AXztLpUoTBxPbtyfrJk69qCgabMlsQ8Gu4BSXc6FG6ZDp-GPvsPGhGfoe4Lkj9zSXaq2QpoTzDmdMdXe1j8D5sffJ0oXUfpy4CJwWQhCMWCTBBNic7YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  width={"100%"}
                  height={"100%"}
                ></Image>
              </Box>
              <Box>
                <VStack
                  justifyContent={"space-between"}
                  w="100%"
                  alignItems={"flex-start"}
                  h="100%"
                >
                  <Box w="100%">
                    <Text
                      fontSize={["15px", "18px", "22px", "28px", "28px"]}
                      color={"#00000"}
                      fontWeight={"400"}
                    >
                      First Name
                    </Text>
                    <Text
                      py="2"
                      px="2"
                      fontSize={["15px", "19px", "20px", "24px", "24px"]}
                      fontWeight={"600"}
                      backgroundColor={"#D2E1FF"}
                    >
                      {user.firstName}
                    </Text>
                  </Box>
                  <Box w="100%">
                    <Text
                      fontSize={["15px", "18px", "22px", "28px", "28px"]}
                      color={"#00000"}
                      fontWeight={"400"}
                    >
                      Last Name
                    </Text>
                    <Text
                      py="2"
                      px="2"
                      fontSize={["15px", "19px", "20px", "24px", "24px"]}
                      fontWeight={"600"}
                      backgroundColor={"#D2E1FF"}
                    >
                      {user.lastName}
                    </Text>
                  </Box>
                  <Box w="100%">
                    <Text
                      fontSize={["15px", "18px", "22px", "28px", "28px"]}
                      color={"#00000"}
                      fontWeight={"400"}
                    >
                      Email
                    </Text>
                    <Text
                      py="2"
                      px="2"
                      fontSize={["15px", "19px", "20px", "24px", "24px"]}
                      fontWeight={"600"}
                      backgroundColor={"#D2E1FF"}
                    >
                      {user.email}
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Mobile No
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.mobilenumber}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Gender
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.gender}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Address
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.address}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box w="100%">
                  <Text
                    fontSize={["15px", "18px", "22px", "28px", "28px"]}
                    color={"#00000"}
                    fontWeight={"400"}
                  >
                    Date of Birth
                  </Text>
                  <Text
                    py="2"
                    px="2"
                    fontSize={["15px", "19px", "20px", "24px", "24px"]}
                    fontWeight={"600"}
                    backgroundColor={"#D2E1FF"}
                  >
                    {user.dateofbirth}
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
