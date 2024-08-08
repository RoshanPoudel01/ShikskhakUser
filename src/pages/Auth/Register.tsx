// /* eslint-disable @typescript-eslint/no-explicit-any */
// // import { useRegister } from "@/api/Auth/AuthApi";
// import { useRegister } from "@/api/auth";
// import { FacebookIcon } from "@/assets/icons/FooterIcons";
// import GoogleIcon from "@/assets/icons/GoogleIcon";
// import RegisterBanner from "@/assets/images/Auth/RegisterImage.png";
// import { TextInput } from "@/components/Form";
// import { RegisterSchema } from "@/utils/validation";
// import {
//   AbsoluteCenter,
//   Box,
//   Button,
//   Card,
//   Link as ChakraLink,
//   Checkbox,
//   Container,
//   Divider,
//   Flex,
//   GridItem,
//   HStack,
//   Heading,
//   Image,
//   SimpleGrid,
//   Text,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { RegisterInput } from "./data";

// function RegisterPage() {
//   const [checked, setChecked] = useState(false);
//   const [isLessThan340] = useMediaQuery("(max-width: 340px)");
//   const navigate = useNavigate();
//   const { mutateAsync, isPending, error } = useRegister();

//   const errorMessage = (error?.response?.data as any)?.errors;

//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       confirm_password: "",
//     },
//     resolver: zodResolver(RegisterSchema),
//   });

//   const onSubmit = async (data: any) => {
//     await mutateAsync(data);
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <Flex
//       bg={{ base: "#f2f2f2", md: "" }}
//       minH={window.innerHeight}
//       maxW={"100vw"}
//       align={"center"}
//       justify={"center"}
//     >
//       <Container maxW={{ base: "98vw", lg: "90vw", xl: "85vw" }} py={10}>
//         <Card shadow={"none"}>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//             <GridItem
//               display={{ base: "none", md: "block" }}
//               colSpan={1}
//               bg={"white"}
//               justifySelf={{ md: "start", xl: "center" }}
//               alignContent={"center"}
//             >
//               <Image
//                 src={RegisterBanner}
//                 alt={"Login Banner"}
//                 fallback={<Box bg={"gray.100"} w={"100%"} h={"100%"} />}
//               />
//             </GridItem>
//             <GridItem
//               w={{ base: "95%", sm: "90%", md: "100%", xl: "90%" }}
//               justifySelf={"center"}
//               alignSelf={"center"}
//               colSpan={1}
//             >
//               <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                 <Flex
//                   p={{ base: 4, sm: "40px 40px" }}
//                   flexDir={"column"}
//                   bg={"white"}
//                   justify={"center"}
//                   align={"center"}
//                 >
//                   <Heading
//                     fontSize={{
//                       base: "16px",
//                       sm: "18px",
//                       md: "20px",
//                       lg: "22px",
//                       xl: "24px",
//                     }}
//                     textAlign={"center"}
//                     mb={8}
//                   >
//                     Register
//                   </Heading>
//                   {RegisterInput.map((input) => (
//                     <TextInput
//                       key={input.id}
//                       errors={errors}
//                       label={input.label}
//                       name={input.name}
//                       control={control}
//                       type={input.type}
//                       backErrors={errorMessage}
//                       isRequired
//                     />
//                   ))}
//                   <Checkbox
//                     variant={"filled"}
//                     onChange={() => setChecked(!checked)}
//                     colorScheme="primary"
//                     alignItems={"center"}
//                     mt={2}
//                   >
//                     <Text fontSize={{ base: "14px", sm: "16px" }}>
//                       I agree to the terms and conditions
//                     </Text>
//                   </Checkbox>
//                   <Button
//                     type="submit"
//                     colorScheme="primary"
//                     w={"100%"}
//                     mt={8}
//                     size={{ base: "sm", md: "md" }}
//                     borderRadius={0}
//                     isLoading={isPending}
//                     isDisabled={!checked}
//                   >
//                     Register
//                   </Button>
//                   <ChakraLink
//                     as={Link}
//                     to="/login"
//                     color={"primary.500"}
//                     mt={2}
//                     fontSize={{ base: "14px", sm: "16px" }}
//                   >
//                     Already have an account? Login
//                   </ChakraLink>
//                   <Box pos={"relative"} w={"100%"} my={10}>
//                     <Divider borderColor={"black"} opacity={1} w={"full"} />
//                     <AbsoluteCenter px={4} bg={"white"}>
//                       OR continue with
//                     </AbsoluteCenter>
//                   </Box>
//                   <HStack
//                     align={"center"}
//                     justify={"center"}
//                     flexWrap={"wrap"}
//                     spacing={4}
//                   >
//                     <Button
//                       colorScheme="primary"
//                       variant={"outline"}
//                       w={isLessThan340 ? "100%" : ""}
//                       size={{ base: "sm", md: "md" }}
//                       leftIcon={<GoogleIcon boxSize={6} />}
//                     >
//                       Google
//                     </Button>
//                     <Button
//                       w={isLessThan340 ? "100%" : ""}
//                       colorScheme="facebook"
//                       variant={"outline"}
//                       size={{ base: "sm", md: "md" }}
//                       leftIcon={<FacebookIcon boxSize={6} />}
//                     >
//                       Facebook
//                     </Button>
//                   </HStack>
//                 </Flex>
//               </form>
//             </GridItem>
//           </SimpleGrid>
//         </Card>
//       </Container>
//     </Flex>
//   );
// }

// export default RegisterPage;
