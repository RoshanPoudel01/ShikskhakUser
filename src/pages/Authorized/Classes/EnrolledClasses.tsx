import { Box, Button, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { useGetMyClasses } from "@shikshak/services/service-class";
import moment from "moment";

const EnrolledClasses = () => {
  const { data: classes } = useGetMyClasses();

  return (
    <VStack spacing={4} align={"start"}>
      <Text fontSize={"2xl"} fontWeight={700}>
        Enrolled Classes
      </Text>
      <Grid
        templateColumns={"repeat(4, 1fr)"}
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
                    End Time:
                  </Text>
                  <Text>{moment(classItem.endDate).format("YYYY-MM-DD")}</Text>
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
    </VStack>
  );
};

export default EnrolledClasses;
