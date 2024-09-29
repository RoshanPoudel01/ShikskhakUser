/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRegister } from "@/api/Auth/AuthApi";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { imageAssets } from "@shikshak/assets/images";
import TextInput from "@shikshak/components/Form/TextInput";
import { useRegisterUser } from "@shikshak/services/service-register";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import z from "zod";

const defaultValue = {
  first_name: "",
  middle_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: ""
};
function Register() {
  const { isOpen: visible, onToggle: onToggleVisibility } = useDisclosure();
  const { isOpen: confirmVisible, onToggle: onToggleConfirmVisibility } =
    useDisclosure();
  const RegisterInput = [
    {
      id: 1,
      label: "First Name",
      name: "first_name",
      type: "text",
      isRequired: true
    },
    {
      id: 1,
      label: "Middle Name",
      name: "middle_name",
      type: "text",
      isRequired: false
    },
    {
      id: 1,
      label: "Last Name",
      name: "last_name",
      type: "text",
      isRequired: true
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      type: "email",
      isRequired: true
    },

    {
      id: 3,
      label: "Password",
      name: "password",
      isRequired: true,
      type: visible ? "text" : "password",

      endicons: (
        <IconButton
          tabIndex={-1}
          colorScheme={"black"}
          size="xs"
          variant="link"
          aria-label="password-control"
          onClick={onToggleVisibility}
          icon={visible ? <BsEyeSlash /> : <BsEye />}
        />
      )
    },
    {
      id: 4,
      label: "Confirm Password",
      name: "confirm_password",
      type: confirmVisible ? "text" : "password",
      isRequired: true,
      endicons: (
        <IconButton
          tabIndex={-1}
          colorScheme={"black"}
          size="xs"
          variant="link"
          aria-label="password-control"
          onClick={onToggleConfirmVisibility}
          icon={confirmVisible ? <BsEyeSlash /> : <BsEye />}
        />
      )
    }
  ];
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegisterUser();
  const passwordSchema = z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character"
    );
  const RegisterSchema = z
    .object({
      first_name: z.string().min(3, "Name must be at least 3 characters"),
      middle_name: z.string(),
      last_name: z.string().min(3, "Name must be at least 3 characters"),
      email: z.string().email("Please enter a valid email address"),
      password: passwordSchema,
      confirm_password: passwordSchema
    })
    .refine(data => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"]
    });
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValue,
    resolver: zodResolver(RegisterSchema)
  });
  const onSubmit = async (data: typeof defaultValue) => {
    try {
      await mutateAsync({
        ...data,
        isUser: true
      });
    } catch (e) {
      console.error(e);
    }
    navigate("/");
  };

  return (
    <Flex
      bg={{ base: "#E2F5FC", md: "" }}
      minH={window.innerHeight}
      maxW={"100vw"}
      align={"center"}
      justify={"center"}
    >
      <Container maxW={{ base: "98vw", lg: "90vw", xl: "85vw" }} py={10}>
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
                src={imageAssets.RegisterBanner}
                alt={"Register Banner"}
                fallback={<Box bg={"gray.100"} w={"100%"} h={"100%"} />}
                width={"100%"}
                height={"700px"}
              />
            </GridItem>
            <GridItem
              w={{ base: "95%", sm: "90%", md: "100%", xl: "90%" }}
              justifySelf={"center"}
              alignSelf={"center"}
              colSpan={1}
            >
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Flex
                  p={{ base: 4, sm: "40px 40px" }}
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
                  >
                    Register
                  </Heading>
                  <Stack gap={4} width={"100%"}>
                    {RegisterInput.map(input => (
                      <TextInput
                        key={input.id}
                        label={input.label}
                        name={input.name}
                        control={control}
                        type={input.type}
                        isRequired={input.isRequired}
                        endIcons={input.endicons}
                      />
                    ))}
                  </Stack>

                  <Button
                    type="submit"
                    colorScheme="primary"
                    w={"100%"}
                    mt={8}
                    size={{ base: "sm", md: "md" }}
                    borderRadius={0}
                    isLoading={isPending}
                  >
                    Register
                  </Button>
                </Flex>
              </form>
            </GridItem>
          </SimpleGrid>
        </Card>
      </Container>
    </Flex>
  );
}

export default Register;
