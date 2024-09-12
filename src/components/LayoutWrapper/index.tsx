import { Box, Flex, Image } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { imageAssets } from "@shikshak/assets/images";
import Navbar from "@shikshak/pages/NoAuth/Home/Navbar";
import ErrorBoundary from "../ErrorBoundry";

const sidebarAnimate = "all .25s ease";
// const largeSidebarWidth = 290;
// const smallSidebarWidth = 64;

const LayoutWrapper: React.FC = () => {
  // const { width } = useWindowSize();

  // const [open, setOpen] = useState(true);
  // const [isHovered, setIsHovered] = useState(false);

  // const sidebarWidth = useMemo(
  //   () => (open ? largeSidebarWidth : smallSidebarWidth),
  //   [open]
  // );

  // const handleDrawerToggle = () => {
  //   setOpen(oldState => !oldState);
  //   setIsHovered(false);
  // };

  // const onEnterSidebar = () => {
  //   if (!open) {
  //     setIsHovered(true);
  //   }
  // };
  // const onExitSidebar = () => {
  //   if (isHovered) {
  //     setIsHovered(false);
  //   }
  // };

  // useEffect(() => {
  //   if (width < 850) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  //   setIsHovered(false);
  // }, [width]);

  return (
    <ErrorBoundary>
      <Flex>
        <Box
          flexGrow={1}
          transition={sidebarAnimate}
          zIndex={0}
          overflowX="hidden"
        >
          {/* <AppBar flex={1} position="sticky" mb={0}>
            <Header
              width={open ? largeSidebarWidth : sidebarWidth}
              handleDrawerToggle={handleDrawerToggle}
              isDrawerOpen={open}
            />
          </AppBar> */}
          <Suspense
            fallback={
              <Flex
                justifyContent={"center"}
                alignItems="center"
                height={"90vh"}
              >
                <Image maxHeight={"50vh"} src={imageAssets.Loader} />
              </Flex>
            }
          >
            <Box px={6} bg="gray.50">
              <Navbar />
              <Outlet />
            </Box>
          </Suspense>
        </Box>
      </Flex>
    </ErrorBoundary>
  );
};

export default LayoutWrapper;
