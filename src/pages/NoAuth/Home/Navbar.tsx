import { Flex, HStack, Text } from "@chakra-ui/react";
import { BrandIcon } from "@shikshak/assets/icons/Brand";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import { useLogoutMutation } from "@shikshak/services/service-auth";
import TokenService from "@shikshak/services/service-token";
import { colorScheme } from "@shikshak/theme/colorScheme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = TokenService.isAuthenticated();
  const { mutateAsync: logout } = useLogoutMutation();

  //Navbar itens
  const navItems = [
    // {
    //   name: "About Us",
    //   // link: NAVIGATION_ROUTES.ABOUT_US,
    //   isAuth: false
    // },
    {
      name: "All Courses",
      link: NAVIGATION_ROUTES.ALL_COURSES,
      isAuth: true
    },
    {
      name: "All Courses",
      link: NAVIGATION_ROUTES.ALL_COURSES,
      isAuth: false
    },
    {
      name: "My Classes",
      link: NAVIGATION_ROUTES.MY_CLASSES,
      isAuth: true
    },
    {
      name: "My Profile",
      link: NAVIGATION_ROUTES.PROFILE,
      isAuth: true
    },
    {
      name: "Logout",
      isAuth: true
    },
    {
      name: "Login",
      link: NAVIGATION_ROUTES.LOGIN,
      isAuth: false
    },
    {
      name: "Sign Up",
      link: NAVIGATION_ROUTES.REGISTER,
      isAuth: false
    }
  ];
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

      <HStack gap={6} align={"center"}>
        <Text
          fontWeight={"bold"}
          p={2}
          _hover={{
            bg: colorScheme.primary_100,
            color: "white",
            borderRadius: "12px"
          }}
          cursor={"pointer"}
          fontSize={"lg"}
          onClick={() => {
            navigate(NAVIGATION_ROUTES.HOME);
          }}
        >
          Home
        </Text>
        {navItems.map((item, index) => {
          if (item.isAuth && isAuthenticated) {
            return (
              <Text
                p={2}
                fontWeight={"bold"}
                _hover={{
                  bg: colorScheme.primary_100,
                  color: "white",
                  borderRadius: "12px"
                }}
                key={index}
                cursor={"pointer"}
                fontSize={"lg"}
                onClick={() => {
                  if (item.name === "Logout") {
                    logout();
                  } else {
                    {
                      item.link && navigate(item.link);
                    }
                  }
                }}
              >
                {item.name}
              </Text>
            );
          } else if (!item.isAuth && !isAuthenticated) {
            return (
              <Text
                p={2}
                _hover={{
                  bg: colorScheme.primary_100,
                  color: "white",
                  borderRadius: "12px"
                }}
                fontWeight={"bold"}
                key={index}
                cursor={"pointer"}
                fontSize={"lg"}
                onClick={() => {
                  item.link && navigate(item.link);
                }}
              >
                {item.name}
              </Text>
            );
          }
        })}
        {/* <Text
          cursor={"pointer"}
          fontSize={"lg"}
          onClick={() => {
            navigate(NAVIGATION_ROUTES.HOME);
          }}
        >
          Home
        </Text> */}
        {/* <Text fontSize={"lg"}>Blogs</Text> */}
        {/* <Text fontSize={"lg"}>About Us</Text> */}
        {/* {isAuthenticated && <Text fontSize={"lg"}>Classes</Text>} */}
        {/* {isAuthenticated && (
          <Button
            bg="red"
            _hover={{
              bg: "red"
            }}
            _active={{
              bg: "red"
            }}
            fontSize={"lg"}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        )} */}
        {/* {!isAuthenticated && (
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
        )} */}
      </HStack>
    </Flex>
  );
};

export default Navbar;
