import { Box, Flex, Heading } from "@chakra-ui/react";
import { SkillSection, backendSkills, frontendSkills, otherSkills } from ".";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../../utils/constants";
import { ColumnLayout } from "../ColumnLayout";

export const Skills = () => {
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
        <Box flex="1" mb={{ base: 4, md: 0 }}>
          <SkillSection title="Other" skills={otherSkills} />
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box id="skills" py={PAGE_PADDING_Y} px={PAGE_PADDING_X} bg="#f5f5f5">
      <Heading as="h2" size="xl" textAlign="center" mb={{ base: 10, md: 10 }}>
        Tech Skills
      </Heading>
      <ColumnLayout rightContent={rightContent} />
    </Box>
  );
};
