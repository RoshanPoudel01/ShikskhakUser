// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useLogin } from "@/api/auth";
// import { FacebookIcon } from "@/assets/icons/FooterIcons";
// import GoogleIcon from "@/assets/icons/GoogleIcon";
// import { TextInput } from "@/components/Form";
// import { LoginSchema } from "@/utils/validation";
// import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
// import {
//   AbsoluteCenter,
//   Box,
//   Button,
//   Link as ChakraLink,
//   Checkbox,
//   Divider,
//   HStack,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   Text,
// } from "@chakra-ui/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// interface ModalLoginProps {
//   isOpen: boolean;
//   onOpen?: () => void;
//   onClose: () => void;
// }

// function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
//   const { mutateAsync, isPending } = useLogin();
//   const {
//     control,
//     formState: { errors },
//     reset,
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     resolver: zodResolver(LoginSchema),
//   });

//   const onSubmit = async (data: any) => {
//     await mutateAsync(data);
//     reset({
//       email: "",
//       password: "",
//     });
//     onClose();
//     reset();
//     // window.location.reload();
//   };

//   const handleClose = () => {
//     reset({
//       email: "",
//       password: "",
//     });
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={handleClose} motionPreset="slideInTop">
//       <ModalOverlay />
//       <ModalContent as={"form"} onSubmit={handleSubmit(onSubmit)}>
//         <ModalHeader textAlign={"center"}>Login</ModalHeader>
//         <ModalBody py={6}>
//           <TextInput
//             errors={errors}
//             label="Email"
//             name={"email"}
//             control={control}
//             leftIcon={<AtSignIcon />}
//             isRequired
//           />
//           <TextInput
//             errors={errors}
//             label="Password"
//             name={"password"}
//             type="password"
//             control={control}
//             leftIcon={<LockIcon />}
//             isRequired
//           />

//           <HStack justifyContent={"space-between"} mt={4} flexWrap={"wrap"}>
//             <Checkbox colorScheme={"primary"} size={{ base: "sm", md: "md" }}>
//               <Text fontSize={{ base: "14px", sm: "16px" }}>Remember me</Text>
//             </Checkbox>
//             <ChakraLink
//               as={Link}
//               size={"lg"}
//               to="/reset-password"
//               color={"primary.500"}
//               mt={2}
//               fontSize={{ base: "14px", sm: "16px" }}
//             >
//               Forgot Password?
//             </ChakraLink>
//           </HStack>
//           <Button
//             type="submit"
//             colorScheme="primary"
//             w={"100%"}
//             mt={8}
//             size={{ base: "sm", md: "md" }}
//             isLoading={isPending}
//           >
//             Log In
//           </Button>
//           <ChakraLink
//             as={Link}
//             to="/register"
//             color={"primary.500"}
//             mt={4}
//             fontSize={{ base: "14px", sm: "16px" }}
//             textAlign={"center"}
//           >
//             Don't have an account? Register
//           </ChakraLink>
//           <Box pos={"relative"} w={"100%"} my={10}>
//             <Divider borderColor={"black"} opacity={1} w={"full"} />
//             <AbsoluteCenter fontSize={"12px"} px={4} bg={"white"}>
//               OR continue with
//             </AbsoluteCenter>
//           </Box>
//           <HStack
//             align={"center"}
//             justify={"center"}
//             flexWrap={"wrap"}
//             spacing={4}
//           >
//             <Button
//               colorScheme="primary"
//               variant={"outline"}
//               size={{ base: "sm", md: "md" }}
//               leftIcon={<GoogleIcon boxSize={6} />}
//             >
//               Google
//             </Button>
//             <Button
//               colorScheme="facebook"
//               variant={"outline"}
//               size={{ base: "sm", md: "md" }}
//               leftIcon={<FacebookIcon boxSize={6} />}
//             >
//               Facebook
//             </Button>
//           </HStack>
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// }

// export default ModalLogin;
