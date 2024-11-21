import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { TwoColumnLayout } from "../TwoColumnLayout";
import { SkillSection, frontendSkills, backendSkills, otherSkills } from ".";
import codeImage from "../../assets/codealt.png";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../../utils/constants";

export const Skills = () => {
  const leftContent = (
    <Box
      display={{ base: "none", md: "flex" }} // Hide on mobile, show on larger screens
      justifyContent="center"
      alignItems="center"
    >
      <Image src={codeImage} alt="Developer illustration" boxSize="65%" />
    </Box>
  );

  const rightContent = (
    <Box width="100%">
      <Flex
        justify="space-between"
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
        gap={5}
      >
        <Box
          flex="1"
          textAlign="center"
          mb={{ base: 4, md: 0 }} // Add spacing on mobile
          borderRadius="md"
        >
          <SkillSection title="Frontend" skills={frontendSkills} />
        </Box>
        <Box
          flex="1"
          textAlign="center"
          mb={{ base: 4, md: 0 }} // Add spacing on mobile
          borderRadius="md"
        >
          <SkillSection title="Backend" skills={backendSkills} />
        </Box>
      </Flex>
      <Box mt={{ base: 4, md: 6 }}>
        <SkillSection title="Other" skills={otherSkills} />
      </Box>
    </Box>
  );

  return (
    <Box id="skills" py={PAGE_PADDING_Y} px={PAGE_PADDING_X} bg="#f5f5f5">
      <Heading as="h2" size="xl" textAlign="center" mb={{ base: 1, md: 8 }}>
        Tech Skills
      </Heading>
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </Box>
  );
};
