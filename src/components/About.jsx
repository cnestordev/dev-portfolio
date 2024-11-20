import { Box, Flex, Heading, Text, Badge, Image } from "@chakra-ui/react";
import campground from "../assets/camp.png";

export const About = () => {
  return (
    <Box
      position="relative"
      bg="#FFF8E1"
      py={{ base: 10, md: 20 }}
      px={{ base: 5, md: 20 }}
      overflow="hidden"
    >
      {/* Curved Background Effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="inherit"
        zIndex={-1}
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at bottom left, transparent, #FFF8E1 70%)",
          zIndex: "-1",
        }}
      />

      <Flex
        align="center"
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
      >
        {/* Left Side - Text Content */}
        <Box flex="1" pr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Badge
            variant="subtle"
            colorScheme="yellow"
            mb={4}
            p={2}
            rounded="md"
            fontSize="md"
            display="inline-flex"
            alignItems="center"
          >
            ✉️ nestorcdev@gmail.com
          </Badge>
          <Text fontSize="lg" lineHeight="tall">
            I&apos;ve always had a{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              love for technology
            </Text>
            . Ever since I had my first computer, I was always curious to find
            out how it works under the hood. It amazed me that people can create
            something from nothing, and I’ve always had an appreciation for it.
            Being able to be a part of that is what fulfills me. I am a{" "}
            <Text as="span" color="teal.400" fontWeight="bold">
              full-stack web developer
            </Text>
            . I have a passion for creating useful and user-friendly
            applications. Other interests of mine include
            <Text as="span" color="teal.400" fontWeight="bold">
              {" "}
              camping, traveling, and sightseeing
            </Text>
            .
          </Text>
        </Box>

        {/* Right Side - Illustration */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src={campground}
            alt="About Me Illustration"
            maxW="100%"
            borderRadius="md"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};
