import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import {
  VStack,
  Link,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
  Heading,
  Image,
  Spacer,
  Divider,
  Center,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  BsFillHouseDoorFill,
  BsBank2,
  BsFillFileEarmarkMinusFill,
  BsPersonSquare,
} from "react-icons/bs";
import { FaSlidersH, FaPen } from "react-icons/fa";
import { RiFileSearchFill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Box
        position="sticky"
        top={0}
        bg="#FFFFFF"
        zIndex={2}
        color={"horizon.300"}
      >
        <Center height={"109.5px"} zIndex={3}>
          <Image src="../../public/img/horizon-logo.png" alt="Logo Image" />
        </Center>
        <Box pl={4} pr={4} mb={3}>
          <Divider borderWidth={2} borderColor={"horizon.300"} />
        </Box>
        <br />
        <Center width={"250px"}>
          <List spacing={7}>
            <ListItem
              _hover={{ bg: "horizon.100" }}
              _active={{ bg: "horizon.100" }}
              bg={isActive("/") ? "horizon.100" : "transparent"}
              px={3}
              py={2}
              borderRadius={"20px"}
            >
              <Link as={ReactRouterLink} to="/">
                <HStack>
                  <Box as={BsFillHouseDoorFill} boxSize={6} />
                  <Heading as="h5" size="sm" pl={1}>
                    Dashboard
                  </Heading>
                </HStack>
              </Link>
            </ListItem>

            <ListItem>
              <Accordion boxShadow="none" allowToggle>
                <AccordionItem
                  borderWidth="0"
                  borderBlockEnd={0}
                  boxShadow="none"
                >
                  <AccordionButton
                    boxShadow="none"
                    // p={0}
                    // mt={5}
                    // pt={2}
                    // px={0}
                    _hover={{ bg: "horizon.100" }}
                    borderRadius={"20px"}
                  >
                    <HStack pr={2}>
                      <Box
                        as={BsFillFileEarmarkMinusFill}
                        boxSize={6}
                        // mr={0}
                        // pr={0}
                        // mr={1}
                      />
                      <Heading size={6}>Customer</Heading>
                    </HStack>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel mt={4} mb={0} pb={0} pl={4}>
                    <VStack
                      borderWidth="0"
                      borderRadius="md"
                      boxShadow="none"
                      // alignItems="flex-start"
                      spacing={"20px"}
                    >
                      <Link
                        as={ReactRouterLink}
                        to="/addnew"
                        _hover={{ bg: "horizon.100" }}
                        _active={{ bg: "horizon.100" }}
                        bg={isActive("/addnew") ? "horizon.100" : "transparent"}
                        px={3}
                        py={2}
                        borderRadius={"20px"}
                      >
                        <HStack justifyContent="space-between" spacing={3}>
                          <Heading as="h5" size="sm">
                            Add New
                          </Heading>
                          <Box as={MdAddCircleOutline} boxSize={6} />
                        </HStack>
                      </Link>
                      <Link
                        as={ReactRouterLink}
                        to="/viewpage"
                        _hover={{ bg: "horizon.100" }}
                        _active={{ bg: "horizon.100" }}
                        bg={
                          isActive("/viewpage") ? "horizon.100" : "transparent"
                        }
                        px={3}
                        py={2}
                        borderRadius={"20px"}
                      >
                        <HStack justifyContent="space-between" spacing={3}>
                          <Heading as="h5" size="sm">
                            View
                          </Heading>
                          <Box as={RiFileSearchFill} boxSize={6} />
                        </HStack>
                      </Link>
                      <Link
                        as={ReactRouterLink}
                        to="/editcustomer"
                        _hover={{ bg: "horizon.100" }}
                        _active={{ bg: "horizon.100" }}
                        bg={
                          isActive("/editcustomer")
                            ? "horizon.100"
                            : "transparent"
                        }
                        px={3}
                        py={2}
                        borderRadius={"20px"}
                      >
                        <HStack justifyContent="space-between" spacing={3}>
                          <Heading as="h5" size="sm">
                            Edit
                          </Heading>
                          <Box as={FaPen} boxSize={6} />
                        </HStack>
                      </Link>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </ListItem>

            <ListItem
              _hover={{ bg: "horizon.100" }}
              _active={{ bg: "horizon.100" }}
              bg={isActive("/billing") ? "horizon.100" : "transparent"}
              px={3}
              py={2}
              borderRadius={"20px"}
            >
              <Link as={ReactRouterLink} to="/billing">
                <HStack>
                  <Box as={BsBank2} boxSize={6} />
                  <Heading as="h5" size="sm" pl={1}>
                    Billing
                  </Heading>
                </HStack>
              </Link>
            </ListItem>

            <ListItem
              _hover={{ bg: "horizon.100" }}
              _active={{ bg: "horizon.100" }}
              bg={isActive("/billing") ? "horizon.100" : "transparent"}
              px={3}
              py={2}
              borderRadius={"20px"}
            >
              <Link as={ReactRouterLink} to="/support">
                <HStack>
                  <Box as={BsPersonSquare} boxSize={6} />
                  <Heading as="h5" size="sm" pl={1}>
                    Support
                  </Heading>
                </HStack>
              </Link>
            </ListItem>

            <ListItem
              _hover={{ bg: "horizon.100" }}
              _active={{ bg: "horizon.100" }}
              bg={isActive("/billing") ? "horizon.100" : "transparent"}
              px={3}
              py={2}
              borderRadius={"20px"}
            >
              <Link as={ReactRouterLink} to="/settings">
                <HStack>
                  <Box as={FaSlidersH} boxSize={6} />
                  <Heading as="h5" size="sm" pl={1}>
                    Settings
                  </Heading>
                </HStack>
              </Link>
            </ListItem>
          </List>
        </Center>
      </Box>
    </>
  );
};

export default SideBar;
