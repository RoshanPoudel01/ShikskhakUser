import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Textarea,
  TextareaProps
} from "@chakra-ui/react";
import { colorScheme } from "@shikshak/theme/colorScheme";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface TextInputProps {
  name: string;
  control: Control<any>;
  type: string;
  label?: string;
  helperText?: string;
  isRequired?: boolean;
  startIcon?: React.ReactNode;
  endIcons?: React.ReactNode;
  disabled?: boolean;
  onIconClick?: () => void;
  variant?: string;
  noFloating?: boolean;
  colorInput?: boolean;
}
const TextInput: React.FC<TextInputProps & InputProps & TextareaProps> = ({
  name,
  control,
  label,
  type,
  helperText,
  isRequired,
  startIcon,
  disabled,
  endIcons,
  onIconClick,
  variant,
  noFloating,
  colorInput,
  ...extraProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const color = e.target.value;
          onChange(color); // Update the field value with the selected color
        };

        return (
          <>
            <FormControl
              variant={noFloating ? "default" : "floating"}
              id={name}
              isRequired={!!isRequired}
              isInvalid={!!error}
            >
              <InputGroup height={type !== "textarea" ? "46px" : "auto"}>
                {colorInput ? (
                  <InputRightElement top="6%" right="2%">
                    <Input
                      type={"color"}
                      p={0}
                      border={"none"}
                      onChange={handleColorChange}
                      value={value ?? ""}
                      errorBorderColor={colorScheme.red_500}
                      disabled={disabled}
                      sx={{
                        "&::-webkit-color-swatch-wrapper": {
                          padding: 0
                        },
                        "&::-webkit-color-swatch": {
                          borderRadius: "50%",
                          border: "1px solid rgba(0,0,0,0.2)"
                        }
                      }}
                      {...extraProps}
                    />
                  </InputRightElement>
                ) : startIcon ? (
                  <InputLeftElement
                    top="12%"
                    pointerEvents="none"
                    onClick={onIconClick}
                  >
                    {startIcon}
                  </InputLeftElement>
                ) : null}
                {type == "textarea" ? (
                  <Textarea
                    paddingLeft={startIcon ? 9 : ""}
                    placeholder=" "
                    height={"inherit"}
                    onChange={onChange}
                    value={value ?? ""}
                    isInvalid={!!error}
                    errorBorderColor={colorScheme.red_500}
                    boxShadow="inset 0px 1px 1px rgba(0, 0, 0, 0.12)"
                    disabled={disabled}
                    variant={variant}
                    {...extraProps}
                  />
                ) : (
                  <Input
                    paddingLeft={startIcon ? 9 : ""}
                    paddingBottom={startIcon ? "" : 0}
                    placeholder={""}
                    type={type}
                    height={"inherit"}
                    onChange={onChange}
                    onWheel={e => {
                      const target = e.target as HTMLInputElement;
                      type == "number" && target.blur();
                    }}
                    step={type == "number" ? "any" : ""}
                    value={value ?? ""}
                    isInvalid={!!error}
                    errorBorderColor={colorScheme.red_500}
                    disabled={disabled}
                    variant={variant}
                    boxShadow="none !important"
                    css={{
                      "&::-webkit-calendar-picker-indicator": {
                        color: "rgba(0, 0, 0, 0)",
                        opacity: 1,
                        display: "block",
                        width: "20px",
                        height: "20px",
                        borderWidth: "thin",
                        borderStyle: "solid"
                      }
                    }}
                    {...extraProps}
                  />
                )}

                {!noFloating && <FormLabel>{label}</FormLabel>}
                {endIcons ? (
                  <InputRightElement onClick={onIconClick} top="8%">
                    {endIcons}
                  </InputRightElement>
                ) : (
                  ""
                )}
              </InputGroup>

              <FormErrorMessage>{error ? error?.message : ""}</FormErrorMessage>
              {helperText ? (
                <FormHelperText color={colorScheme.gray_400} mt={0} ml={2}>
                  {helperText}
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </>
        );
      }}
    />
  );
};
export default TextInput;
