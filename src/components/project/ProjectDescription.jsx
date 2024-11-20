import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { projectFeatures } from "./index";

export const ProjectDescription = ({ mb }) => {
  return (
    <Accordion mb={mb} allowToggle>
      {projectFeatures.map((feature, index) => (
        <AccordionItem py={2} key={index} border="none">
          <h2>
            <AccordionButton
              _hover={{
                border: 'none',
                color: "black.500",
              }}

              p={2}
            >
              <Box fontWeight="500" as="span" flex="1" textAlign="left">
                {feature.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{feature.description}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
