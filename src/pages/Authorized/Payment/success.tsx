import { Button, Center, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <Center display={"flex"} flexDir={"column"} gap={5}>
      <Heading>Payment Successful Yay!!!</Heading>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Go Back
      </Button>
    </Center>
  );
};

export default Success;
