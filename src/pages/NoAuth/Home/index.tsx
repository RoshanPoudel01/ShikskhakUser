import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { CalendarIcon } from "@shikshak/assets/icons/Calendar";
import { StatsIcon } from "@shikshak/assets/icons/Stats";
import Rectangle from "@shikshak/assets/images/Rectangle4.png";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import TokenService from "@shikshak/services/service-token";
import { useNavigate } from "react-router-dom";
import Banner from "../../../assets/images/homeImage.png";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  const navigate = useNavigate();

  const isAuthenticated = TokenService.isAuthenticated();

  return (
    <Flex flexDir={"column"} gap={6}>
      <Box p={4} bgImage={Rectangle}>
        <Container maxW={{ base: "98vw", lg: "90vw" }} p={0}>
          <SimpleGrid
            justifyItems={"center"}
            columns={{ base: 1, md: 2 }}
            spacing={10}
          >
            <GridItem alignContent={"center"} colSpan={1}>
              <Flex fontStyle={"Mulish"} flexDir={"column"} gap={2}>
                <Text
                  fontWeight={700}
                  fontSize={{
                    base: "36px",
                    sm: "42px",
                    md: "48px",
                    lg: "54px"
                  }}
                  color={"#2F327D"}
                >
                  <Text as={"span"} color={"#F48C06"}>
                    Studying{" "}
                  </Text>
                  online is now much easier
                </Text>
                <Text
                  fontSize={{
                    base: "16px",
                    sm: "18px",
                    md: "22px",
                    lg: "24px"
                  }}
                  color={"#464646"}
                  lineHeight={"160%"}
                >
                  At Shikshak, we believe in the power of education that
                  transcends boundaries. Our online platform is designed to
                  bring the classroom experience to your fingertips, making
                  learning a truly immersive and convenient journey.
                </Text>
                {!isAuthenticated && (
                  <HStack align={"center"}>
                    <Button
                      bg={"linear-gradient(180deg, #21C8F6 0%, #637BFF 100%)"}
                      _hover={{
                        bg: "linear-gradient(180deg, #21C8F6 0%, #637BFF 70%)"
                      }}
                      borderRadius={"80px"}
                      onClick={() => {
                        navigate(NAVIGATION_ROUTES.LOGIN);
                      }}
                    >
                      Join for Free
                    </Button>
                  </HStack>
                )}
              </Flex>
            </GridItem>
            <GridItem colSpan={1} pos={"relative"}>
              <StatsIcon pos={"absolute"} top={10} right={10} />
              <Flex
                gap={4}
                bg={"rgba(255, 255, 255, 0.80)"}
                backdrop-filter={"blur(10px)"}
                p={4}
                borderRadius={"32px"}
                pos={"absolute"}
                top={"30%"}
                left={10}
              >
                <CalendarIcon boxSize={12} />
                <Stack gap={0}>
                  <Text fontSize={"md"} fontWeight={700}>
                    400k
                  </Text>
                  <Text fontSize={"sm"}>Assisted Students</Text>
                </Stack>
              </Flex>

              <Image h={"full"} w={"full"} src={Banner} alt="Home Banner" />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW={{ base: "98vw", lg: "90vw" }} p={0}>
        {/* <Section2 /> */}
        <Section3 />
        <Section4 />
        <Section5 />
      </Container>
    </Flex>
  );
};

export default Home;
