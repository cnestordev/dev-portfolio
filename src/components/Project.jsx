import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import { TwoColumnLayout } from "./TwoColumnLayout";
import taskboard from "../assets/task-taskboard.png";

export const Project = () => {
  const leftContent = (
    <Box>
      <Heading as="h3" size="lg" mb={2}>
        Task Manager
      </Heading>
      <Text color="gray.500" mb={4}>
        A Web App for managing every day tasks with people you know
      </Text>
      <Text fontSize="md" mb={6}>
        A full-stack web application built with React, Node, Express, and
        MongoDB. Users can create and share tasks with team members, update them
        in real time.
      </Text>
      <Flex mb={4}>
        {/* Icon placeholders */}
        <Image alt="JavaScript" boxSize="40px" mr={4} />
      </Flex>
      <Flex>
        <Button as={Link} href="https://example.com" target="_blank" mr={2}>
          Visit Website
        </Button>
        <Button as={Link} href="https://github.com/example" target="_blank">
          GitHub
        </Button>
      </Flex>
    </Box>
  );

  const rightContent = (
    <Box display="flex" justifyContent="center">
      <Box
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        width="100%"
        maxW="850px"
        border="4px solid gray"
      >
        <Flex bg="gray.100" py={2} px={4} align="center">
          <Box bg="red.400" borderRadius="full" boxSize="10px" mr={2}></Box>
          <Box bg="yellow.400" borderRadius="full" boxSize="10px" mr={2}></Box>
          <Box bg="green.400" borderRadius="full" boxSize="10px"></Box>
        </Flex>
        <Image src={taskboard} alt="Task Manager Screenshot" />
      </Box>
    </Box>
  );

  return (
    <Box p={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Projects
      </Heading>
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </Box>
  );
};
