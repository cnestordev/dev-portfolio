import { Box, Text } from "@chakra-ui/react";
import "./RotatingWords.css";
import { h3 } from "framer-motion/client";

const RotatingWords = () => {
  return (
    <Box className="rotating-text">
      <p>
        <Text as={h3} className="word w-1">
          collaborate
        </Text>
        <Text as={h3} className="word w-2">
          organize
        </Text>
        <Text as={h3} className="word w-3">
          share
        </Text>
        <Text as={h3} className="word w-4">
          create
        </Text>
        <Text as={h3} className="word w-5">
          simplify
        </Text>
      </p>
    </Box>
  );
};

export default RotatingWords;
