import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiAlertFill } from "react-icons/ri";

const PlaceHolder = () => {
  return (
    <Center w={"100%"} mt={20}>
      <Card borderRadius={"20px"} boxShadow="lg" width={"70%"}>
        <CardHeader>
          <Center pt={5}>
            <Heading>
              <Flex color={"horizon.200"}>
                <Box fontSize={"40px"}>
                  <RiAlertFill />
                </Box>
                Unauthorized
              </Flex>
            </Heading>
          </Center>
        </CardHeader>

        <CardBody color={"horizon.300"}>
          <Text mb={4} textAlign={"center"}>
            You do not have access to the requested page. <br />
            Please contact support and request higher role access.
          </Text>
        </CardBody>
      </Card>
    </Center>
  );
};

export default PlaceHolder;
