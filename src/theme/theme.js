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
            baseStyle: {
                bg: "red",
                _hover: {
                    bg: 'red',
                },
            },
            variants: {
                navbarButton: {
                    bg: 'transparent',
                    border: '1px solid transparent',
                    borderRadius: '50px',
                    padding: '23px',
                    color: 'white',
                    _hover: {
                        bg: '#001433',
                        color: '#64afff'
                    },
                },
                actionButton: {
                    border: '1px solid transparent',
                    borderRadius: '50px',
                    padding: '23px',
                    bg: '#001433',
                    color: '#64afff',
                    _hover: {
                        bg: "#01255d",
                        color: "#ffffff"
                    },
                },
            },
        },
    },
});

export default theme;
