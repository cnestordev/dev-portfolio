import { Box, Flex, Heading } from "@chakra-ui/react";
import { PAGE_PADDING_X } from "../utils/constants";
import "./About.css";
import { ContactForm } from "./ContactForm";

export const About = () => {
  return (
    <Box
      className="about-section"
      px={PAGE_PADDING_X}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      overflow="hidden"
      id="contact"
      minH="600px"
    >
      <Heading as="h2" size="xl" textAlign="center" mb={{base: -5, lg: 2}}>
        Contact Me
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        w="100%"
        position="relative"
        zIndex={2}
      >
        <Box
          width="100%"
          position="relative"
          flex="1"
        >
          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
};
