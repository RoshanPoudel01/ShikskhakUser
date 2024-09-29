import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { colorScheme } from "@shikshak/theme/colorScheme";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";

interface ClassCardProps {
  classItem: {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    price: number;
    user: any;
  };
  setClassId: Dispatch<SetStateAction<number | null>>;
  setAmount: Dispatch<SetStateAction<number | null>>;
  onOpenConfirmationModal: () => void;
}
const ClassCard = ({
  classItem,
  setClassId,
  onOpenConfirmationModal,
  setAmount
}: ClassCardProps) => {
  return (
    <Flex
      border={"1px solid"}
      borderColor={colorScheme.primary_100}
      direction={"column"}
      p={5}
      borderRadius={"16px"}
      transition="all 0.3s ease"
      gap={4}
      _hover={{
        borderColor: colorScheme.primary_100,
        transform: "scale(1.05)",
        transition: "all 0.3s ease"
      }}
      bg={"#FFFFFF"}
      maxW={"320px"}
    >
      <HStack width={"100%"}>
        <Stack>
          <Text fontWeight={600} fontSize={"24px"} width={"200px"}>
            {classItem?.title}
          </Text>
          <HStack>
            <Text maxW={"200px"} wordBreak={"break-word"} noOfLines={3}>
              {classItem?.description}
            </Text>
          </HStack>
        </Stack>
      </HStack>
      <Stack gap={6}>
        <HStack justifyContent={"space-between"}>
          <Stack>
            <Text fontWeight={600} fontSize={"18px"}>
              Start Date:
            </Text>
            <Text fontSize={"16px"} fontWeight={400}>
              {moment(classItem.startDate).format("YYYY-MM-DD")}
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={600} fontSize={"18px"}>
              End Date:
            </Text>
            <Text fontSize={"16px"} fontWeight={400}>
              {moment(classItem.endDate).format("YYYY-MM-DD")}
            </Text>
          </Stack>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Stack>
            <Text fontWeight={600} fontSize={"18px"}>
              Price
            </Text>
            <Text maxW={"180px"} wordBreak={"break-word"} noOfLines={2}>
              Rs. {classItem?.price}
            </Text>
          </Stack>
          <Stack>
            <Text fontWeight={600} fontSize={"18px"}>
              Class Timing
            </Text>
            <Text maxW={"180px"} wordBreak={"break-word"} noOfLines={2}>
              {moment(classItem.startTime, "HH:mm:ss A").format("hh:mm A")} to{" "}
              {moment(classItem.endTime, "HH:mm:ss A").format("hh:mm A")}
            </Text>
          </Stack>
        </HStack>
      </Stack>
      <Button
        variant="solid"
        size="md"
        onClick={() => {
          setClassId(classItem?.id);
          setAmount(classItem?.price);
          onOpenConfirmationModal();
        }}
      >
        Enroll Now
      </Button>
    </Flex>
  );
};

export default ClassCard;
