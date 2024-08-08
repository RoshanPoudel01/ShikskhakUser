import { Center, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as DataNotFoundSvg } from "@shikshak/assets/images/svgs/result-not-found.svg";
import { colorScheme } from "@shikshak/theme/colorScheme";

interface props {
  title?: string;
  message?: string;
}

export const ResultNotFound = ({ title }: props) => {
  return (
    <Center height="100%" alignItems="center" pt={20} pb={10}>
      <VStack spacing={2}>
        <DataNotFoundSvg height="300px" width="300px" />

        <Text fontSize="xl" color={colorScheme.primary} fontWeight={500}>
          {title ?? "No Result Found"}
        </Text>

        {/* <Text fontSize="lg" color="gray.500">
          {message ?? "There seems to be no data for what you are looking for."}
        </Text> */}
      </VStack>
    </Center>
  );
};
