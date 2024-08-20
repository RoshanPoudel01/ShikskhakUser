import {
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { ShikshakData } from "./data";

const Section4 = () => {
  return (
    <Flex py={10} align={"center"} flexDir={"column"} justify={"center"}>
      <Text
        color={"#F48C06"}
        fontWeight={700}
        textAlign={"center"}
        fontSize={"36px"}
      >
        <Text color={"#2F327D"} as={"span"}>
          What is{" "}
        </Text>
        Shikshak?
      </Text>
      <Text
        w={{ md: "90%", lg: "80%" }}
        color={"#696984"}
        textAlign={"center"}
        fontSize={{ base: "16px", md: "20px", xl: "24px" }}
      >
        Shikshak is an innovative online learning platform designed to make
        education accessible, engaging, and adaptable to your lifestyle. It
        offers a diverse range of courses taught by experts in various fields.
        With Shikshak, you can learn at your own pace, interact with fellow
        learners, and gain valuable skills through practical and interactive
        lessons.
      </Text>
      <Container
        maxW={{ base: "container.xl", md: "85vw", xl: "80vw" }}
        py={10}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={4}>
          {ShikshakData.map((item, index) => (
            <GridItem key={index} colSpan={1}>
              <Card
                borderRadius={"40px"}
                boxShadow={"0px 10px 60px 0px rgba(38, 45, 118, 0.08)"}
                h={"400px"}
                bgImage={`url(${item.image})`}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
                bgSize={"cover"}
                bgColor={"rgba(0, 0, 0, 0.5)"}
                bgBlendMode={"overlay"}
              >
                <CardBody
                  borderRadius={"60px"}
                  p={4}
                  textAlign={"center"}
                  alignContent={"center"}
                >
                  <Text
                    fontSize={{ base: "20px", md: "24px", xl: "30px" }}
                    fontWeight={700}
                    color={"white"}
                  >
                    {item.heading}
                  </Text>
                  <Button
                    textColor={"white"}
                    _hover={{ bg: "white", textColor: "#2F327D" }}
                    variant={"outline"}
                    borderRadius={"80px"}
                  >
                    {item.button}
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Section4;
