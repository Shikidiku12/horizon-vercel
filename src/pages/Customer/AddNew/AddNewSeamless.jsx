import { useState, useContext } from "react";
import { Step1, Step2, Step3, Step4 } from "./SeamlesSteps";
import StepProgress from "../../../components/StepProgress";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import axios from "../../../services/axios";
import AuthContext from "../../../context/AuthContext";
import SeamlessContext from "../../../context/SeamlesContext";

const AddNewSeamless = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { formData, setFormData } = useContext(SeamlessContext);
  // const [formData, setFormData] = useState({
  //   merchant_name: "",
  //   brand_name: "",
  //   regulation: "",
  //   license: "",
  //   office_ip: "",
  //   lang: "",
  //   currency: "",
  //   default_currency: "",
  //   business_contact_email: "",
  //   billing_contact_email: "",
  //   technical_contact_email: "",
  //   customer_service_contact_email: "",
  //   maintainer_contact_email: "",
  //   company_contact_email: "",
  //   staging: {
  //     desktopURL: "",
  //     mobileURL: "",
  //     testAccounts: "",
  //     walletEndpoint: "",
  //     walletIP: "",
  //     walletPort: "",
  //     serviceAPIIP: "",
  //   },
  //   production: {
  //     desktopURL: "",
  //     mobileURL: "",
  //     testAccounts: "",
  //     walletEndpoint: "",
  //     walletIP: "",
  //     walletPort: "",
  //     serviceAPIIP: "",
  //     IMSname: "",
  //     IMSemail: "",
  //   },
  // });
  // const [formData, setFormData] = useState({
  //   generalInfo: {
  //     merchant_name: "",
  //     brand_name: "",
  //     regulation: "",
  //     license: "",
  //     office_ip: "",
  //     lang: "",
  //     currency: "",
  //     default_currency: "",
  //   },
  //   contact: {
  //     business_contact_email: "",
  //     billing_contact_email: "",
  //     technical_contact_email: "",
  //     customer_service_contact_email: "",
  //     maintainer_contact_email: "",
  //     company_contact_email: "",
  //   },
  //   integrationDetails: {
  //     staging: {
  //       desktopURL: "",
  //       mobileURL: "",
  //       testAccounts: "",
  //       walletEndpoint: "",
  //       walletIP: "",
  //       walletPort: "",
  //       serviceAPIIP: "",
  //     },
  //     production: {
  //       desktopURL: "",
  //       mobileURL: "",
  //       testAccounts: "",
  //       walletEndpoint: "",
  //       walletIP: "",
  //       walletPort: "",
  //       serviceAPIIP: "",
  //       IMSname: "",
  //       IMSemail: "",
  //     },
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
    setFormData({ ...formData, wallet: "seamless" });
    setFormData({ ...formData, created_date: "formattedDate" });
    console.log(formData);
    const controller = new AbortController();
    const { signal } = controller;
    axios.post("/insertSeamlessClient", formData, {
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
            onClickNext={handleNextStep}
          />
        );
      case 4:
        return (
          <Step4
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
        return <Heading size="lg">CONTACTS</Heading>;
      case 3:
        return <Heading size="lg">STAGING DETAILS</Heading>;
      case 4:
        return <Heading size="lg">PRODUCTION DETAILS</Heading>;
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
        <StepProgress currentStep={currentStep} wallet={"seamless"} />
      </Container>

      <Container maxW={"800px"} my={"30px"}>
        <Card borderRadius={20}>
          <CardHeader>{renderHeader()}</CardHeader>

          <CardBody>{renderStep()}</CardBody>
        </Card>
      </Container>
    </>
  );
};

export default AddNewSeamless;
