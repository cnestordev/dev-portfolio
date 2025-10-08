import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SkillList } from ".";
import "./SkillSection.css";

export const SkillSection = ({ title, skills }) => {
  const isMobileLayout = useBreakpointValue({ base: true, md: false });
  const boxClass = isMobileLayout ? "mobile-skill-box" : "";
  console.log(isMobileLayout);
  return (
    <Box position="relative" h="100%">
      <Card
        bg="white"
        boxShadow="none"
        borderRadius="10px"
        h="100%"
        display="flex"
        flexDirection="column"
        zIndex={1}
        color="inherit"
        className={boxClass}
      >
        <CardHeader pb={0}>
          <Heading textAlign="left" size="md">
            {title}
          </Heading>
        </CardHeader>
        <CardBody flex="1">
          <SkillList skills={skills} />
        </CardBody>
      </Card>
    </Box>
  );
};
