import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { BrandIcon } from "@shikshak/assets/icons/Brand";

const Navbar = () => {
  return (
    <Flex justify={"space-between"} py={4} align={"center"}>
      <HStack align={"center"}>
        <BrandIcon boxSize={12} />
        <Text fontSize={"2xl"} color={"blue.900"} fontWeight={700}>
          LearnEase
        </Text>
      </HStack>

      <HStack gap={12} align={"center"}>
        <Text fontSize={"lg"}>Home</Text>
        <Text fontSize={"lg"}>Careers</Text>
        <Text fontSize={"lg"}>Blogs</Text>
        <Text fontSize={"lg"}>About Us</Text>
        <HStack gap={4}>
          <Button
            textColor={"gray.800"}
            borderRadius={"80px"}
            bg={"white"}
            _hover={{ bg: "gray.50" }}
            shadow={"md"}
          >
            Login
          </Button>
          <Button
            bg={"linear-gradient(180deg, #21C8F6 0%, #637BFF 100%)"}
            _hover={{
              bg: "linear-gradient(180deg, #21C8F6 0%, #637BFF 70%)"
            }}
            borderRadius={"80px"}
            shadow={"md"}
          >
            Sign Up
          </Button>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Navbar;
