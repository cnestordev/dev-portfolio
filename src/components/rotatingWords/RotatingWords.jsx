import { Box } from "@chakra-ui/react";
import "./RotatingWords.css";

const RotatingWords = () => {
  return (
    <Box className="rotating-text">
      <p>
        <span className="word w-1">collaborate</span>
        <span className="word w-2">organize</span>
        <span className="word w-3">share</span>
        <span className="word w-4">create</span>
        <span className="word w-5">simplify</span>
      </p>
    </Box>
  );
};

export default RotatingWords;
