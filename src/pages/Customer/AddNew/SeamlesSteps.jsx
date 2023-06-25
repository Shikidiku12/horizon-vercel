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
  console.log("Step 1 formData: ", formData);
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
          </Box>
        </SimpleGrid>

        <FormControl>
          <FormLabel ml={"20px"}>Regulations</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                regulation: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="regulations"
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={"20px"}>License</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                license: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="license"
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={"20px"}>Office IPs</FormLabel>
          <Input
            type="text"
            mb={3}
            onChange={(e) =>
              setFormData({
                ...formData,
                office_ip: e.target.value,
              })
            }
            borderRadius={20}
            bg={"horizon.150"}
            name="officeIP"
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
        <SimpleGrid columns={2} spacing={5}>
          <Box>
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
          </Box>
          <Box>
            <FormControl>
              <FormLabel ml={"20px"}>Default Currency</FormLabel>
              <Input
                type="text"
                mb={3}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    default_currency: e.target.value,
                  })
                }
                borderRadius={20}
                bg={"horizon.150"}
                name="defaultCurrency"
              />
            </FormControl>
          </Box>
        </SimpleGrid>
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
  console.log("Step 2 formData: ", formData);
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

const Step3 = ({ currentStep, onClickPrev, onClickNext }) => {
  const { formData, setFormData } = useContext(SeamlessContext);
  console.log("Step 3 formData: ", formData);
  return (
    <>
      <form>
        <FormLabel ml={"20px"}>Desktop Lobby / Portral URL</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              generalInfo: {
                ...formData.generalInfo,
                desktopURL: e.target.value,
              },
            })
          }
          name="desktopURL"
        />
        <FormLabel ml={"20px"}>Mobile Lobby / Portral URL</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              staging: {
                ...(formData.integrationDetails?.staging || {}),
                mobileURL: e.target.value,
              },
            })
          }
          name="mobileURL"
        />
        <FormLabel ml={"20px"}>Test Accounts</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              staging: {
                ...(formData.integrationDetails?.staging || {}),
                testAccounts: e.target.value,
              },
            })
          }
          name="testAccounts"
        />
        <FormLabel ml={"20px"}>Wallet Endpoint</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              staging: {
                ...(formData.integrationDetails?.staging || {}),
                walletEndpoint: e.target.value,
              },
            })
          }
          name="walletEndpoint"
        />
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <FormLabel ml={"20px"}>Wallet IP</FormLabel>
            <Input
              type="text"
              mb={3}
              borderRadius={"20px"}
              bg={"horizon.150"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  staging: {
                    ...(formData.integrationDetails?.staging || {}),
                    walletIP: e.target.value,
                  },
                })
              }
              name="walletIP"
            />
          </Box>
          <Box>
            <FormLabel ml={"20px"}>Wallet Port</FormLabel>
            <Input
              type="text"
              mb={3}
              borderRadius={"20px"}
              bg={"horizon.150"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  staging: {
                    ...(formData.integrationDetails?.staging || {}),
                    walletPort: e.target.value,
                  },
                })
              }
              name="walletPort"
            />
          </Box>
        </SimpleGrid>
        <FormLabel ml={"20px"}>Service API IP</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              staging: {
                ...(formData.integrationDetails?.staging || {}),
                serviceAPIIP: e.target.value,
              },
            })
          }
          name="serviceAPIIP"
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

const Step4 = ({ onClickPrev, onSubmit }) => {
  const { formData, setFormData } = useContext(SeamlessContext);
  console.log("Step 3 formData: ", formData);
  return (
    <>
      <form>
        <FormLabel ml={"20px"}>Desktop Lobby / Portral URL</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              production: {
                ...(formData.integrationDetails?.production || {}),
                desktopURL: e.target.value,
              },
            })
          }
          name="mobileURL"
        />
        <FormLabel ml={"20px"}>Mobile Lobby / Portral URL</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              production: {
                ...(formData.integrationDetails?.production || {}),
                mobileURL: e.target.value,
              },
            })
          }
          name="mobileURL"
        />
        <FormLabel ml={"20px"}>Test Accounts</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              production: {
                ...(formData.integrationDetails?.production || {}),
                testAccounts: e.target.value,
              },
            })
          }
          name="testAccounts"
        />
        <FormLabel ml={"20px"}>Wallet Endpoint</FormLabel>
        <Input
          type="text"
          mb={3}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              production: {
                ...(formData.integrationDetails?.production || {}),
                walletEndpoint: e.target.value,
              },
            })
          }
          name="walletEndpoint"
        />
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <FormLabel ml={"20px"}>Wallet IP</FormLabel>
            <Input
              type="text"
              mb={3}
              borderRadius={"20px"}
              bg={"horizon.150"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  production: {
                    ...(formData.integrationDetails?.production || {}),
                    walletIP: e.target.value,
                  },
                })
              }
              name="walletIP"
            />
          </Box>
          <Box>
            <FormLabel ml={"20px"}>Wallet Port</FormLabel>
            <Input
              type="text"
              mb={3}
              borderRadius={"20px"}
              bg={"horizon.150"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  production: {
                    ...(formData.integrationDetails?.production || {}),
                    walletPort: e.target.value,
                  },
                })
              }
              name="walletPort"
            />
          </Box>
        </SimpleGrid>
        <FormLabel ml={"20px"}>Service API IP</FormLabel>
        <Input
          type="text"
          mb={5}
          borderRadius={"20px"}
          bg={"horizon.150"}
          onChange={(e) =>
            setFormData({
              ...formData,
              production: {
                ...(formData.integrationDetails?.production || {}),
                serviceAPIIP: e.target.value,
              },
            })
          }
          name="serviceAPIIP"
        />
        <Heading size="md" mb={3}>
          Admin User for IMS
        </Heading>
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <FormLabel ml={"20px"}>Name</FormLabel>
            <Input
              type="text"
              mb={3}
              borderRadius={"20px"}
              bg={"horizon.150"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  production: {
                    ...(formData.integrationDetails?.production || {}),
                    IMSname: e.target.value,
                  },
                })
              }
              name="IMSname"
            />
          </Box>
          <Box>
            <FormLabel ml={"20px"}>E-mail</FormLabel>
            <Input
              type="text"
              mb={3}
              borderRadius={"20px"}
              bg={"horizon.150"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  production: {
                    ...(formData.integrationDetails?.production || {}),
                    IMSemail: e.target.value,
                  },
                })
              }
              name="IMSemail"
            />
          </Box>
        </SimpleGrid>
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
          <Button mt={4} type="button" colorScheme="teal" onClick={onSubmit}>
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
};

export { Step1, Step2, Step3, Step4 };
