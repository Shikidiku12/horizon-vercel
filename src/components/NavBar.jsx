import React, { useContext } from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  Divider,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import axios from "../services/axios";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const LOGOUT_URL = "/logout";

  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const controller = new AbortController();
      const { signal } = controller;
      const response = await axios.post(
        LOGOUT_URL,
        JSON.stringify({ username: user }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
          withCredentials: true,
          signal,
        }
      );
      navigate("/login", { replace: true });
      return () => controller.abort();
    } catch (err) {
      // This if statement for error was commented out and not tested before
      if (!err?.resonse) {
        console.log("Server Error");
      }
    }
  };

  return (
    <>
      <Box
        // position="fixed"
        // top={0}
        bg="#FFFFFF"
        // zIndex={1}
        color={"horizon.300"}
        // width={"100%"}
        zIndex={1}
      >
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem
            colStart={5}
            colEnd={8}
            h="10"
            height={"70px"}
            display="flex"
            alignItems="center"
          >
            <HStack flex={1} justify="center" gap={1}>
              <InputGroup>
                <Input
                  bg="horizon.100"
                  borderRadius={20}
                  placeholder="Search..."
                />
                <InputRightElement pointerEvents="none">
                  <Icon as={FaSearch} color="horizon.300" fontSize={17} />
                </InputRightElement>
              </InputGroup>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<FaBell />}
                  variant="outline"
                  color="horizon.300"
                  borderWidth={0}
                  fontSize={22}
                />
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Avatar}
                  size="sm"
                  name="Good Boy"
                  src="../../public/img/good-boy.jpg"
                  mr={6}
                />
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Link as={ReactRouterLink} onClick={() => handleLogout()}>
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default NavBar;
