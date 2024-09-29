import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import { baseImageURL } from "@shikshak/services/service-axios";
import { useGetMyClasses } from "@shikshak/services/service-class";
import { useGetRecommendedCourses } from "@shikshak/services/service-course";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const EnrolledClasses = () => {
  const navigate = useNavigate();
  const { data: classes } = useGetMyClasses();
  const { data: recommendedCourses } = useGetRecommendedCourses();
  return (
    <HStack spacing={4} align={"start"} justify={"space-between"}>
      <Stack>
        <Text fontSize={"2xl"} fontWeight={700}>
          Enrolled Classes
        </Text>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          gap={4}
          p={"40px"}
          width={"100%"}
        >
          {classes?.map((classItem, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              borderRadius="md"
              boxShadow="md"
              borderWidth="1px"
              borderColor="gray.200"
              overflow="hidden"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "lg"
              }}
            >
              <VStack spacing={4} align="stretch">
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                  {classItem.title}
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <GridItem>
                    <Text fontSize="lg" fontWeight="semibold">
                      Start Date:
                    </Text>
                    <Text>
                      {moment(classItem.startDate).format("YYYY-MM-DD")}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="lg" fontWeight="semibold">
                      End Date:
                    </Text>
                    <Text>
                      {moment(classItem.endDate).format("YYYY-MM-DD")}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="lg" fontWeight="semibold">
                      Start Time:
                    </Text>
                    <Text>
                      {moment(classItem.startTime, "HH:mm:ss").format(
                        "hh:mm A"
                      )}
                    </Text>
                  </GridItem>{" "}
                  <GridItem>
                    <Text fontSize="lg" fontWeight="semibold">
                      End Time:
                    </Text>
                    <Text>
                      {" "}
                      {moment(classItem.endTime, "HH:mm:ss").format("hh:mm A")}
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
                  <GridItem colSpan={1}>
                    {" "}
                    {/* Adjusted to span full width */}
                    <Text fontSize="lg" fontWeight="semibold">
                      Class By:
                    </Text>
                    <Text>
                      {classItem?.user?.first_name}{" "}
                      {classItem?.user?.middle_name}{" "}
                      {classItem?.user?.last_name}
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <Button
                      variant="solid"
                      size="md"
                      onClick={() => {
                        window.open(classItem.classLink, "_blank");
                      }}
                    >
                      Join Class
                    </Button>
                  </GridItem>
                </Grid>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Stack>
      {recommendedCourses && (
        <Stack>
          <Text fontSize={"20px"} fontWeight={700}>
            Recommended Courses
          </Text>
          {/* <Text>Accuracy: {recommendedCourses?.data?.data?.accuracy} %</Text> */}
          <Stack minW={"400px"} flex={1} p={6}>
            {recommendedCourses?.data?.data?.recommendations?.map(
              (item, index) => {
                return (
                  <Card
                    key={index}
                    boxShadow="0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
                    transition="ease-in-out 0.3s"
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "ease-in-out 0.3s"
                    }}
                    onClick={() => {
                      navigate(NAVIGATION_ROUTES.ALL_CLASSES, {
                        state: {
                          classes: item.classes,
                          user: item.user.full_name,
                          id: item.courseId,
                          title: item.title,
                          courseImage: item.imageUrl
                        }
                      });
                    }}
                  >
                    <CardBody
                      cursor={"pointer"}
                      display={"flex"}
                      flexDir={"column"}
                      gap={"32px"}
                    >
                      <Image
                        src={`${baseImageURL}/${item?.imageUrl}`}
                        alt={item?.title}
                        height={"240px"}
                      />
                      <Stack>
                        <Text
                          fontSize={"24px"}
                          fontWeight={600}
                          color={"#101828"}
                        >
                          {item?.title}
                        </Text>
                      </Stack>
                      <HStack spacing={2} marginTop={"auto"}>
                        <Avatar
                          src={`${baseImageURL}/${item?.user?.userprofile.profilePicture}`}
                          boxSize={"40px"}
                        />
                        <Text fontSize={"14px"} fontWeight={500}>
                          {item?.user?.first_name} {item?.user?.middle_name}
                          {item?.user?.last_name}
                        </Text>
                        <Text>
                          Similarity :{" "}
                          {parseFloat(item?.similarity * 100 + "").toPrecision(
                            4
                          )}
                          %
                        </Text>
                      </HStack>
                    </CardBody>
                  </Card>
                );
              }
            )}
          </Stack>
        </Stack>
      )}
    </HStack>
  );
};

export default EnrolledClasses;
