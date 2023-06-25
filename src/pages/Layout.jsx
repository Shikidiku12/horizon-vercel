import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={`"sidebar header"
                        "sidebar main"`}
        gridTemplateColumns={"250px 1fr"}
        gridTemplateRows={"70px 1fr"}
        minHeight={"100vh"}
        fontWeight="bold"
      >
        <GridItem bg={"whiteAlpha.20"} area={"sidebar"}>
          <SideBar />
        </GridItem>
        <GridItem
          area={"header"}
          position="fixed"
          top={0}
          left={"250px"}
          right={0}
          width={"auto"}
          zIndex={2}
        >
          <NavBar />
        </GridItem>
        <GridItem bg="horizon.100" area={"main"}>
          <Outlet />
        </GridItem>
      </Grid>

      {/* <Grid
        templateColumns="repeat(6, 1fr)"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem as={"aside"} colSpan={1} minHeight="100vh" bg={"blue.100"}>
          <SideBar />
        </GridItem>
        <GridItem as={"main"} colSpan={5} minHeight="100vh">
          <NavBar />
          <Box bg="green.50">
            <Outlet />
          </Box>
        </GridItem>
      </Grid> */}
    </>
  );
};

export default Layout;
