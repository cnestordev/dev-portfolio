import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const ExperienceCard = ({
  logo,
  company,
  title,
  location,
  date,
  details,
  toggle
}) => {
  const [isExpanded, setIsExpanded] = useState(toggle);

  // Function to toggle the expanded state
  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Accordion allowToggle index={isExpanded ? [0] : []} width="100%">
      <AccordionItem
        padding="10px"
        border="none"
        backgroundColor="#1e1e1e"
        borderRadius="10px"
        width="100%"
      >
        <h2>
          <AccordionButton
            _expanded={{ color: "white" }}
            width="100%"
            onClick={toggleAccordion}
          >
            <Flex align="center" flex="1" textAlign="left">
              <Image src={logo} width="3.5rem" mr={3} alt={`${title} Logo`} />
              <Box>
                <Heading size="sm" fontWeight="normal">
                  {company}
                </Heading>
                <Heading size="md" fontWeight="500">
                  {title}
                </Heading>
                <Text fontSize="sm">
                  {location} - {date}
                </Text>
              </Box>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {details.map((detail, index) => (
            <Text fontSize="md" mb={2} key={index}>
              {detail}
            </Text>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
