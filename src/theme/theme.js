import { chakra, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        navbarBg: '#000000',
        chakra: {
            bodyText: {
                color: 'green'
            }
        }
    },
    fonts: {
        body: '"Lexend", sans-serif',
        heading: '"Lexend", sans-serif',
        mono: 'Menlo, monospace',
    },
    styles: {
        global: {
            body: {
                color: "#313235"
            }
        }
    },
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "1064px": "66.5em",
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
                        color: '#42c376'
                    },
                },
                actionButton: {
                    border: '1px solid transparent',
                    borderRadius: '50px',
                    padding: '23px',
                    bg: '#13ef89',
                    color: '#02160a',
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
