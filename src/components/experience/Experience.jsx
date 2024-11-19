import { Box, Flex, Heading } from "@chakra-ui/react";
import { ExperienceCard, experienceList } from ".";

export const Experience = () => {
  return (
    <Box p={6} bg="gray.900" color="white">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Experience
      </Heading>
      <Flex justifyContent="space-between" flexWrap="wrap" align="stretch">
        {experienceList.map((role, index) => (
          <ExperienceCard
            key={index}
            logo={role.logo}
            title={role.title}
            location={role.location}
            date={role.date}
            details={role.details}
          />
        ))}
      </Flex>
    </Box>
  );
};
