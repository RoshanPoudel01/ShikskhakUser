import { theme as ChakraTheme, ComponentStyleConfig } from "@chakra-ui/react";
import { colorScheme } from "../colorScheme";

export const ButtonConfig: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    borderRadius: 8,
    padding: 2,
    lineHeight: 0,
    px: 20,
    "min-width": "fit-content !important"
  },
  variants: {
    default: props => ({
      ...ChakraTheme.components.Button.variants?.solid(props),
      bg: colorScheme.primary_100,
      letterSpacing: "0.4px",
      lineHeight: 0,
      color: "white",
      _hover: {
        bg: colorScheme.primary_400,
        _disabled: {
          bg: colorScheme.primary_500
        }
      },
      _active: {
        bg: colorScheme.primary_500
      }
    }),
    search_icon: () => ({
      letterSpacing: "0.4px",
      lineHeight: 0
    })
  },

  defaultProps: {
    size: "md",
    variant: "default"
  }
};
