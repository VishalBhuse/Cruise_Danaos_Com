import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  useColorModeValue,
  Image,
  UnorderedList,
  ListItem,
  VStack,
  ListIcon,
  List,
  HStack,
  Button,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      background="linear-gradient(180deg, #B1D9FF 0%, #081839 100%)"
      color={useColorModeValue("gray.700", "gray.200")}
      mt="2"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={[1, 1, 2, 3, 4]}
          // templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={"5rem"}
        >
          <Stack spacing={3}>
            <Box>
              <Link to="/">
                <Image src="./img/footerlogo.png" alt="fds" boxSize={"150px"} />
              </Link>
            </Box>
            <Text
              color={"#fff"}
              textAlign="left"
              fontWeight="400"
              fontSize="14px"
              lineHeight="150%"
            >
              Please visit and connect with us and give us chance to explore the
              world with you.
            </Text>

            <Text color="#000" textAlign="left">
              Read more....
            </Text>
          </Stack>
          <Stack
            align={"flex-start"}
            fontWeight="400"
            color={"#fff"}
            fontSize="14px"
          >
            <VStack align={"flex-start"}>
              <Text
                fontWeight="700"
                fontSize="22px"
                lineHeight="25px"
                letterSpacing="0.02em"
              >
                Our Service
              </Text>
              <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
              <Box mt="150px">
                <UnorderedList textAlign={"left"} ml="6" fontSize={"14px"}>
                  <ListItem mt="2">Travel</ListItem>
                  <ListItem mt="2">Booking</ListItem>
                  <ListItem mt="2">HoListItemdays</ListItem>
                  <ListItem mt="2">Fooding</ListItem>
                </UnorderedList>
              </Box>
            </VStack>
            <VStack align={"flex-start"}>
              <Text
                mt="50px"
                fontWeight="700"
                fontSize="22px"
                lineHeight="25px"
                letterSpacing="0.02em"
              >
                Quick Links
              </Text>
              <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
              <Box mt="150px">
                <UnorderedList textAlign={"left"} ml="6" fontSize={"14px"}>
                  <ListItem mt="2">Home</ListItem>
                  <ListItem mt="2">Explore the Cruise</ListItem>
                  <ListItem mt="2">News</ListItem>
                  <ListItem mt="2">Blogs</ListItem>
                </UnorderedList>
              </Box>
            </VStack>
          </Stack>
          <Stack align={"flex-start"} color={"#fff"}>
            <Text
              fontWeight="700"
              fontSize="22px"
              lineHeight="25px"
              letterSpacing="0.02em"
            >
              Sail with us
            </Text>
            <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
            <Box mt="150px">
              <UnorderedList textAlign={"left"} ml="6" fontSize={"14px"}>
                <ListItem mt="2">Breakfast Cruises</ListItem>
                <ListItem mt="2">Lunch Cruises</ListItem>
                <ListItem mt="2">Dinner Cruises</ListItem>
                <ListItem mt="2">Dog Cruises</ListItem>
                <ListItem mt="2">Charter Cruises</ListItem>
                <ListItem mt="2">Shop All</ListItem>
                <ListItem mt="2">Gift Vouchers</ListItem>
                <ListItem mt="2">Special Sailings</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Stack align={"flex-start"} color="#fff">
            <Text
              fontWeight="700"
              fontSize="22px"
              lineHeight="25px"
              letterSpacing="0.02em"
            >
              Quick Links
            </Text>
            <Box borderBottom="3px solid #081839" w="76px" h="2px"></Box>
            <Box fontSize={"16px"}>
              <List textAlign={"left"} ml="2">
                <ListItem pb="12px">
                  <HStack alignItems={"flex-start"} mt="1">
                    <Text>
                      <ListIcon as={HiLocationMarker} />
                    </Text>
                    <Text>A: 457 Morningview Lane Goa , India</Text>
                  </HStack>
                </ListItem>
                <ListItem pb="12px">
                  <HStack alignItems={"flex-start"}>
                    <Text>
                      <ListIcon as={IoIosMail} />
                    </Text>
                    <Text>contact@danaostourism.com</Text>
                  </HStack>
                </ListItem>
              </List>
            </Box>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              NEWSLETTER
            </Text>
            <HStack
              w="100%"
              mx="auto"
              spacing="0"
              flexDirection={["column", "row", "row", "row", "row"]}
            >
              <Input
                w="100%"
                h="45px"
                type="text"
                placeholder="Email"
                background="#D9D9D9"
                border="0"
                fontWeight="700"
                color="#8E8E8E"
                letterSpacing="0.02em"
                borderRadius={"2"}
              />
              <Button
                borderRadius={"2"}
                background="#172A4C"
                h="45px"
                px="30px"
                py="10px"
                fontWeight="700"
                lineHeight="27px"
                letterSpacing="0.02em"
                _hover={{
                  background: "#172A4C",
                }}
              >
                Subscribe
              </Button>
            </HStack>
            <br />
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Social media Links
            </Text>
            <Box>
              <HStack gap="20px" mt="5px">
                <Image src="./img/logos/Byoutube.png" w="19px" />
                <Image src="./img/logos/BFB.png" w="19px" />
                <Image src="./img/logos/Bmail.png" w="19px" />
                <Image src="./img/logos/Btwit.png" w="19px" />

                <Image src="./img/logos/Bprint.png" w="19px" />
                <Image src="./img/logos/Binsta.png" w="19px" />
              </HStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default Footer;
