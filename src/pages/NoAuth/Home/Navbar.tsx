import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { BrandIcon } from "@shikshak/assets/icons/Brand";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import TokenService from "@shikshak/services/service-token";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = TokenService.isAuthenticated();

  return (
    <Flex justify={"space-between"} py={4} align={"center"}>
      <HStack
        align={"center"}
        cursor={"pointer"}
        onClick={() => {
          navigate(NAVIGATION_ROUTES.HOME);
        }}
      >
        <BrandIcon boxSize={12} />
        <Text fontSize={"2xl"} color={"blue.900"} fontWeight={700}>
          Shikshak
        </Text>
      </HStack>

      <HStack gap={12} align={"center"}>
        <Text
          cursor={"pointer"}
          fontSize={"lg"}
          onClick={() => {
            navigate(NAVIGATION_ROUTES.HOME);
          }}
        >
          Home
        </Text>
        {/* <Text fontSize={"lg"}>Blogs</Text> */}
        <Text fontSize={"lg"}>About Us</Text>
        {isAuthenticated && <Text fontSize={"lg"}>Classes</Text>}
        {!isAuthenticated && (
          <HStack gap={4}>
            <Button
              textColor={"gray.800"}
              borderRadius={"80px"}
              bg={"white"}
              _hover={{ bg: "gray.50" }}
              shadow={"md"}
              onClick={() => {
                navigate(NAVIGATION_ROUTES.LOGIN);
              }}
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
              onClick={() => {
                navigate(NAVIGATION_ROUTES.REGISTER);
              }}
            >
              Sign Up
            </Button>
          </HStack>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
