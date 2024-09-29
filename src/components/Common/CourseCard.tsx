import {
  Avatar,
  Badge,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { baseImageURL } from "@shikshak/services/service-axios";

interface CourseCardProps {
  title: string;
  description?: string;
  image: string;
  tags?: string[];
  tutor: {
    name: string;
    profilePicture?: string;
  };
  profilePicture?: string;
  onClick?: () => void;
}
const CourseCard = ({
  image,
  title,
  tutor,
  tags,
  description,
  onClick
}: CourseCardProps) => {
  return (
    <Card
      boxShadow="0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
      transition="ease-in-out 0.3s"
      _hover={{
        transform: "scale(1.05)",
        transition: "ease-in-out 0.3s"
      }}
    >
      <CardBody
        onClick={onClick}
        cursor={"pointer"}
        display={"flex"}
        flexDir={"column"}
        gap={"32px"}
      >
        <Image src={`${baseImageURL}/${image}`} alt={title} height={"240px"} />
        <Stack>
          <Text fontSize={"24px"} fontWeight={600} color={"#101828"}>
            {title}
          </Text>
          <Text fontSize={"16px"} fontWeight={400} color={"#475467"}>
            {description}
          </Text>
          <HStack gap={2} minW={"220px"} wrap={"wrap"}>
            {tags?.map((tag, index) => {
              console.log(tag);
              return (
                <Badge color={"black"} key={index}>
                  {tag}
                </Badge>
              );
            })}
          </HStack>
        </Stack>
        <HStack spacing={2} marginTop={"auto"}>
          <Avatar
            src={`${baseImageURL}/${tutor.profilePicture}`}
            boxSize={"40px"}
          />
          <Text fontSize={"14px"} fontWeight={500}>
            {tutor.name}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
