import { Center, Box, Text, Button } from "@chakra-ui/react";
import { GeometricShape } from "./GeometricShape";
import { shapes } from "../utils/geoShapes";
import "./Home.css";

export const Home = () => {
  return (
    <Center bg="black" height="85vh" position="relative" overflow="hidden">
      {/* Render each shape from the array */}
      {shapes.map((shape, index) => (
        <GeometricShape key={index} {...shape} />
      ))}

      {/* Main Content */}
      <Box textAlign="center" zIndex={1}>
        <Text fontSize="4xl" color="white">
          Nestor Cervantes
        </Text>
        <Text
          fontSize="5xl"
          fontWeight="bold"
          className="animated-gradient-text"
        >
          Full-Stack Web Developer
        </Text>
        <Button variant="actionButton" mt={7} >
          Learn More
        </Button>
      </Box>
    </Center>
  );
};
