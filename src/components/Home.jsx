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
