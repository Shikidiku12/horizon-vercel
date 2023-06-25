import { Box, Button, Center, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { BsCloudUpload } from "react-icons/bs";

const ViewCustomerContract = () => {
  return (
    <Box minHeight={"300px"}>
      <Center minHeight={"300px"}>
        <Button>
          <Text pr="2">Upload Contract</Text>
          <BsCloudUpload />
        </Button>
      </Center>
    </Box>
  );
};

export default ViewCustomerContract;
