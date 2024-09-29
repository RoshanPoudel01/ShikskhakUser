import {
  Button,
  HStack,
  IconButton,
  Stack,
  Text,
  useBoolean
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@shikshak/components/Form/TextInput";
import { useChangePassword } from "@shikshak/services/service-init";
import { colorScheme } from "@shikshak/theme/colorScheme";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { z } from "zod";

const initialValue = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: ""
};
const ChangePassword = () => {
  const [flag, setFlag] = useBoolean();
  const [newFLag, setNewFlag] = useBoolean();
  const [confirmFlag, setConfirmFlag] = useBoolean();
  const passwordPolicy = [
    "Minimum length: Define the minimum (e.g., 8 characters) and maximum length.",
    "Uppercase and lowercase characters: Ensure at least one uppercase and one lowercase letter.",
    "Character types: You can also define if special characters (like!@#$%^&*) and numbers are required."
  ];
  const passwordSchema = z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character"
    );
  const changePasseordSchema = z
    .object({
      currentPassword: z.string().min(1, "Current Password is required"),
      newPassword: passwordSchema,
      confirmPassword: passwordSchema
    })
    .refine(data => data.newPassword === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirm_password"]
    });
  const { mutateAsync, isPending } = useChangePassword();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(changePasseordSchema)
  });

  const handlePasswordChange = async (data: typeof initialValue) => {
    try {
      await mutateAsync({
        oldPassword: data.currentPassword,
        newPassword: data.newPassword
      });
    } catch (e) {
      console.error(e);
    }
    reset();
  };

  return (
    <Stack
      as={"form"}
      gap={"32px"}
      onSubmit={handleSubmit(handlePasswordChange)}
    >
      <HStack gap={"32px"}>
        <Stack
          borderRadius={"4px"}
          bg={colorScheme.purple_50}
          gap={3}
          padding="12px 16px"
          maxW={"437px"}
        >
          <Text>Note:</Text>
          <ul
            style={{
              padding: "0 24px"
            }}
          >
            {passwordPolicy.map((policy, index) => (
              <li
                key={index}
                style={{
                  textAlign: "justify"
                }}
              >
                {policy}
              </li>
            ))}
          </ul>
        </Stack>
        <Stack flex={1} gap={6}>
          <Text>Change Password</Text>
          <TextInput
            control={control}
            name="currentPassword"
            label="Current Password"
            type={flag ? "text" : "password"}
            endIcons={
              <IconButton
                tabIndex={-1}
                colorScheme={"black"}
                size="xs"
                variant="link"
                aria-label="password-control"
                onClick={setFlag.toggle}
                icon={flag ? <BsEyeSlash /> : <BsEye />}
              />
            }
          />
          <HStack gap={6}>
            <TextInput
              control={control}
              name="newPassword"
              label="New Password"
              type={newFLag ? "text" : "password"}
              endIcons={
                <IconButton
                  tabIndex={-1}
                  colorScheme={"black"}
                  size="xs"
                  variant="link"
                  aria-label="password-control"
                  onClick={setNewFlag.toggle}
                  icon={newFLag ? <BsEyeSlash /> : <BsEye />}
                />
              }
            />
            <TextInput
              control={control}
              name="confirmPassword"
              label="Confirm New Password"
              type={confirmFlag ? "text" : "password"}
              endIcons={
                <IconButton
                  tabIndex={-1}
                  colorScheme={"black"}
                  size="xs"
                  variant="link"
                  aria-label="password-control"
                  onClick={setConfirmFlag.toggle}
                  icon={confirmFlag ? <BsEyeSlash /> : <BsEye />}
                />
              }
            />
          </HStack>
        </Stack>
      </HStack>
      <Stack alignItems={"flex-end"}>
        <Button type="submit" size={"lg"} isLoading={isPending}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default ChangePassword;
