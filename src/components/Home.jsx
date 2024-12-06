import {
  Box,
  Button,
  Center,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PAGE_PADDING_X, RESUME_URL } from "../utils/constants";
import { shapes } from "../utils/geoShapes";
import { GeometricShape } from "./GeometricShape";
import "./Home.css";

export const Home = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const handleClick = (site) => {
    window.open(site, "_blank");
  };

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
      <Box className="home-container" textAlign="center" zIndex={1}>
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
        <Text mt="2" lineHeight="1.6" px={{ base: "0%", sm: "20%" }} color="white">
          Dedicated developer with extensive experience in React and Node.js.
          Passionate about leveraging and expanding my skills to solve
          real-world problems and bring innovative solutions to life. With a
          strong focus on user experience, I specialize in designing and
          developing efficient, user-friendly web applications that are tailored
          to client needs and built for long-term scalability.
        </Text>
        <Box>
          {isDesktop ? (
            <Button
              as="a"
              href="#skills"
              target="_self"
              variant="actionButton"
              mt={7}
            >
              Learn More
            </Button>
          ) : (
            <Button
              onClick={() => handleClick(RESUME_URL)}
              variant="actionButton"
              mt={7}
            >
              View Resume
            </Button>
          )}
        </Box>
      </Box>
    </Center>
  );
};
