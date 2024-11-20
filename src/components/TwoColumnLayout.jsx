import { Box, Flex } from "@chakra-ui/react";

export const TwoColumnLayout = ({ leftContent, rightContent, ...props }) => {
  return (
    <Box position="relative" zIndex={1} p={6} {...props}>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
        alignItems="center"
        justify="space-between"
      >
        {/* Left Column */}
        <Box alignSelf="stretch" flex="1" pr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          {leftContent}
        </Box>

        {/* Right Column */}
        <Box alignSelf="stretch" flex="1" pl={{ base: 0, md: 4 }}>
          {rightContent}
        </Box>
      </Flex>
    </Box>
  );
};
