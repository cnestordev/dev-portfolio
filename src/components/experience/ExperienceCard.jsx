import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const ExperienceCard = ({bgColor, logo, title, location, date, details }) => {
  return (
    <Box m={2} height="100%">
      <Card bg={bgColor} p={4} borderRadius="md" color="white" h="100%">
        <CardHeader>
          <Flex align="center" mb={2}>
            <Image src={logo} width="10%" mr={3} alt={`${title} Logo`} />
            <Box>
              <Heading size="md" fontWeight="bold">
                {title}
              </Heading>
              <Text fontSize="sm" color="gray.400">
                {location} - {date}
              </Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          {details.map((detail, index) => (
            <Text fontSize="md" mb={2} key={index}>
              {detail}
            </Text>
          ))}
        </CardBody>
      </Card>
    </Box>
  );
};
