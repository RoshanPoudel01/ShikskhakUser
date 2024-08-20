import {
  Container,
  Flex,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import VideoImage from "../../../assets/images/video-image.png";
const Section5 = () => {
  return (
    <Container maxW={{ base: "container.xl", md: "85vw", xl: "80vw" }} py={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={4}>
        <GridItem colSpan={1}>
          <Flex flexDir={"column"} gap={4}>
            <Text
              color={"#2F327D"}
              fontWeight={700}
              fontSize={{ base: "22px", md: "26px", xl: "30px" }}
            >
              Everything you can do in a physical classroom,{" "}
              <Text as={"span"} color={"#F48C06"}>
                you can do with Shikshak
              </Text>
            </Text>
            <Text
              color={"#696984"}
              fontSize={{ base: "16px", md: "20px", xl: "24px" }}
            >
              With Shikshak, the virtual classroom experience is elevated to
              match every aspect of a physical classroom. From engaging
              interactions with expert instructors and collaborative discussions
              with peers to hands-on projects and personalized learning paths.
            </Text>

            <Link
              href="/"
              color={"#F48C06"}
              fontSize={"18px"}
              fontWeight={700}
              w={"fit-content"}
              textDecor={"underline"}
            >
              Learn More
            </Link>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} pos={"relative"}>
          <Image
            w={"full"}
            borderRadius={"60px"}
            objectFit={"cover"}
            objectPosition={"center"}
            src={VideoImage}
            alt={"video"}
            zIndex={2}
            pos={"relative"}
            flexShrink={0}
          />
          <Flex
            width={"138px"}
            h={"138px"}
            borderRadius={"20px"}
            bg={"#23BDEE"}
            pos={"absolute"}
            top={5}
            left={5}
            zIndex={1}
            flexShrink={0}
          />
          <Flex
            width={"138px"}
            h={"138px"}
            borderRadius={"20px"}
            bg={"#F3AC50"}
            pos={"absolute"}
            bottom={5}
            right={5}
            flexShrink={0}
            zIndex={1}
          />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Section5;
