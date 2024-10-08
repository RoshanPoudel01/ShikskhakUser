import { baseTheme } from "@chakra-ui/theme";
import { colorScheme } from "@shikshak/theme/colorScheme";
import { PropsValue, StylesConfig } from "react-select";
const fontSizes = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem"
};
const paddings = {
  sm: "6px 9px",
  md: "8px 12px",
  lg: "10px 15px"
};
const px = {
  sm: "0.75rem",
  md: "1rem",
  lg: "1rem"
};

export const useCustomStyles = (error?: any) => {
  const customStyles: StylesConfig = {
    // When disabled, react-select sets the pointer-state to none
    // which prevents the `not-allowed` cursor style from chakra
    // from getting applied to the Control
    container: (
      provided,
      { selectProps: { hideContainerBorder, isSingleTimeDropdown } }
    ) => ({
      ...provided,
      pointerEvents: "auto",
      //flex: 1,
      width: isSingleTimeDropdown ? "60px" : "100%",
      backgroundColor: "#F7FAFC",
      borderColor: hideContainerBorder
        ? "white"
        : `${baseTheme.colors.gray["200"]}`,
      height: "100%"
    }),
    input: (provided, { selectProps: { size } }) => ({
      ...provided,
      color: "inherit",
      lineHeight: "inherit",
      fontSize: fontSizes[size ?? "sm"],
      height: "37px"
    }),
    menu: (provided, { selectProps: { isSingleTimeDropdown } }) => ({
      ...provided,
      boxShadow: `0 0 0 1px ${baseTheme.colors.gray["200"]}, 0 1px 1px ${baseTheme.colors.gray["200"]}`,
      width: isSingleTimeDropdown ? "80px" : "100%",
      borderRadius: "6px",
      zIndex: 10
    }),
    option: (provided, { selectProps: { size } }) => ({
      ...provided,
      fontSize: fontSizes[size ?? "sm"]
    }),
    control: (
      provided,
      {
        selectProps: { hasInputAddon, isSingleTimeDropdown, inheritControlBG },
        isDisabled,
        isFocused
      }
    ) => ({
      ...provided,
      borderWidth: "2px",
      borderColor: error ? colorScheme.red_500 : "inherit",
      ...(isDisabled && inheritControlBG ? { backgroundColor: "inherit" } : {}),
      "&:hover": {
        borderColor: error ? colorScheme.red_600 : "inherit",
        backgroundColor: isSingleTimeDropdown
          ? `${baseTheme.colors.gray["100"]}`
          : "inherit",
        ...(isDisabled
          ? {
              cursor: "not-allowed",
              backgroundColor: "gray.100"
            }
          : {}),
        placeholder: {
          backgroundColor: "gray.100"
        }
      },
      borderRadius: hasInputAddon ? "0px 6px 6px 0px" : "6px",
      flex: 1,
      boxShadow: isFocused
        ? error
          ? "none"
          : `0 0 0 1px ${colorScheme.purple_600}`
        : "none"
    }),
    dropdownIndicator: (provided, { selectProps: { hideDropdownArrow } }) => {
      if (hideDropdownArrow) {
        return {
          display: "none"
        };
      } else {
        return { ...provided };
      }
    },
    valueContainer: (
      provided,
      {
        selectProps: {
          size,
          formatOptionLabel,
          disableLeftPaddingInValueContainer,
          value,
          isMulti
        }
      }
    ) => {
      let padding = `0.125rem ${px[size ?? "sm"]}`;
      if (
        formatOptionLabel && isMulti
          ? (value as PropsValue<any>)?.length
          : value
      ) {
        padding = `0.125rem ${px[size ?? "sm"]}`;
      }
      if (disableLeftPaddingInValueContainer) {
        padding = `0.41rem 0 0.41rem 0.25rem`;
      }
      return {
        ...provided,
        padding,
        overflow: "visible"
      };
    },
    placeholder: (provided, state) => ({
      ...provided,
      padding: "0px 4px",
      position: "absolute",
      zIndex: 2,
      top: "10px",
      transition: "all 0.2s",
      borderRadius: 5,
      ...(state.isFocused || state.hasValue || state.selectProps.inputValue
        ? {
            background: "white",
            whiteSpace: "nowrap",
            transform: "translateX(-5%)",
            top: "-18px"
          }
        : {})
    }),

    multiValueRemove: (
      provided,
      { selectProps: { disableMultiValueRemove }, isDisabled }
    ) => ({
      ...provided,
      ...(isDisabled || disableMultiValueRemove
        ? {
            visibility: "hidden",
            width: "4px"
          }
        : {})
    }),
    multiValue: (
      provided,
      {
        selectProps: { hasInputAddon, hideSelectedValues, inheritMultiValueBG }
      }
    ) =>
      hasInputAddon
        ? {
            ...provided,
            borderRadius: "6px",
            backgroundColor: inheritMultiValueBG ? "inherit" : "#F1F3F6",
            padding: "4px 8px"
          }
        : hideSelectedValues
          ? { ...provided, display: "none" }
          : { ...provided },
    indicatorSeparator: () => ({
      display: "none"
    }),
    indicatorsContainer: provided => ({
      ...provided,
      color: baseTheme.colors.gray["200"],
      "&:hover": {
        color: baseTheme.colors.gray["200"]
      }
    }),
    loadingMessage: (provided, { selectProps: { size } }) => {
      return {
        ...provided,
        fontSize: fontSizes[size ?? "sm"],
        padding: paddings[size ?? "sm"]
      };
    }
  };
  return customStyles;
};
