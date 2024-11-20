import { Box, Heading } from "@chakra-ui/react";
import { ExperienceCard, experienceList } from ".";
import { TwoColumnLayout } from "../TwoColumnLayout";

export const Experience = () => {
  const leftContent = (
    <Box>
      {experienceList
        .slice(0, Math.ceil(experienceList.length / 2))
        .map((role, index) => (
          <ExperienceCard key={index} {...role} />
        ))}
    </Box>
  );

  const rightContent = (
    <Box>
      {experienceList
        .slice(Math.ceil(experienceList.length / 2))
        .map((role, index) => (
          <ExperienceCard key={index} {...role} />
        ))}
    </Box>
  );

  return (
    <Box p={6} bg="gray.900" color="white">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Experience
      </Heading>
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </Box>
  );
};
