import { Box, Heading } from "@chakra-ui/react";
import { ExperienceCard, experienceList } from ".";
import { TwoColumnLayout } from "../TwoColumnLayout";

export const Experience = () => {
  const leftContent = (
    <Box height="100%">
      {experienceList
        .slice(0, Math.ceil(experienceList.length / 2))
        .map((role, index) => (
          <ExperienceCard bgColor={"#1e1e1e"} key={index} {...role} />
        ))}
    </Box>
  );

  const rightContent = (
    <Box height="100%">
      {experienceList
        .slice(Math.ceil(experienceList.length / 2))
        .map((role, index) => (
          <ExperienceCard bgColor={"#1e1e1e"} key={index} {...role} />
        ))}
    </Box>
  );

  return (
    <Box py="70px" bg="black" color="white">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Experience
      </Heading>
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </Box>
  );
};
