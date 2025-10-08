import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { SkillSection, backendSkills, frontendSkills, otherSkills } from ".";
import { PAGE_PADDING_X, PAGE_PADDING_Y } from "../../utils/constants";
import { ColumnLayout } from "../ColumnLayout";

export const Skills = () => {
  const rightContent = (
    <Box width="100%">
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {/* Mobile: 50% | Desktop: 33% */}
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box textAlign="center" borderRadius="md">
            <SkillSection title="Frontend" skills={frontendSkills} />
          </Box>
        </GridItem>

        {/* Mobile: 50% | Desktop: 33% */}
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box textAlign="center" borderRadius="md">
            <SkillSection title="Backend" skills={backendSkills} />
          </Box>
        </GridItem>

        {/* Mobile: 100% (spans both cols) | Desktop: 33% */}
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Box textAlign="center" borderRadius="md">
            <SkillSection title="Other" skills={otherSkills} />
          </Box>
        </GridItem>
      </Grid>
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
