import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
  useBoolean
} from "@chakra-ui/react";
import { imageAssets } from "@shikshak/assets/images";
import { baseImageURL } from "@shikshak/services/service-axios";
import { useStoreInitData } from "@shikshak/store/store";
import { colorScheme } from "@shikshak/theme/colorScheme";
import EditProfile from "./EditProfile";

const ViewProfile = () => {
  const { initData } = useStoreInitData();
  const [flag, setFlag] = useBoolean();
  const profileDetails = [
    {
      label: "First Name",
      value: `${initData?.first_name}`
    },
    {
      label: "Middle Name",
      value: `${initData?.middle_name ?? ""}`
    },
    {
      label: "Last Name",
      value: `${initData?.last_name}`
    },
    {
      label: "Email",
      value: `${initData?.email}`
    },
    {
      label: "Phone Number",
      value: `${initData?.userProfile?.phoneNumber ?? "N/A"}`
    },
    {
      label: "Address",
      value: `${initData?.userProfile?.address ?? "N/A"}`
    }
  ];
  return (
    <Stack gap={8}>
      <HStack justifyContent={"space-between"} gap={"40px"}>
        {flag ? (
          <EditProfile setFlag={setFlag} />
        ) : (
          <>
            <Card p={"20px"} minW={"max-content"}>
              <CardBody>
                <Box borderRadius={"94px"}>
                  <Image
                    src={`${baseImageURL}/${initData?.userProfile?.profilePicture}`}
                    height={"190px"}
                    maxW={"190px"}
                    fallback={
                      <Image
                        src={imageAssets.Logo}
                        maxW={"190px"}
                        height={"190px"}
                      />
                    }
                  />
                </Box>
              </CardBody>
            </Card>
            <Stack
              w={"100%"}
              borderRadius={"12px"}
              p={"20px"}
              bg={"rgba(240, 240, 240, 0.40)"}
              gap={3}
            >
              {profileDetails.map((detail, index) => (
                <HStack key={index} justifyContent={"space-between"}>
                  <Text
                    fontWeight={400}
                    fontSize={"16px"}
                    lineHeight={"20px"}
                    color={colorScheme.gray_500}
                  >
                    {detail?.label}
                  </Text>
                  <Text
                    fontWeight={500}
                    fontSize={"16px"}
                    lineHeight={"20px"}
                    color={colorScheme.gray_600}
                  >
                    {detail?.value}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </>
        )}
      </HStack>

      {!flag && (
        <Stack alignItems={"flex-end"}>
          <Button onClick={() => setFlag.on()}>Edit</Button>
        </Stack>
      )}
    </Stack>
  );
};

export default ViewProfile;
