import { useState, useContext } from "react";
import { Step1, Step2, Step3 } from "./TransferStep";
import StepProgress from "../../../components/StepProgress";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import axios from "../../../services/axios";
import AuthContext from "../../../context/AuthContext";
import SeamlessContext from "../../../context/SeamlesContext";

const AddNewTransfer = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { formData, setFormData } = useContext(SeamlessContext);

  // const [formData, setFormData] = useState({
  //   generalInfo: {
  //     merchantName: "",
  //     merchantChineseName: "",
  //     brandName: "",
  //     language: "",
  //     currencies: "",
  //     prefix: "",
  //   },
  //   productInfo: {
  //     domainWhitelist: "",
  //     IPWhitelist: "",
  //   },
  //   contact: {
  //     businessContact: "",
  //     billingContact: "",
  //     technicalContact: "",
  //     customerContact: "",
  //     maintainerContact: "",
  //     companyContact: "",
  //   },
  // });
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any desired actions with the submitted form data
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setFormData({ ...formData, created_date: "formattedDate" });
    console.log(formData);
    const controller = new AbortController();
    const { signal } = controller;
    axios.post("/insertTransferClient", formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
      withCredentials: true,
      signal,
    });
    return () => controller.abort();
    // return <Box>Submitted</Box>;
  };

  // Function to move to the next step
  const handleNextStep = () => {
    console.log("Next step");
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to move to the previous step
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Render different steps based on the current step
  const renderStep = () => {
    console.log("This is the currentStep: ", currentStep);
    switch (currentStep) {
      case 1:
        return <Step1 currentStep={currentStep} onClickNext={handleNextStep} />;
      case 2:
        return (
          <Step2
            currentStep={currentStep}
            onClickPrev={handlePrevStep}
            onClickNext={handleNextStep}
          />
        );
      case 3:
        return (
          <Step3
            currentStep={currentStep}
            onClickPrev={handlePrevStep}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  // Render different headers based on the current step
  const renderHeader = () => {
    switch (currentStep) {
      case 1:
        return <Heading size="lg">GENERAL INFORMATION</Heading>;
      case 2:
        return <Heading size="lg">PRODUCT INFORMATION</Heading>;
      case 3:
        return <Heading size="lg">CONTACTS</Heading>;
      default:
        return null;
    }
  };

  return (
    <>
      <Container
        maxW={"1200px"}
        mt={"30px"}
        mb={"50px"}
        bg={"white"}
        borderRadius={"20px"}
        py={3}
        px={8}
      >
        <StepProgress currentStep={currentStep} wallet={"transfer"} />
      </Container>

      <Container maxW={"800px"} my={"30px"}>
        <Card borderRadius={20}>
          <CardHeader>{renderHeader()}</CardHeader>

          <CardBody>{renderStep()}</CardBody>
        </Card>
      </Container>
    </>
    // <Container maxW={"800px"} my={"30px"}>
    //   <Card borderRadius={"20px"}>
    //     <CardHeader>
    //       <Heading size="lg">GENERAL INFORMATION</Heading>
    //     </CardHeader>

    //     <CardBody>
    //       <FormControl>
    //         <FormLabel ml="20px">Merchant English Name</FormLabel>
    //         <Input
    //           type="text"
    //           mb={3}
    //           borderRadius={"20px"}
    //           bg={"horizon.150"}
    //         />
    //         <FormLabel ml="20px">Merchant Chinese Name</FormLabel>
    //         <Input
    //           type="text"
    //           mb={3}
    //           borderRadius={"20px"}
    //           bg={"horizon.150"}
    //         />
    //         <FormLabel ml="20px">Brand Name</FormLabel>
    //         <Input
    //           type="text"
    //           mb={3}
    //           borderRadius={"20px"}
    //           bg={"horizon.150"}
    //         />
    //         <SimpleGrid columns={2} spacing={5}>
    //           <Box>
    //             <FormLabel ml="20px">Currency</FormLabel>
    //             <Input
    //               type="text"
    //               mb={3}
    //               borderRadius={"20px"}
    //               bg={"horizon.150"}
    //             />
    //           </Box>
    //           <Box>
    //             <FormLabel ml="20px">Language</FormLabel>
    //             <Input
    //               type="text"
    //               mb={3}
    //               borderRadius={"20px"}
    //               bg={"horizon.150"}
    //             />
    //           </Box>
    //         </SimpleGrid>

    //         <FormLabel ml="20px">Player Prefix</FormLabel>
    //         <Input
    //           type="text"
    //           mb={3}
    //           borderRadius={"20px"}
    //           bg={"horizon.150"}
    //         />
    //         <Text fontSize="2xl" mb={3}>
    //           PRODUCT INFORMATION
    //         </Text>
    //         <FormLabel ml="20px">Website URL (Domain Whitelist)</FormLabel>
    //         <Input
    //           type="text"
    //           mb={3}
    //           borderRadius={"20px"}
    //           bg={"horizon.150"}
    //         />
    //         <Button mt={4} colorScheme="teal" type="submit">
    //           Submit
    //         </Button>
    //       </FormControl>
    //     </CardBody>
    //   </Card>
    // </Container>
  );
};

export default AddNewTransfer;
