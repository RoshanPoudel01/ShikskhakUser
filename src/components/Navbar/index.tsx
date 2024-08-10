import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  useDisclosure
} from "@chakra-ui/react";
import TokenService from "@shikshak/services/service-token";
import { FiLogOut } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { profileMenuItems } from "./MobileNav/profileMenuItems";

function NavBar() {
  const isAuthenticated = TokenService.isAuthenticated();
  const path = useLocation().pathname.split("/")[1];

  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose
  } = useDisclosure();

  const navigate = useNavigate();
  // const { mutateAsync } = useLogoutUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = () => {
    // await mutateAsync();
    TokenService.clearToken();
    navigate("/");
  };

  const handleCartOpen = () => {
    TokenService.isAuthenticated() ? onOpen() : navigate("/login");
  };
  return (
    <Flex
      bg={path ? "white" : "#BEBDBD"}
      borderBottom={"1px solid #BEBDBD"}
      as={"nav"}
      w="100%"
      py={5}
      pos={"fixed"}
      h={"75px"}
      zIndex={99}
    >
      <Container maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}>
        <Flex align={"center"} justify={"space-between"}>
          <HStack display={{ base: "none", md: "flex" }} gap={"30px"}></HStack>
          {/* <MobileNav
            isOpen={isMobileNavOpen}
            onClose={onMobileNavClose}
            menus={menus}
          /> */}
          <Icon
            onClick={onMobileNavOpen}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            boxSize={6}
            as={MenuIcon}
          />

          <HStack gap={"30px"}>
            <SearchIcon
              display={{ base: "none", md: "flex" }}
              boxSize={{ base: 5, md: 6 }}
            />
            {!isAuthenticated ? (
              <>
                <Button
                  display={{ base: "flex", md: "none" }}
                  as={NavLink}
                  to="/login"
                  size={"sm"}
                  borderRadius={0}
                  colorScheme="primary"
                >
                  Login
                </Button>
                <ButtonGroup display={{ base: "none", md: "flex" }}>
                  <Button
                    display={{ base: "none", md: "flex" }}
                    as={NavLink}
                    to="/login"
                    size={"sm"}
                    borderRadius={0}
                    colorScheme="primary"
                  >
                    Login
                  </Button>
                  <Button
                    as={NavLink}
                    to="/register"
                    display={{ base: "none", md: "flex" }}
                    size={"sm"}
                    variant={"outline"}
                    borderRadius={0}
                    colorScheme="primary"
                  >
                    Sign Up
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              <Menu
                isLazy
                closeOnBlur
                colorScheme="primary"
                variant={"responsive"}
                placement="bottom-end"
              >
                <MenuButton>
                  <Avatar
                    display={{ base: "none", md: "flex" }}
                    cursor={"pointer"}
                    name="John Doe"
                    size={"sm"}
                    loading="lazy"
                  />
                </MenuButton>
                <MenuList
                  zIndex={9999}
                  minW={"fit-content"}
                  maxW={"fit-content"}
                  borderColor={"primary.500"}
                  overflow={"hidden"}
                  py={0}
                >
                  {profileMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      as={NavLink}
                      _hover={{ textDecor: "none" }}
                      to={item.to}
                    >
                      <MenuItem
                        borderBottom={"1px solid"}
                        borderColor={"primary.500"}
                        _hover={{ bg: "primary.500", color: "white" }}
                        py={2}
                        icon={<Icon as={item.icon} boxSize={4} />}
                        fontSize={{ base: "12px", md: "14px" }}
                      >
                        {item.label}
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem
                    borderColor={"primary.500"}
                    _hover={{ bg: "primary.500", color: "white" }}
                    py={2}
                    icon={
                      <Icon
                        transform={"rotate(180deg)"}
                        as={FiLogOut}
                        boxSize={4}
                      />
                    }
                    fontSize={{ base: "12px", md: "14px" }}
                    onClick={handleSignOut}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default NavBar;
