import { Center, Box, Text, Button } from "@chakra-ui/react";
import { GeometricShape } from "./GeometricShape";
import { shapes } from "../utils/geoShapes";
import "./Home.css";
import { PAGE_PADDING_X } from "../utils/constants";

export const Home = () => {
  return (
    <Center
      px={PAGE_PADDING_X}
      bg="black"
      height="85vh"
      position="relative"
      overflow="hidden"
      id="home"
    >
      {/* Render each shape from the array */}
      {shapes.map((shape, index) => (
        <GeometricShape key={index} {...shape} />
      ))}

      {/* Main Content */}
      <Box textAlign="center" zIndex={1}>
        <Text fontSize={{ base: "2xl", sm: "3xl" }} color="white">
          Nestor Cervantes
        </Text>
        <Text
          fontSize="5xl"
          fontWeight="bold"
          className="animated-gradient-text"
        >
          Full-Stack Web Developer
        </Text>
        <Button
          as="a"
          href="#skills"
          target="_self"
          variant="actionButton"
          mt={7}
        >
          Learn More
        </Button>
      </Box>
    </Center>
  );
};
