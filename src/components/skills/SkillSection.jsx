import { Card, CardHeader, CardBody, Heading, Box } from "@chakra-ui/react";
import { SkillList } from ".";

export const SkillSection = ({ title, skills }) => (
  <Box position="relative" h="100%">
    <Card
      bg="white"
      boxShadow="none"
      borderRadius="10px"
      h="100%"
      display="flex"
      flexDirection="column"
      zIndex={1}
    >
      <CardHeader pb={0}>
        <Heading textAlign="left" size="md">{title}</Heading>
      </CardHeader>
      <CardBody flex="1">
        <SkillList skills={skills} />
      </CardBody>
    </Card>
  </Box>
);
