import { Box, Flex } from "@chakra-ui/react";

export const TwoColumnLayout = ({ leftContent, rightContent, ...props }) => {
  return (
    <Box position="relative" zIndex={1} {...props} mb={4}>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
        alignItems="center"
        justify="space-between"
        gap={{ base: 6, md: 5 }} // Add spacing between items when stacked
      >
        {/* Left Column */}
        <Box
          display="flex"
          alignItems="flex-start"
          alignSelf="stretch"
          flex="1"
          pr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
        >
          {leftContent}
        </Box>

        {/* Right Column */}
        <Box
          display="flex"
          alignItems="flex-start"
          alignSelf="stretch"
          flex="1"
          pl={{ base: 0, md: 4 }}
        >
          {rightContent}
        </Box>
      </Flex>
    </Box>
  );
};
