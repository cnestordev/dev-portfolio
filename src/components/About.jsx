import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import campground from "../assets/camp5.svg";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../utils/constants";
import "./About.css";

export const About = () => {
  const showImage = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      className="about-section"
      px={PAGE_PADDING_X}
      py={PAGE_PADDING_Y}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      overflow="hidden"
      id="about"
    >
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        About Me
      </Heading>
      <Box
        bg="#e9ded5"
        borderRadius="10px"
        mb={4}
        p={4}
        fontSize="md"
        display="flex"
        alignItems="center"
        gap={1}
      >
        <MdOutlineEmail />
        <Text>nestorcdev@gmail.com</Text>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        w="100%"
      >
        {/* Left Content */}
        <Box flex="1" pr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" lineHeight="tall">
            I&apos;ve always been driven by a{" "}
            <Text as="span" className="highlight-text">
              deep curiosity for technology
            </Text>
            . From the moment I encountered my first computer, I was captivated
            by the intricate mechanics working under the hood. It inspires me to
            know that{" "}
            <Text as="span" className="highlight-text">
              we can create meaningful solutions from scratch
            </Text>
            , and being part of that creative process is what drives me.
          </Text>
          <Text fontSize="lg" lineHeight="tall" mt={4}>
            As a{" "}
            <Text as="span" className="highlight-text">
              full-stack web developer
            </Text>
            , I’m passionate about crafting applications that are not only
            functional but also{" "}
            <Text as="span" className="highlight-text">
              user-friendly and impactful
            </Text>
            . When I’m not coding, I find joy in{" "}
            <Text as="span" className="highlight-text">
              camping, traveling, and discovering new sights
            </Text>
            , bringing the same curiosity and creativity to every aspect of my
            life.
          </Text>
        </Box>

        {/* Right Content */}
        <Box
          flex="1"
          position="relative"
          zIndex="1"
          display={showImage ? "flex" : "none"}
          justifyContent="center"
        >
          <Image
            src={campground}
            alt="Campground"
            w="100%"
            maxW="800px"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};
