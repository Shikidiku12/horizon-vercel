import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Text,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RiAlertFill } from "react-icons/ri";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Center w={"100vw"} h={"100vh"} bg={"green.50"}>
      <Card
        borderRadius={"20px"}
        boxShadow="lg"
        width={"70%"}
        top="40%"
        left="50%"
        position="absolute"
        transform="translate(-50%, -50%)"
      >
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
          <Text mb={4} textAlign={"center"} fontWeight={600}>
            You do not have access to the requested page. <br />
            Please contact support and request higher role access.
          </Text>
          <Button onClick={goBack} marginLeft="auto" bg={"transparent"}>
            Go Back
          </Button>
        </CardBody>
      </Card>

      {/* <Card borderColor={"green.200"} borderWidth={5}>
        <CardHeader>
          <Heading>Unauthorized</Heading>
        </CardHeader>

        <CardBody>
          <Text mb={4}>
            You do not have access to the requested page. Please contact support
            and request higher role access.
          </Text>
          <Button onClick={goBack}>Go Back</Button>
        </CardBody>
      </Card> */}
    </Center>
  );
};

export default Unauthorized;
