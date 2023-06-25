import { extendTheme } from "@chakra-ui/react";
import { Tabs } from "./components/Tabs.js";
import { tableTheme } from "./components/Table.js";
import { MyStyles } from "./MyStyles.js";

export const MyTheme = extendTheme({
    colors: {
        horizon: {
            300: "#374A16",
            200: "#96C93C",
            // #C2D3A0, #D1DDB5
            150: "#D1DDB5",
            100: "#ECF1E3",
        },
    },
    components: {
        Tabs: Tabs,
        Table: tableTheme
    },


    fonts: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
        mono: "Montserrat, sans-serif",
    },

    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    // fonts: {
    //     body: "Montserrat, sans-seri'",
    //     heading: "Montserrat, sans-serif",
    //     mono: "Montserrat, sans-serif",
    // },
    // fontSizes: {
    //     xs: "0.75rem",
    //     sm: "0.875rem",
    //     md: "1rem",
    //     lg: "1.125rem",
    //     xl: "1.25rem",
    //     "2xl": "1.5rem",
    //     "3xl": "1.875rem",
    //     "4xl": "2.25rem",
    //     "5xl": "3rem",
    //     "6xl": "3.75rem",
    //     "7xl": "4.5rem",
    //     "8xl": "6rem",
    //     "9xl": "8rem",
    // },
    // fontWeights: {
    //     hairline: 100,
    //     thin: 200,
    //     light: 300,
    //     normal: 400,
    //     medium: 500,
    //     semibold: 600,
    //     bold: 700,
    //     extrabold: 800,
    //     black: 900,
    // },
    // lineHeights: {
    //     normal: "normal",
    //     none: 1,
    //     shorter: 1.25,
    //     short: 1.375,
    //     base: 1.5,
    //     tall: 1.625,
    //     taller: "2",
    //     "3": ".75rem",
    //     "4": "1rem",
    //     "5": "1.25rem",
    //     "6": "1.5rem",
    //     "7": "1.75rem",
    //     "8": "2rem",
    //     "9": "2.25rem",
    //     "10": "2.5rem",
    // },
    // letterSpacings: {
    //     tighter: "-0.05em",
    //     tight: "-0.025em",
    //     normal: "0",
    //     wide: "0.025em",
    //     wider: "0.05em",
    //     widest: "0.1em",
    // },
    // fonts: MyStyles.fonts,
    // fontSizes: MyStyles.fontSizes,
    // fontWeights: MyStyles.fontWeights,
    // lineHeights: MyStyles.lineHeights,
    // letterSpacings: MyStyles.letterSpacings

    // MyStyles
    // fonts: {
    //     body: "Montserrat, sans-serif",
    //     heading: "Montserrat, sans-serif",
    //     mono: "Montserrat, sans-serif",
    // },
    // fontWeights: {
    //     hairline: 100,
    //     thin: 200,
    //     light: 300,
    //     normal: 400,
    //     medium: 500,
    //     semibold: 600,
    //     bold: 700,
    //     extrabold: 800,
    //     black: 900,
    // },
})