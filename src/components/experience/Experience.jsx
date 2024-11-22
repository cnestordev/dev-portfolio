import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { ExperienceCard, experienceList } from ".";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../../utils/constants";

export const Experience = () => {
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const reorderedList = isMobile
    ? [...experienceList].sort((a, b) => a.positionOnMobile - b.positionOnMobile)
    : experienceList;

  const middleIndex = Math.ceil(reorderedList.length / 2);
  const firstColumn = reorderedList.slice(0, middleIndex);
  const secondColumn = reorderedList.slice(middleIndex);

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
      <Flex
        alignItems="flex-start"
        gap={{ base: 5, lg: 10 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        {isMobile ? (
          <Flex flexDirection="column" gap={5} width="100%">
            {reorderedList.map((role, index) => (
              <Box key={index} width="100%" height="100%">
                <ExperienceCard bgColor={"#1e1e1e"} {...role} />
              </Box>
            ))}
          </Flex>
        ) : (
          <>
            <Flex
              gap={5}
              flexDirection="column"
              width={{ base: "100%", md: "50%" }}
            >
              {firstColumn.map((role, index) => (
                <Box key={index} width="100%" height="100%">
                  <ExperienceCard bgColor={"#1e1e1e"} {...role} />
                </Box>
              ))}
            </Flex>
            <Flex
              gap={5}
              flexDirection="column"
              width={{ base: "100%", md: "50%" }}
            >
              {secondColumn.map((role, index) => (
                <Box key={index} width="100%" height="100%">
                  <ExperienceCard bgColor={"#1e1e1e"} {...role} />
                </Box>
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};
