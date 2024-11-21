import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        navbarBg: '#000000',
    },
    components: {
        Navbar: {
            baseStyle: {
                bg: 'navbarBg',
                color: 'white',
                px: 4,
            },
        },
        Button: {
            variants: {
                navbarButton: {
                    bg: 'transparent',
                    border: '1px solid transparent',
                    borderRadius: '50px',
                    padding: '23px',
                    color: 'white',
                    _hover: {
                        bg: '#072714',
                        color: '#d7ffe7'
                    },
                },
                actionButton: {
                    border: '1px solid transparent',
                    borderRadius: '50px',
                    padding: '23px',
                    bg: '#072714',
                    color: '#d7ffe7',
                    _hover: {
                        bg: "#01230f",
                        color: "#ffffff"
                    },
                },
            },
        },
    },
});

export default theme;
