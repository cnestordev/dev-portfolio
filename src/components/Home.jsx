import { Box, Text, Center, Button } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Center bg="red.500" height="70vh">
      <Box textAlign="center">
        <Text fontSize="4xl">
          Nestor Cervantes
        </Text>
        <Text fontSize="5xl" fontWeight="bold">
          Full-Stack Web Developer
        </Text>
        <Button mt={7}>
          Learn More
        </Button>
      </Box>
    </Center>
  );
};
