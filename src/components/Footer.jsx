import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { BiFile } from "react-icons/bi";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { PAGE_PADDING_X, RESUME_URL } from "../utils/constants";

export const Footer = () => {
  const handleClick = (site) => {
    window.open(site, "_blank");
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box px={PAGE_PADDING_X} bg="#121212" py="6" as="footer">
      <Flex
        direction={isMobile ? "column" : "row"}
        justify={isMobile ? "center" : "space-evenly"}
        align="center"
        wrap="wrap"
      >
        {/* Resume */}
        <Flex
          align="center"
          color="white"
          mx="4"
          my={isMobile ? "2" : "0"}
          cursor="pointer"
          onClick={() => handleClick(RESUME_URL)}
        >
          <Icon as={BiFile} fontSize="1.2rem" mr="2" />
          <Text>
            <GradientText>resume</GradientText>
          </Text>
        </Flex>

        {/* GitHub */}
        <Flex
          align="center"
          color="white"
          mx="4"
          my={isMobile ? "2" : "0"}
          cursor="pointer"
          onClick={() => handleClick("https://github.com/cnestordev")}
        >
          <Icon as={FaGithub} fontSize="1.2rem" mr="2" />
          <Text>
            <GradientText>/</GradientText>cnestordev
          </Text>
        </Flex>


        {/* Email */}
        <Flex
          align="center"
          color="white"
          mx="4"
          my={isMobile ? "2" : "0"}
          cursor="pointer"
          onClick={() => handleClick("mailto:nestorcdev@gmail.com")}
        >
          <Icon as={FaEnvelope} fontSize="1.2rem" mr="2" />
          <Text>
            <GradientText weight="normal">nestorcdev</GradientText>
            @gmail.com
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const GradientText = ({ children, weight = "bold" }) => {
  return (
    <Text
      as="span"
      bgGradient="linear(to-r, #0fff9b, #137cff)"
      bgClip="text"
      fontWeight={weight === "normal" ? "500" : "bold"}
    >
      {children}
    </Text>
  );
};
