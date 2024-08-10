import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Navbar";

function NoAuthWrapper() {
  return (
    <Flex flexDir={"column"} overflow={"hidden"}>
      <NavBar />
      <Suspense
        fallback={
          <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
            <Spinner
              thickness="5px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.500"
              size="xl"
            />
          </Flex>
        }
      >
        <Box mt={"75px"}>
          <Outlet />
        </Box>
      </Suspense>
    </Flex>
  );
}

export default NoAuthWrapper;
