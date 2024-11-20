import { Box } from "@chakra-ui/react";

export const GeometricShape = ({
  top,
  left,
  bg,
  width = "86px",
  height = "86px",
  borderRadius = "50%",
  animationDuration = "6s",
  opacity = 0.7,
}) => {
  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      width={width}
      height={height}
      bg={`linear-gradient(135deg, ${bg})`}
      borderRadius={borderRadius}
      display="flex"
      alignItems="center"
      justifyContent="center"
      animation={`float ${animationDuration} ease-in-out infinite`}
      opacity={opacity}
    >
      <Box
        width={`calc(${width} - 6px)`}
        height={`calc(${height} - 6px)`}
        bg="black"
        borderRadius={borderRadius}
      ></Box>
    </Box>
  );
};
