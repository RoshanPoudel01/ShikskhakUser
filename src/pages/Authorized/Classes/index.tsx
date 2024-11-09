import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import ClassCard from "@shikshak/components/Common/ClassCard";
import ConfirmationModal from "@shikshak/components/Modal/DeleteModal";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import { Class } from "@shikshak/services/service-course";
import { usePaymentInitiate } from "@shikshak/services/service-init";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const STRIPE_KEY = import.meta.env.STRIPE_PUBLIC_KEY;
const AllClasses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [classId, setClassId] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const { mutateAsync } = usePaymentInitiate();
  const {
    isOpen: isConfirmationModalOpen,
    onClose: onCloseConfirmationModal,
    onOpen: onOpenConfirmationModal
  } = useDisclosure();

  const handleJoinClass = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51Q41aIECDhAPkwcwuxSuv6cYzE6jfZknhlBKUtEYHmK4Y32vxIgQZzWNfbVHTKGwcYygkRKgClrX4RKyK7iCAcv400IDWRi7kF"
      );
      const response = await mutateAsync({
        amount: amount,
        classId: classId
      });
      await stripe?.redirectToCheckout({
        sessionId: response.data.id
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {location.state ? (
        <>
          <Flex direction="column" minH="100vh" bg="gray.50">
            {/* Header */}
            <Box
              // bgImage={`url('/path/to/your/image.jpg')`} // Set a background image if needed
              bgSize="cover"
              bgPosition="center"
              color="white"
              py={4}
              textAlign="center"
              position="relative"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.5)"
              />
              <Heading as="h1" size="xl" position="relative" zIndex="1">
                All {location.state.title} Classes by {location.state.user}
              </Heading>
            </Box>

            {/* Main Content */}
            {location.state.classes.length > 0 ? (
              <Flex
                direction="column"
                align="center"
                justify="start"
                flex="1"
                p={5}
              >
                <SimpleGrid
                  columns={{
                    base: 1,
                    sm: 1,
                    md: 2,
                    lg: 4
                  }}
                  gap={5}
                  w="full"
                  maxW="1400px" // Constrain the grid width for better appearance
                >
                  {location.state.classes?.map(
                    (classItem: Class, index: number) => (
                      <>
                        <ClassCard
                          key={index}
                          classItem={classItem}
                          setClassId={setClassId}
                          setAmount={setAmount}
                          onOpenConfirmationModal={onOpenConfirmationModal}
                        />
                      </>
                    )
                  )}
                </SimpleGrid>
              </Flex>
            ) : (
              <Flex>
                <Heading fontSize={"20px"} w={"full"}>
                  No classes available for this course at the moment
                </Heading>
              </Flex>
            )}
          </Flex>
          <ConfirmationModal
            title="Are you sure you want to join the class?"
            message="You are joining the class of the tutor"
            buttonText="Okay"
            // isLoading={isJoining}
            isOpen={isConfirmationModalOpen}
            onClose={() => {
              setClassId(null);
              onCloseConfirmationModal();
            }}
            onApprove={handleJoinClass}
          />
        </>
      ) : (
        <Center display={"flex"} flexDirection={"column"}>
          <Heading fontSize={"20px"}>
            Please select course to view classes
          </Heading>
          <Text
            as={"u"}
            cursor={"pointer"}
            onClick={() => navigate(NAVIGATION_ROUTES.ALL_COURSES)}
          >
            {" "}
            View Courses
          </Text>
        </Center>
      )}
    </>
  );
};

export default AllClasses;
