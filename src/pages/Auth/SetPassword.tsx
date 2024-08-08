// import { baseURL } from "@/api/axiosSetup";
// import PasswordBanner from "@/assets/images/Auth/PasswordBanner.png";
// import { TextInput } from "@/components/Form/TextInput";
// import { useToast } from "@/utils/toast";
// import {
//   Box,
//   Button,
//   Card,
//   Container,
//   Flex,
//   GridItem,
//   Heading,
//   Image,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { BiArrowBack } from "react-icons/bi";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import * as z from "zod";

// const schema = z
//   .object({
//     password: z
//       .string()
//       .min(8, { message: "Password must be at least 8 characters long" }),
//     password_confirmation: z
//       .string()
//       .min(8, { message: "Password must be at least 8 characters long" }),
//   })
//   .refine((data) => data.password === data.password_confirmation, {
//     message: "Passwords did not match",
//     path: ["confirm_password"], // This specifies where the error should be attached
//   });

// type SetPasswordProps = z.infer<typeof schema> & { email: string } & {
//   token: string;
// };

// const defaultValues = {
//   password: "",
//   password_confirmation: "",
// };

// function SetPassword() {
//   const { successToast, errorToast } = useToast();

//   const { mutateAsync, isPending, error } = useMutation<
//     any,
//     any,
//     SetPasswordProps
//   >({
//     mutationKey: ["forgot-password"],
//     mutationFn: async (data) => {
//       const response = await axios.post(`${baseURL}reset-password`, data);
//       return response;
//     },
//     onError: (error) => {
//       const errors = error?.response?.data.errors;
//       if (!Array.isArray(errors)) {
//         errorToast(errors);
//       }
//     },
//   });

//   const fieldError = (error?.response?.data as any)?.errors;

//   const location = useLocation();
//   const urlParams = new URLSearchParams(location.search);
//   const navigate = useNavigate();
//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     defaultValues: defaultValues,
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data: typeof defaultValues) => {
//     const token = urlParams.get("token");
//     const email = urlParams.get("email");
//     if (!token || !email) {
//       return;
//     }
//     const response = await mutateAsync({ ...data, email, token });
//     console.log(response);

//     if (response.status === 200) {
//       successToast("Password reset successful. Login to continue");
//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     }
//   };
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
//                 src={PasswordBanner}
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
//                     Reset Password
//                   </Heading>

//                   <TextInput
//                     errors={errors}
//                     type="password"
//                     label="Password"
//                     name={"password"}
//                     control={control}
//                     backErrors={fieldError}
//                     isRequired
//                   />
//                   <TextInput
//                     errors={errors}
//                     type="password"
//                     label="Confirm Password"
//                     name={"password_confirmation"}
//                     control={control}
//                     backErrors={fieldError}
//                     isRequired
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
//                   <Flex gap={2} mt={6} align={"center"} as={Link} to={"/login"}>
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

// export default SetPassword;
