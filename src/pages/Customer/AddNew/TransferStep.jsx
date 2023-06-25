import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Container,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import SeamlessContext from "../../../context/SeamlesContext";

const Step1 = ({ onClickNext }) => {
  const { formData, setFormData } = useContext(SeamlessContext);
  return (
    <>
      <form>
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <FormControl>
              <FormLabel ml={"20px"}>Merchant English Name</FormLabel>
              <Input
                type="text"
                mb={3}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant_name: e.target.value,
                  })
                }
                borderRadius={20}
                bg={"horizon.150"}
                name="merchantName"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel ml={"20px"}>Merchant Chinese Name</FormLabel>
              <Input
                type="text"
                mb={3}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant_chinese_name: e.target.value,
                  })
                }
                borderRadius={20}
                bg={"horizon.150"}
                name="merchantChineseName"
              />
            </FormControl>
          </Box>
        </SimpleGrid>
        <FormControl>
          <FormLabel ml={"20px"}>Brand Name</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                brand_name: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="brandName"
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={"20px"}>Language Used</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                lang: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="language"
          />
        </FormControl>
        {/* <SimpleGrid columns={2} spacing={5}>
          <Box>
            <FormControl>
              <FormLabel ml={"20px"}>Language Used</FormLabel>
              <Input
                type="text"
                mb={3}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    generalInfo: {
                      ...formData.generalInfo,
                      language: e.target.value,
                    },
                  })
                }
                borderRadius={20}
                bg={"horizon.150"}
                name="language"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel ml={"20px"}>Currencies Used</FormLabel>
              <Input
                type="text"
                mb={3}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    generalInfo: {
                      ...formData.generalInfo,
                      currencies: e.target.value,
                    },
                  })
                }
                borderRadius={20}
                bg={"horizon.150"}
                name="currencies"
              />
            </FormControl>
          </Box>
        </SimpleGrid> */}
        <FormControl>
          <FormLabel ml={"20px"}>Currencies Used</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                currency: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="currencies"
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={"20px"}>Prefix</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                player_prefix: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="prefix"
          />
        </FormControl>
        <Button
          mt={4}
          type="button"
          colorScheme="teal"
          onClick={(e) => {
            onClickNext();
            console.log(formData);
          }}
        >
          Next
        </Button>
      </form>
    </>
  );
};

const Step2 = ({ currentStep, onClickPrev, onClickNext }) => {
  const { formData, setFormData } = useContext(SeamlessContext);
  return (
    <>
      <form>
        <FormLabel ml={"20px"}>Domain Whitelist</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              url_domain_whitelist: e.target.value,
            })
          }
          name="domainWhitelist"
        />
        <FormLabel ml={"20px"}>IP Whitelist</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              ip_whitelist: e.target.value,
            })
          }
          name="IPWhitelist"
        />
        <Flex>
          <Button
            mt={4}
            type="button"
            colorScheme="teal"
            onClick={(e) => {
              onClickPrev();
            }}
          >
            Previous
          </Button>
          <Spacer />
          <Button
            mt={4}
            type="button"
            colorScheme="teal"
            onClick={(e) => {
              onClickNext();
            }}
          >
            Next
          </Button>
        </Flex>
      </form>
    </>
  );
};

const Step3 = ({ onClickPrev, onSubmit }) => {
  const { formData, setFormData } = useContext(SeamlessContext);
  return (
    <>
      <form>
        <FormLabel ml={"20px"}>Business Contact</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              business_contact_email: e.target.value,
            })
          }
          name="businessContact"
        />
        <FormLabel ml={"20px"}>Billing Contact</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              billing_contact_email: e.target.value,
            })
          }
          name="billingContact"
        />
        <FormLabel ml={"20px"}>Technical Contact</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              technical_contact_email: e.target.value,
            })
          }
          name="technicalContact"
        />
        <FormLabel ml={"20px"}>Customer Contact</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer_service_contact_email: e.target.value,
            })
          }
          name="customerContact"
        />
        <FormLabel ml={"20px"}>Maintainer Contact</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              maintainer_contact_email: e.target.value,
            })
          }
          name="maintainerContact"
        />
        <FormLabel ml={"20px"}>Company Contact</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              company_contact_email: e.target.value,
            })
          }
          name="companyContact"
        />
        <Flex>
          <Button
            mt={4}
            type="button"
            colorScheme="teal"
            onClick={(e) => {
              onClickPrev();
            }}
          >
            Previous
          </Button>
          <Spacer />
          <Button
            mt={4}
            type="submit"
            colorScheme="teal"
            onClick={(e) => {
              setFormData({
                ...formData,
                wallet: "seamless",
              });
              onSubmit(e);
            }}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
};

export { Step1, Step2, Step3 };
