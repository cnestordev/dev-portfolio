import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { SkillSection, frontendSkills, backendSkills, otherSkills } from ".";

export const Skills = () => {
  return (
    <Box p={6}>
      {/* Header */}
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Tech Skills
      </Heading>

      {/* Main container with image and skill sections */}
      <Flex justify="space-between" align="center">
        {/* Left Section - Image */}
        <Box flex="1" display="flex" justifyContent="center" p={4} mr={4}>
          <Image
            src="/public/dev.png" // replace with actual path to your image
            alt="Developer illustration"
            boxSize="100%" // This adjusts the size; modify as needed
          />
        </Box>

        {/* Right Section - Skills */}
        <Box flex="2">
          <Flex justify="space-between">
            {/* Section A - Frontend Skills */}
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

            {/* Section B - Backend Skills */}
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

          {/* Additional Skills */}
          <Box mt={6} p={4} border="1px">
            <SkillSection
              title="Other"
              skills={otherSkills}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
