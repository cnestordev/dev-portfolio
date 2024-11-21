import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import taskboard from "../../assets/task-taskboard.png";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../../utils/constants";
import { techIcons } from "../../utils/techIcons";
import { SvgImgage } from "../SvgImage";
import { TwoColumnLayout } from "../TwoColumnLayout";
import { ProjectDescription } from "./ProjectDescription";

export const Project = () => {
  const leftContent = (
    <Box>
      <Box mb={8}>
        <Heading as="h3" size="lg" mb={3}>
          Task Manager
        </Heading>
        <Text fontSize="md" mb={6}>
          Task Manager is a collaborative web application designed for managing
          daily tasks with team members in real time. Built with the MERN stack
          (MongoDB, Express, React, Node.js), it enables users to create,
          prioritize, and share tasks with other users within defined teams. The
          app leverages real-time updates, user role management, and secure
          team-specific task sharing, making it versatile for both personal and
          team use.
        </Text>
      </Box>
      <ProjectDescription mb={8} />
    </Box>
  );

  const rightContent = (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        width="100%"
        maxW="850px"
        border="4px solid gray"
        mb={10}
      >
        <Flex bg="gray.100" py={2} px={4} align="center">
          <Box bg="red.400" borderRadius="full" boxSize="10px" mr={2}></Box>
          <Box bg="yellow.400" borderRadius="full" boxSize="10px" mr={2}></Box>
          <Box bg="green.400" borderRadius="full" boxSize="10px"></Box>
        </Flex>
        <Image src={taskboard} alt="Task Manager Screenshot" />
      </Box>
      {/* Icon Group */}
      <Flex flexWrap="wrap" justifyContent="center" gap={6} mb={7}>
        {techIcons.map(({ icon: Icon, color, label }, index) => (
          <Flex key={index} direction="column" align="center">
            <Icon color={color} size={30} />
            <Text color="d5d5d5" fontSize="sm" mt={2}>
              {label}
            </Text>
          </Flex>
        ))}
      </Flex>
      {/* Action Buttons */}
      <Flex gap={4}>
        <Button
          variant="actionButton"
          bg="lightgray"
          _hover={{ background: "#9caab9", color: "black" }}
          color="black"
          as={Link}
          href="https://task-mgr.tech"
          target="_blank"
          mr={2}
        >
          Visit Website
        </Button>
        <Button
          variant="actionButton"
          bg="lightgray"
          _hover={{ background: "#9caab9", color: "black" }}
          color="black"
          as={Link}
          href="https://github.com/cnestordev/task-manager"
          target="_blank"
        >
          <Flex gap={2} alignItems="center">
            <FaGithub />
            GitHub
          </Flex>
        </Button>
      </Flex>
    </Box>
  );

  return (
    <Box
      py={PAGE_PADDING_Y}
      px={PAGE_PADDING_X}
      position="relative"
      bg="#f5f5f5"
      id="projects"
    >
      <Heading
        position="relative"
        zIndex={3}
        as="h2"
        size="xl"
        textAlign="center"
        mb={{ base: 10, md: 10 }}
      >
        Projects
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack on mobile, side-by-side on larger screens
        justifyContent="space-between"
        align={{ base: "center", md: "flex-start" }}
        gap={8}
        pb={55}
      >
        <TwoColumnLayout
          leftContent={leftContent}
          rightContent={rightContent}
        />
      </Flex>
      <SvgImgage />
    </Box>
  );
};
