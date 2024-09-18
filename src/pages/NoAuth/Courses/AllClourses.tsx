import {
  Avatar,
  Badge,
  Card,
  CardBody,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@shikshak/pages/App/navigationRoutes";
import { useAuthentication } from "@shikshak/services/service-auth";
import { baseImageURL } from "@shikshak/services/service-axios";
import { useGetAllCourses } from "@shikshak/services/service-course";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const { data: courseData } = useGetAllCourses();
  const { data: isAuthenticated } = useAuthentication();
  const navigate = useNavigate();

  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 1,
        md: 2,
        lg: 4,
        xl: 5
      }}
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
      spacing={4}
      bgColor={"#E2F5FC"}
      borderRadius={6}
    >
      {courseData?.map(item => (
        <Card
          key={item.id}
          boxShadow={"none"}
          width={"max-content"}
          w={"full"}
          minH={"max-content"}
          px={6}
          py={9}
          flexGrow={1}
          overflow={"hidden"}
          cursor={"pointer"}
          onClick={() =>
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
              : navigate(NAVIGATION_ROUTES.LOGIN)
          }
        >
          <CardBody display={"flex"} flexDir={"column"}>
            <Stack minH={"100%"}>
              <Image
                src={`${baseImageURL}/${item?.imageUrl}`}
                height={{
                  base: "160px",
                  sm: "180px",
                  md: "170px"
                }}
              />
              <Text fontWeight={600}>{item?.title}</Text>
              <Text fontSize={"12px"}>{item?.description}</Text>
              {/* <Text fontSize={"12px"} wordBreak={"break-word"}>
                {item?.tags.join(", ")}
              </Text> */}
              <HStack gap={2} width={"220px"} wrap={"wrap"}>
                {item?.tags?.map((tag, index) => (
                  <Badge color={"black"} key={index}>
                    {tag}
                  </Badge>
                ))}
              </HStack>
              {/* {item?.classes.map((cls, index) => (
                <Text key={index} fontSize={"12px"}>
                  {cls.title} -{" "}
                  {moment(cls.startTime).format("YYYY-MM-DD HH:mm:ss a")}
                </Text>
              ))} */}
            </Stack>
            <HStack spacing={2} justifyContent={"flex-end"} marginTop={"auto"}>
              <Text fontSize={"14px"} fontWeight={500}>
                {item?.user?.full_name}
              </Text>
              <Avatar
                src={`${baseImageURL}/${item?.user?.userprofile?.profilePicture}`}
                boxSize={"40px"}
              />
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default AllCourses;
