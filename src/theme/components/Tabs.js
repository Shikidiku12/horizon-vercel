import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

export const Tabs = defineMultiStyleConfig({
    baseStyle: {
        tablist: {
            px: '5',
            fontWeight: 500
        },
        tab: {
            px: '3',
            fontWeight: 500, // change the font weight
        },
        // tabpanel: {
        //     fontFamily: 'mono', // change the font family
        // },
    },
    sizes: {
        md: {
            tab: {
                fontSize: 'md',
                py: '3',
                px: '5',
            },
            tabpanel: {
                py: '3',
                px: '5',
            },
        },
        xl: {
            tab: {
                fontSize: 'xl',
                py: '4',
                px: '6',
            },
            tabpanel: {
                py: '4',
                px: '6',
            },
        },
        "2xl": {
            tab: {
                fontSize: 'md',
                py: '5',
                px: '7',
            },
            tabpanel: {
                py: '5',
                px: '7',
            },
        }

    },
    variants: {
        colorful: {
            tab: {
                height: '41.2px',
                fontWeight: 100,
                fontSize: '16px',
                _selected: {
                    fontWeight: 900,
                    color: '#374A16',
                    boxShadow: '0px 4px 0px #96C93C',
                    mb: '2px',
                    fontSize: '17px',
                    // fontSize: '50px'
                },
            },
            tablist: {
                borderBottom: '2px',
                borderColor: '#374A16',
            },
            tabpanel: {
            },
        },
    },
    defaultProps: {
        size: '2xl',
        variant: 'colorful',
        colorScheme: 'green',
    },
})