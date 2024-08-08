// import {
//   Box,
//   Button,
//   Card,
//   Container,
//   Flex,
//   GridItem,
//   HStack,
//   Heading,
//   Image,
//   PinInput,
//   PinInputField,
//   SimpleGrid,
//   Text,
// } from "@chakra-ui/react";

// import PinBanner from "@/assets/images/Auth/PinBanner.png";
// import { Controller, useForm } from "react-hook-form";

// function VerifyOTP() {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       otp: "",
//     },
//   });
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
//               py={10}
//             >
//               <Image
//                 src={PinBanner}
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
//               <form
//                 onSubmit={handleSubmit((data) => console.log(data))}
//                 noValidate
//               >
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
//                     mb={4}
//                   >
//                     Verify OTP
//                   </Heading>
//                   <Text
//                     fontSize={{ base: "12px", sm: "14px", md: "16px" }}
//                     mb={8}
//                   >
//                     Enter the OTP sent to your email
//                   </Text>
//                   <Flex flexDir={"column"} justify={"center"} align={"center"}>
//                     <Controller
//                       name="otp"
//                       control={control}
//                       defaultValue=""
//                       render={({ field: { value, onChange } }) => (
//                         <HStack spacing={2}>
//                           <PinInput
//                             orientation="horizontal"
//                             onChange={onChange}
//                             value={value}
//                             size={{ base: "sm", sm: "md" }}
//                           >
//                             <PinInputField />
//                             <PinInputField />
//                             <PinInputField />
//                             <PinInputField />
//                             <PinInputField />
//                             <PinInputField />
//                           </PinInput>
//                         </HStack>
//                       )}
//                     />
//                     <Button
//                       type="submit"
//                       colorScheme="primary"
//                       w={"100%"}
//                       mt={8}
//                       borderRadius={0}
//                       size={{ base: "sm", sm: "md" }}
//                     >
//                       Verify OTP
//                     </Button>
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

// export default VerifyOTP;
