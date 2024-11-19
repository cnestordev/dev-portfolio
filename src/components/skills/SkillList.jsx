import { UnorderedList } from "@chakra-ui/react";
import { SkillItem } from ".";

export const SkillList = ({ skills }) => (
  <UnorderedList listStyleType="none" ml={0}>
    {skills.map((skill, index) => (
      <SkillItem key={index} skill={skill} />
    ))}
  </UnorderedList>
);
