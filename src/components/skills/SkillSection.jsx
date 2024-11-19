import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { SkillList } from ".";

export const SkillSection = ({ title, skills }) => (
  <Card h="100%" display="flex" flexDirection="column">
    <CardHeader>
      <Heading size="md">{title}</Heading>
    </CardHeader>
    <CardBody flex="1">
      <SkillList skills={skills} />
    </CardBody>
  </Card>
);
