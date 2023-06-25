import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";

const seamlesSteps = [
  { title: "First", description: "General Information" },
  { title: "Second", description: "Contacts" },
  { title: "Third", description: "Staging Details" },
  { title: "Fourth", description: "Production Details" },
];

const transferSteps = [
  { title: "First", description: "General Information" },
  { title: "Second", description: "Product Information" },
  { title: "Third", description: "Contacts" },
];

const StepProgress = ({ currentStep, wallet }) => {
  console.log("This is the step from stepper", currentStep);
  let activeStep = currentStep - 1;
  console.log("This is activeStep: ", activeStep);

  let steps = [];
  wallet === "transfer" ? (steps = transferSteps) : (steps = seamlesSteps);

  return (
    <Stepper size="lg" colorScheme="green" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default StepProgress;
