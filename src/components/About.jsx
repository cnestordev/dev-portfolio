import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import campground from "../assets/camp2.png";
import { MdOutlineEmail } from "react-icons/md";

export const About = () => {
  return (
    <Box
      position="relative"
      bg="#FFF8E1"
      py={{ base: 10, md: 20 }}
      px={{ base: 5, md: 20 }}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        <Heading textAlign="center" as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Badge
          variant="subtle"
          backgroundColor="#f1e1ad"
          mb={4}
          p={2}
          rounded="md"
          fontSize="md"
          display="inline-flex"
          alignItems="center"
          gap={1}
        >
          <MdOutlineEmail />
          <Text>nestorcdev@gmail.com</Text>
        </Badge>
      </Box>
      <Flex
        align="center"
        mx="auto"
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
        justifyContent="space-between"
      >
        {/* Left Side - Text Content */}
        <Box flexBasis="45%" flex="1" pr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" lineHeight="tall">
            I&apos;ve always been driven by a{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              deep curiosity for technology
            </Text>
            . From the moment I encountered my first computer, I was captivated
            by the intricate mechanics working under the hood. It inspires me to
            know that{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              we can create meaningful solutions from scratch
            </Text>
            , and being part of that creative process is what drives me. As a{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              full-stack web developer
            </Text>
            , I’m passionate about crafting applications that are not only
            functional but also{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              user-friendly and impactful
            </Text>
            . When I’m not coding, I find joy in{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              camping, traveling, and discovering new sights
            </Text>
            , bringing the same curiosity and creativity to every aspect of my
            life.
          </Text>
        </Box>

        {/* Right Side - Illustration */}
        <Box
          flexBasis="45%"
          maxHeight="45vh"
          height="45vh"
          bgImage={`url(${campground})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          display={{ base: "none", md: "block" }} // Hide on mobile, show on larger screens
        />
      </Flex>
    </Box>
  );
};
