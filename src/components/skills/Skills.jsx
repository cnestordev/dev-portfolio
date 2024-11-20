import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { TwoColumnLayout } from "../TwoColumnLayout";
import { SkillSection, frontendSkills, backendSkills, otherSkills } from ".";
import codeImage from "../../assets//code.svg";

export const Skills = () => {
  const leftContent = (
    <Box display="flex" justifyContent="center" p={4}>
      <Image src={codeImage} alt="Developer illustration" boxSize="100%" />
    </Box>
  );

  const rightContent = (
    <Box>
      <Flex justify="space-between">
        <Box
          flex="1"
          textAlign="center"
          mr={4}
          p={4}
          border="1px"
          borderRadius="md"
        >
          <SkillSection title="Frontend" skills={frontendSkills} />
        </Box>
        <Box
          flex="1"
          textAlign="center"
          ml={4}
          p={4}
          border="1px"
          borderRadius="md"
        >
          <SkillSection title="Backend" skills={backendSkills} />
        </Box>
      </Flex>
      <Box mt={6} p={4} border="1px">
        <SkillSection title="Other" skills={otherSkills} />
      </Box>
    </Box>
  );

  return (
    <Box p={6}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Tech Skills
      </Heading>
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </Box>
  );
};
