import { Box, Flex } from "@chakra-ui/react";

export const TwoColumnLayout = ({ leftContent, rightContent, ...props }) => {
  return (
    <Box p={6} {...props}>
      <Flex align="flex-start" justify="space-between">
        {/* Left Column */}
        <Box flex="1" pr={4}>
          {leftContent}
        </Box>

        {/* Right Column */}
        <Box flex="1" pl={4}>
          {rightContent}
        </Box>
      </Flex>
    </Box>
  );
};
