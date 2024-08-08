// import { useForgotPassword } from "@/api/auth/password";
// import ResetBanner from "@/assets/images/Auth/ResetBanner.png";
// import { TextInput } from "@/components/Form/TextInput";
// import {
//   Box,
//   Button,
//   Card,
//   Container,
//   Flex,
//   GridItem,
//   Image,
//   SimpleGrid,
//   Text,
// } from "@chakra-ui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { BiArrowBack } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import * as z from "zod";

// const schema = z.object({
//   email: z
//     .string()
//     .min(1, { message: "Email is required to reset password" })
//     .email(),
// });

// function ResetPassword() {
//   const { mutateAsync, isPending, error } = useForgotPassword();

//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       email: "",
//     },
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data: any) => {
//     await mutateAsync(data);
//   };

//   console.log("error", error);

//   const fieldError = (error?.response?.data as any)?.errors;

//   return (
//     <Flex
//       bg={{ base: "#f2f2f2", md: "" }}
//       minH={"100vh"}
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
//                 src={ResetBanner}
//                 alt={"Login Banner"}
//                 fallback={<Box bg={"gray.100"} w={"100%"} h={"100%"} />}
//               />
//             </GridItem>
//             <GridItem
//               w={{ base: "90%", lg: "80%" }}
//               justifySelf={"center"}
//               alignSelf={"center"}
//               colSpan={1}
//             >
//               <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                 <Flex
//                   p={{ base: 4, sm: "40px 10px" }}
//                   flexDir={"column"}
//                   justify={"center"}
//                   align={"center"}
//                   gap={4}
//                 >
//                   <Text
//                     fontSize={{
//                       base: "16px",
//                       md: "18px",
//                       xl: "20px",
//                     }}
//                   >
//                     Enter your email to reset your password
//                   </Text>

//                   <TextInput
//                     errors={errors}
//                     label="Email"
//                     name={"email"}
//                     control={control}
//                     isRequired
//                     backErrors={fieldError}
//                   />

//                   <Button
//                     type="submit"
//                     colorScheme="primary"
//                     w={"100%"}
//                     size={{ base: "sm", md: "md" }}
//                     isLoading={isPending}
//                   >
//                     Reset Password
//                   </Button>
//                   <Flex gap={2} align={"center"} as={Link} to={"/login"}>
//                     <BiArrowBack />
//                     Go back
//                   </Flex>
//                 </Flex>
//               </form>
//             </GridItem>
//           </SimpleGrid>
//         </Card>
//       </Container>
//     </Flex>
//   );
// }

// export default ResetPassword;
