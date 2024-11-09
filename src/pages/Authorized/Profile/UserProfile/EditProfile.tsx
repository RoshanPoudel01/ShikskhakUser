import {
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { DropzoneComponentControlled } from "@shikshak/components/Form/DropzoneComponent";
import TextInput from "@shikshak/components/Form/TextInput";
import { baseImageURL } from "@shikshak/services/service-axios";
import { useSaveUserProfile } from "@shikshak/services/service-init";
import { useStoreInitData } from "@shikshak/store/store";
import moment from "moment";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface EditProfileProps {
  setFlag: {
    toggle: () => void;
    on: () => void;
    off: () => void;
  };
}

const EditProfile = ({ setFlag }: EditProfileProps) => {
  const { initData } = useStoreInitData();
  const { mutateAsync: saveUserProfile } = useSaveUserProfile();

  const initailValues = {
    first_name: initData?.first_name ?? "",
    middle_name: initData?.middle_name != null ? initData?.middle_name : "",
    last_name: initData?.last_name ?? "",
    email: initData?.email ?? "",
    address: initData?.userProfile?.address ?? "",
    phoneNumber: initData?.userProfile?.phoneNumber ?? null,
    dateOfBirth: initData?.userProfile?.dateOfBirth
      ? moment(initData?.userProfile?.dateOfBirth).format("YYYY-MM-DD")
      : ""
  };
  const profileSchema = z.object({
    first_name: z.string().min(1, "First Name is required"),
    middle_name: z.string().nullable(),
    last_name: z.string().min(1, "Last Name is required"),
    email: z.string().email().min(1, "Email is required"),
    address: z.string().min(1, "Address is required"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Phone Number should be exactly 10 digits"),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    profilePicture: initData?.userProfile?.profilePicture
      ? z.any()
      : z.any().refine(data => !!data, {
          message: "Please upload a profile image"
        })
  });
  const { control, reset, handleSubmit } = useForm({
    defaultValues: initailValues,
    resolver: zodResolver(profileSchema)
  });

  useEffect(() => {
    reset({
      first_name: initData?.first_name,
      middle_name: initData?.middle_name,
      last_name: initData?.last_name,
      email: initData?.email,
      address: initData?.userProfile?.address,
      phoneNumber: initData?.userProfile?.phoneNumber,
      dateOfBirth: initData?.userProfile?.dateOfBirth
        ? moment(initData?.userProfile?.dateOfBirth).format("YYYY-MM-DD")
        : ""
    });
  }, [initData]);

  const saveProfile = async (data: any) => {
    try {
      await saveUserProfile({
        ...data,
        profilePicture: data.profilePicture ? data.profilePicture[0] : null,
        document: data.document ? data.document[0] : null,
        educationQualification: data.educationQualification?.value
      });
    } catch (e) {
      console.error(e);
    }
    setFlag.off();
  };
  return (
    <HStack
      width={"100% !important"}
      as={"form"}
      onSubmit={handleSubmit(saveProfile)}
      justify={"space-between"}
      gap={"40px"}
    >
      <Stack w={"100%"} gap={5}>
        <SimpleGrid
          borderRadius={"12px"}
          p={"20px"}
          bg={"rgba(240, 240, 240, 0.40)"}
          gap={5}
          columns={2}
        >
          <GridItem colSpan={2}>
            <Text>Profile Picture: </Text>
            <DropzoneComponentControlled
              name="profilePicture"
              control={control}
              options={{
                maxSize: 3,
                accept: { image: [".png", ".jpg"] }
              }}
              imagePreview={
                initData?.userProfile?.profilePicture
                  ? `${baseImageURL}/${initData?.userProfile?.profilePicture}`
                  : ""
              }
            />
          </GridItem>

          <TextInput
            label="First Name"
            name="first_name"
            control={control}
            type="text"
          />
          <TextInput
            label="Middle Name"
            name="middle_name"
            control={control}
            type="text"
          />
          <TextInput
            label="Last Name"
            name="last_name"
            control={control}
            type="text"
          />
          <TextInput
            label="Email"
            name="email"
            control={control}
            type="email"
            isDisabled
          />

          <TextInput
            label="Address"
            name="address"
            control={control}
            type="text"
          />
          <TextInput
            label="Phone Number"
            name="phoneNumber"
            control={control}
            type="number"
          />
          <TextInput
            label="DOB"
            name="dateOfBirth"
            control={control}
            type="date"
            max={moment().format("YYYY-MM-DD")}
          />
        </SimpleGrid>
        <Stack alignItems={"flex-end"}>
          <Button type="submit">Save</Button>
        </Stack>
      </Stack>
    </HStack>
  );
};

export default EditProfile;
