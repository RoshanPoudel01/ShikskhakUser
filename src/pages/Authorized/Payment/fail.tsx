import { Button, Center, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Fail = () => {
  const navigate = useNavigate();
  return (
    <Center display={"flex"} flexDir={"column"} gap={5}>
      <Heading>OOps Payment Failed!!!!!!!!! </Heading>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Go Back
      </Button>
    </Center>
  );
};

export default Fail;
