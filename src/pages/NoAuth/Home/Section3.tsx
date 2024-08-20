import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { allInOneData } from "./data";

const Section3 = () => {
  return (
    <Flex py={4} align={"center"} flexDir={"column"} justify={"center"}>
      <Text fontWeight={700} textAlign={"center"} fontSize={"36px"}>
        <Text as={"span"} color={"#F48C06"}>
          All-In-One{" "}
        </Text>
        Solution
      </Text>
      <Text
        w={{ md: "90%", lg: "80%" }}
        color={"#696984"}
        textAlign={"center"}
        fontSize={{ base: "16px", md: "20px", xl: "24px" }}
      >
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </Text>

      <Container
        maxW={{ base: "container.xl", md: "85vw", xl: "80vw" }}
        py={10}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacingX={10}
          spacingY={4}
        >
          {allInOneData.map((item, index) => (
            <GridItem key={index} colSpan={1}>
              <Card
                borderRadius={"40px"}
                boxShadow={"0px 10px 60px 0px rgba(38, 45, 118, 0.08)"}
                h={"full"}
              >
                <CardHeader
                  pb={4}
                  justifyContent={"center"}
                  alignSelf={"center"}
                >
                  <Icon
                    justifySelf={"center"}
                    alignSelf={"center"}
                    as={item.icon}
                    boxSize={12}
                  />
                </CardHeader>
                <CardBody textAlign={"center"} pt={0}>
                  <Flex align={"center"} justify={"center"} flexDir={"column"}>
                    <Text mt={4} fontSize={"24px"} fontWeight={700}>
                      {item.heading}
                    </Text>
                    <Text mt={4} fontSize={"18px"} textAlign={"center"}>
                      {item.description}
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Section3;
