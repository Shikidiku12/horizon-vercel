import { createMultiStyleConfigHelpers } from "@chakra-ui/react";


// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(['tablecontainer', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])

export const tableTheme = defineMultiStyleConfig({
    // parts: {
    //   table: "the table wrapper",
    //   thead: "thead element",
    //   tbody: "tbody element",
    //   tr: "tr element",
    //   th: "th element",
    //   td: "td element",
    // },
    baseStyle: {
        table: {
            borderCollapse: "collapse",
            width: "100%",
        },
        th: {
            // padding: "1rem",
            fontSize: '16px',
            // borderBottom: "1px solid",
            // borderColor: "gray.200",
        },
        td: {
            // padding: "4px",
            fontSize: '16px',
            // borderBottom: "1px solid",
            // borderColor: "gray.200",
        },
    },
    sizes: {
        // sm: {
        //     tablist: {
        //         fontSize: 'xl',
        //         py: '4',
        //         px: '6',
        //     },
        //     tab: {
        //         fontSize: 'xl',
        //         py: '4',
        //         px: '6',
        //     },
        //     tabpanel: {
        //         py: '4',
        //         px: '6',
        //     },
        // },
        // md: {
        //     tablist: {
        //         fontSize: 'xl',
        //         py: '4',
        //         px: '6',
        //     },
        //     tab: {
        //         fontSize: 'xl',
        //         py: '4',
        //         px: '6',
        //     },
        //     tabpanel: {
        //         py: '4',
        //         px: '6',
        //     },
        // },
    },
    variants: {
        horizon: {
            tableContainer: {

            },
            table: {
                borderCollapse: "collapse",
                width: "100%",
            },
            thead: {
                mb: "10"
            },
            th: {
                // padding: "1rem",
                fontSize: '14px',
                fontWeight: '600'
                // borderBottom: "1px solid",
                // borderColor: "gray.200",
            },
            td: {
                // padding: "4px",
                fontSize: '12px',
                // borderBottom: "1px solid",
                // borderColor: "gray.200",
            },
        },
    },
    defaultProps: {
        // size: 'xl',
        // variant: 'colorful',
        // colorScheme: 'green',
    },
});
