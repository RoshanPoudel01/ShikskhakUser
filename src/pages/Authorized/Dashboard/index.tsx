import { Container, Flex, Heading } from "@chakra-ui/react";
function Dashboard() {
  // const navigate = useNavigate();

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Container p={8} bg="white" rounded="md" shadow="md">
        <Heading mb={4}>Dashboard</Heading>
      </Container>
    </Flex>
  );
}

export default Dashboard;
