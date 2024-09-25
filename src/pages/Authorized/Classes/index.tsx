import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import ConfirmationModal from "@shikshak/components/Modal/DeleteModal";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import { useJoinClass } from "@shikshak/services/service-class";
import { Class } from "@shikshak/services/service-course";
import { toastFail, toastSuccess } from "@shikshak/utility/Toast";
import moment from "moment";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AllClasses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [classId, setClassId] = useState<number | null>(null);
  const { refetch, isLoading: isJoining } = useJoinClass(classId);

  const {
    isOpen: isConfirmationModalOpen,
    onClose: onCloseConfirmationModal,
    onOpen: onOpenConfirmationModal
  } = useDisclosure();

  const handleJoinClass = async () => {
    try {
      const {
        data,
        isError,
        error
      }: {
        data: any;
        isError: boolean;
        error: any;
      } = await refetch();

      if (isError) {
        toastFail(error?.response?.data?.message);
      }
      if (data) {
        toastSuccess(data?.data?.message ?? "You Joined Class Successfully");
      }
      setClassId(null);
      onCloseConfirmationModal();
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
                    lg: 3
                  }}
                  gap={6}
                  w="full"
                  maxW="1400px" // Constrain the grid width for better appearance
                >
                  {location.state.classes?.map(
                    (classItem: Class, index: number) => (
                      <Box
                        key={index}
                        bg="white"
                        p={6}
                        borderRadius="md"
                        boxShadow="md"
                        borderWidth="1px" // Add a border to define card boundaries
                        borderColor="gray.200" // Lighter border color
                        overflow="hidden"
                        transition="transform 0.2s, box-shadow 0.2s" // Smooth transitions
                        _hover={{
                          transform: "scale(1.02)", // Slightly enlarge on hover
                          boxShadow: "lg" // Enhance shadow on hover
                        }}
                      >
                        <VStack spacing={4} align="stretch">
                          <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            textAlign="center"
                          >
                            {classItem.title}
                          </Text>
                          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            <GridItem>
                              <Text fontSize="lg" fontWeight="semibold">
                                Start Time:
                              </Text>
                              <Text>
                                {moment(classItem.startTime).format(
                                  "YYYY-MM-DD HH:mm:ss a"
                                )}
                              </Text>
                            </GridItem>
                            <GridItem>
                              <Text fontSize="lg" fontWeight="semibold">
                                End Time:
                              </Text>
                              <Text>
                                {moment(classItem.endTime).format(
                                  "YYYY-MM-DD HH:mm:ss a"
                                )}
                              </Text>
                            </GridItem>
                            <GridItem colSpan={2}>
                              {" "}
                              {/* Adjusted to span full width */}
                              <Text fontSize="lg" fontWeight="semibold">
                                Description:
                              </Text>
                              <Text>{classItem.description}</Text>
                            </GridItem>
                            <GridItem
                              colSpan={2}
                              display="flex"
                              alignItems="center"
                              justifyContent="flex-end"
                            >
                              <Button
                                colorScheme="teal"
                                variant="solid"
                                size="md"
                                onClick={() => {
                                  setClassId(classItem.id);
                                  onOpenConfirmationModal();
                                }}
                              >
                                Join Class
                              </Button>
                            </GridItem>
                          </Grid>
                        </VStack>
                      </Box>
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

            {/* Footer */}
            {/* Uncomment and customize footer if needed */}
            {/* <Box bg="teal.500" color="white" py={4} textAlign="center">
      <Text>&copy; 2023 Class Management System</Text>
    </Box> */}
          </Flex>
          <ConfirmationModal
            title="Are you sure you want to join the class?"
            message="You are joining this class"
            buttonText="Okay"
            isLoading={isJoining}
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
