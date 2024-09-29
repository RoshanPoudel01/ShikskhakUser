import { Button, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import CourseCard from "@shikshak/components/Common/CourseCard";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import { useAuthentication } from "@shikshak/services/service-auth";
import {
  useGetAllCourses,
  useGetTopCourses,
  useUpdateCourseClicks
} from "@shikshak/services/service-course";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const { data: courseData } = useGetAllCourses();
  const { data: isAuthenticated } = useAuthentication();
  const { data: topCourses } = useGetTopCourses();
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState<number | null>(null);
  const { refetch } = useUpdateCourseClicks(courseId);

  const handleClick = async () => {
    try {
      await refetch();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack
      borderRadius={6}
      padding={{
        base: 2,
        sm: 2,
        md: 4,
        lg: 10
      }}
      m={{
        base: 0,
        sm: 0,
        md: 4
      }}
      gap={"20px"}
    >
      <HStack justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize={"24px"}>
          Top Courses
        </Text>
      </HStack>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 5
        }}
        spacing={4}
      >
        {topCourses?.map(item => (
          <CourseCard
            description={item.description}
            key={item.id}
            image={item.imageUrl}
            title={item.title}
            tutor={{
              name: item.user.full_name,
              profilePicture: item.user.userprofile.profilePicture
            }}
            tags={item.tags}
            onClick={async () => {
              await setCourseId(item.id);
              handleClick();
              isAuthenticated
                ? navigate(NAVIGATION_ROUTES.ALL_CLASSES, {
                    state: {
                      classes: item.classes,
                      user: item.user.full_name,
                      id: item.id,
                      title: item.title,
                      courseImage: item.imageUrl
                    }
                  })
                : navigate(NAVIGATION_ROUTES.LOGIN);
            }}
          />
        ))}
      </SimpleGrid>
      <HStack justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize={"24px"}>
          Our Courses
        </Text>
      </HStack>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 5
        }}
        spacing={4}
      >
        {courseData?.slice(0, perPage).map(item => (
          <CourseCard
            description={item.description}
            key={item.id}
            image={item.imageUrl}
            title={item.title}
            tutor={{
              name: item.user.full_name,
              profilePicture: item.user.userprofile.profilePicture
            }}
            tags={item.tags}
            onClick={async () => {
              await setCourseId(item.id);
              handleClick();
              isAuthenticated
                ? navigate(NAVIGATION_ROUTES.ALL_CLASSES, {
                    state: {
                      classes: item.classes,
                      user: item.user.full_name,
                      id: item.id,
                      title: item.title,
                      courseImage: item.imageUrl
                    }
                  })
                : navigate(NAVIGATION_ROUTES.LOGIN);
            }}
          />
        ))}
      </SimpleGrid>
      <HStack mt={4} justify={"center"} align={"center"}>
        <Button
          display={
            courseData && courseData?.length <= perPage ? "none" : "block"
          }
          onClick={() => setPerPage(perPage + 10)}
        >
          Load More
        </Button>
      </HStack>
    </Stack>
  );
};

export default AllCourses;
