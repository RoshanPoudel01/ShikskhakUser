import { Center, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as LoadingSvg } from "@shikshak/assets/images/svgs/loading-svg.svg";
import { colorScheme } from "@shikshak/theme/colorScheme";

interface props {
  title?: string;
  message?: string;
}

export const LoadingIllustration = ({ title }: props) => {
  return (
    <Center height="100%" alignItems="center" pt={20} pb={10}>
      <VStack spacing={2}>
        <LoadingSvg height="380px" width="380px" />

        <Text fontSize="xl" color={colorScheme.primary} fontWeight={500}>
          {title ?? "Loading..."}
        </Text>

        {/* <Text fontSize="lg" color="gray.500">
          {message ?? "Please be patient while we load the data."}
        </Text> */}
      </VStack>
    </Center>
  );
};