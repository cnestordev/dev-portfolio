import { Box, Flex, Heading } from "@chakra-ui/react";
import { ExperienceCard, experienceList } from ".";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../../utils/constants";

export const Experience = () => {
  const experienceContent = experienceList.map((role, index) => {
    return (
      <Box key={index} width="100%" height="100%">
        <ExperienceCard bgColor={"#1e1e1e"} {...role} />
      </Box>
    );
  });

  return (
    <Box
      id="experience"
      py={PAGE_PADDING_Y}
      px={PAGE_PADDING_X}
      bg="black"
      color="white"
    >
      <Heading as="h2" size="xl" textAlign="center" mb={{ base: 10, md: 10 }}>
        Experience
      </Heading>
      <Flex alignItems="flex-start" gap={10}>
        <Flex gap={5} flexDirection="column" width="50%">
          {experienceContent[0]}
          {experienceContent[2]}
        </Flex>
        <Flex gap={5} flexDirection="column" width="50%">
          {experienceContent[1]}
        </Flex>
      </Flex>
    </Box>
  );
};
