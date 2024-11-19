import { extendTheme } from '@chakra-ui/react';

// Customize your theme here
const theme = extendTheme({
    config: {
        initialColorMode: 'light', // Default is light mode
        useSystemColorMode: false,  // Enables system preference for light/dark
    },
    colors: {
        brand: {
            100: "#ff0000",
            900: "#1a2fff",
        },
    },
});

export default theme;
