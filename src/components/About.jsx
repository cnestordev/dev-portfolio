import { Box, Flex, Heading } from "@chakra-ui/react";
import campground from "../assets/backdrop.svg";
import campgroundMobileAlt from "../assets/backdrop_mobile.svg";
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
      id="about"
      backgroundImage={{
        base: `url(${campgroundMobileAlt})`,
        lg: `url(${campground})`,
      }}
      backgroundSize={{ base: "cover", lg: "contain" }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
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
          pr={{ md: 8 }}
          mb={{ base: 8, md: 0 }}
        >
          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
};
