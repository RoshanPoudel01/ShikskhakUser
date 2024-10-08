/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Collapse,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { colorScheme } from "@shikshak/theme/colorScheme";
import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon?: any;
  href: string;
  code?: string;
  label: string;
  animate: string;
  collapsed?: boolean;
  isNotLink?: boolean;
  accessor: string[];
  childNav?: NavItemProps[];
  isChild?: boolean;
  parentNav?: string;
  labelSideData?: number | null;
  active?: {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
    activeCollapse: string;
    setActiveCollapse: Dispatch<SetStateAction<string>>;
  };
}

const notActiveLink = {
  background: colorScheme.white,
  "& p": {
    color: "gray.500"
  },
  "& div": {
    "& > svg > path": {
      fillOpacity: "gray.500"
    },
    "& > div > svg > path": {
      stroke: "none"
    }
  },
  "& > div:first-of-type": {
    visibility: "hidden"
  },
  "&:hover": {
    background: colorScheme.gray_700,
    color: colorScheme.white,
    "& p": {
      color: colorScheme.white
    },
    "svg > *": {
      filter: "brightness(10)"
    },
    "& > div:first-of-type": {
      visibility: "visible"
    }
  }
};

export default function NavItem({
  icon,
  href,
  label,
  labelSideData,
  animate,
  collapsed,
  isNotLink,
  childNav,
  parentNav,
  isChild,
  active
}: NavItemProps) {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const Link = chakra(NavLink);

  useEffect(() => {
    if (label != active?.activeCollapse && active?.activeCollapse != "") {
      onClose();
    } else if (isNotLink && label == active?.activeCollapse) onOpen();
  }, [active?.activeCollapse]);

  const handleNavLinkClick = (e: React.MouseEvent) => {
    if (isNotLink) {
      e.preventDefault();
      onToggle();
    } else {
      if (isChild) {
        active?.setActiveCollapse(parentNav ?? "");
      } else {
        active?.setActiveCollapse("");
      }
      active?.setActiveLink(label);
    }
  };

  const isLinkActive =
    isNotLink &&
    ((isOpen && active?.activeCollapse !== label) ||
      (!isOpen && active?.activeCollapse !== label));

  return (
    <Fragment>
      <Link
        as={NavLink}
        end={!isNotLink}
        to={isNotLink ? "#" : href}
        onClick={handleNavLinkClick}
        __css={
          active?.activeLink == label &&
          (window.location.pathname == "/"
            ? false
            : window.location.href.includes(href))
            ? {
                background: colorScheme.gray_700,
                "& p": {
                  color: colorScheme.white
                },
                "svg > *": {
                  filter: "brightness(10)"
                },
                "& > div:first-of-type": {
                  visibility: "visible",
                  background: colorScheme.gray_700,
                  width: 2
                }
              }
            : {
                "&:hover": {
                  background: colorScheme.gray_700,
                  color: colorScheme.white,
                  "& p": {
                    color: colorScheme.white
                  },
                  "svg > *": {
                    filter: "brightness(10)"
                  }
                }
              }
        }
        _activeLink={
          isLinkActive
            ? notActiveLink
            : {
                background: isChild
                  ? colorScheme.gray_700
                  : colorScheme.gray_800,

                "& p": {
                  color: colorScheme.white
                },
                "svg > *": {
                  filter: "brightness(10)"
                },
                "& > div:first-of-type": {
                  visibility: "visible",
                  width: 1,
                  background: colorScheme.gray_600
                }
              }
        }
        pos="relative"
        px={5}
        py={4}
        w="100%"
        _hover={{
          textDecoration: "none"
        }}
      >
        <Box
          visibility="hidden"
          pos="absolute"
          h="100%"
          w={1}
          top={0}
          right={0}
          bg={colorScheme.gray_600}
          borderTopLeftRadius={10}
          borderBottomLeftRadius={10}
        />

        <HStack justifyContent="space-between">
          <HStack alignItems="center" flex={1}>
            {icon && <Icon as={icon} fontSize="xl" mb={1} />}
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
            >
              <Text
                color={colorScheme.gray_500}
                fontSize="md"
                fontWeight="medium"
                whiteSpace="nowrap"
                visibility={collapsed ? "hidden" : "visible"}
                transition={animate}
              >
                {label}
              </Text>
              {labelSideData && (
                <Box
                  sx={{
                    w: "30px",
                    h: "25px",
                    textAlign: "center",
                    background: colorScheme.yellow_400,
                    color: colorScheme.primary,
                    fontWeight: "bold",
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {labelSideData}
                </Box>
              )}
            </HStack>
          </HStack>
          {isNotLink && (
            <Icon
              as={ArrowRightIcon}
              color="gray.500"
              transform={isOpen ? "rotate(90deg)" : ""}
            />
          )}
        </HStack>
      </Link>
      <Collapse
        animate
        in={isOpen && !collapsed}
        style={{
          width: "inherit",
          overflow: "visible",
          // boxShadow: `inset 5px 2px 15px ${colorScheme.gray_600}`,
          margin: "0px",
          padding: "10px 0px"
        }}
      >
        <VStack w="95%" m="auto">
          {childNav?.map((child, index) => (
            <NavItem
              {...child}
              key={`child-nav${index}`}
              isChild
              active={active}
              parentNav={label}
            />
          ))}
        </VStack>
      </Collapse>
    </Fragment>
  );
}
