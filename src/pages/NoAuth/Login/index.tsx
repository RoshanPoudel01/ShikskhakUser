import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Link as ChakraLink,
  Checkbox,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { imageAssets } from "@shikshak/assets/images";

import TextInput from "@shikshak/components/Form/TextInput";
import { useLoginMutation } from "@shikshak/services/service-auth";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
function LoginPage() {
  const { mutateAsync, isPending } = useLoginMutation();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const LoginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(LoginSchema)
  });

  const onSubmit = async (data: any) => {
    await mutateAsync(data);
    const redirect = urlParams.get("redirect");
    redirect
      ? navigate(redirect, { replace: true })
      : navigate("/", { replace: true });
    // window.location.reload();
  };

  return (
    <Flex
      bg={{ base: "#f2f2f2", md: "" }}
      minH={window.innerHeight}
      maxW={"100vw"}
      justify={"center"}
      align={"center"}
    >
      <Container maxW={{ base: "98vw", lg: "90vw", xl: "85vw" }}>
        <Card shadow={"none"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem
              display={{ base: "none", md: "block" }}
              colSpan={1}
              bg={"white"}
              justifySelf={{ md: "start", xl: "center" }}
              alignContent={"center"}
            >
              <Image
                src={imageAssets.LoginBanner}
                alt={"Login Banner"}
                fallback={<Box bg={"gray.100"} w={"100%"} h={"100%"} />}
              />
            </GridItem>
            <GridItem
              w={{ base: "95%", sm: "80%", md: "90%", xl: "70%" }}
              justifySelf={"center"}
              alignSelf={"center"}
              colSpan={1}
            >
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Flex
                  p={{ base: 4, sm: "40px 10px" }}
                  flexDir={"column"}
                  justify={"center"}
                  gap={4}
                >
                  <Heading
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                      xl: "24px"
                    }}
                    textAlign={"center"}
                    mb={8}
                  >
                    Welcome!!!
                  </Heading>
                  <Stack gap={6}>
                    <TextInput
                      label="Email"
                      type="text"
                      name={"email"}
                      control={control}
                      startIcon={<AtSignIcon />}
                      isRequired
                    />
                    <TextInput
                      label="Password"
                      name={"password"}
                      type="password"
                      control={control}
                      startIcon={<LockIcon />}
                      isRequired
                    />
                  </Stack>
                  <HStack
                    justifyContent={"space-between"}
                    mt={4}
                    flexWrap={"wrap"}
                  >
                    <Checkbox
                      colorScheme={"primary"}
                      size={{ base: "sm", md: "md" }}
                    >
                      <Text fontSize={{ base: "14px", sm: "16px" }}>
                        Remember me
                      </Text>
                    </Checkbox>
                    <ChakraLink
                      as={Link}
                      size={"lg"}
                      to="/reset-password"
                      color={"primary.500"}
                      mt={2}
                      fontSize={{ base: "14px", sm: "16px" }}
                    >
                      Forgot Password?
                    </ChakraLink>
                  </HStack>
                  <Button
                    type="submit"
                    colorScheme="primary"
                    w={"100%"}
                    mt={8}
                    size={{ base: "sm", md: "md" }}
                    isLoading={isPending}
                  >
                    Log In
                  </Button>
                  <ChakraLink
                    as={Link}
                    to="/register"
                    color={"primary.500"}
                    mt={4}
                    fontSize={{ base: "14px", sm: "16px" }}
                    textAlign={"center"}
                  >
                    {" Don't have an account? Register"}
                  </ChakraLink>
                </Flex>
              </form>
            </GridItem>
          </SimpleGrid>
        </Card>
      </Container>
    </Flex>
  );
}

export default LoginPage;
