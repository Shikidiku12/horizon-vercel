import React, { useEffect } from "react";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Container,
  Link,
  Flex,
  Image,
  Center,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import KPICardGrid from "../../../components/CardGrid/KPICardGrid";
import { useLocation } from "react-router-dom";
import ViewCustomerGeneral from "./ViewCustomerGeneral";
import ViewCustomerContact from "./ViewCustomerContact";
import ViewCustomerContract from "./ViewCustomerContract";
import ViewCustomerPerformance from "./ViewCustomerPerformance";
import ViewCustomerSubrands from "./ViewCustomerSubrands";

const ViewCustomerPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log("This is the passed states: ", data);
  // const contact = data.transferData.contact;
  // const generalInfo = data.transferData.generalInfo;
  // const productInfo = data.transferData.productInfo;
  const wallet = data.wallet;
  const customerData = data.customer;
  const contact = {};
  const generalInfo = {};
  // const productInfo = {};

  contact["business_contact_email"] = customerData.business_contact_email;
  contact["billing_contact_email"] = customerData.billing_contact_email;
  contact["technical_contact_email"] = customerData.technical_contact_email;
  contact["maintainer_contact_email"] = customerData.maintainer_contact_email;
  contact["company_contact_email"] = customerData.company_contact_email;
  contact["customer_service_contact_email"] =
    customerData.customer_service_contact_email;

  generalInfo["merchant_name"] = customerData.merchant_name;
  generalInfo["brand_name"] = customerData.brand_name;
  generalInfo["currency"] = customerData.currency;
  generalInfo["lang"] = customerData.lang;
  generalInfo["created_date"] = customerData.created_date;
  if (wallet === "transfer") {
    generalInfo["merchant_chinese_name"] = customerData.merchant_chinese_name;
    generalInfo["player_prefix"] = customerData.player_prefix;
    generalInfo["url_domain_whitelist"] = customerData.url_domain_whitelist;
    generalInfo["ip_whitelist"] = customerData.ip_whitelist;
  } else {
    generalInfo["regulation"] = customerData.regulation;
    generalInfo["license"] = customerData.license;
    generalInfo["office_ip"] = customerData.office_ip;
    generalInfo["default_currency"] = customerData.default_currency;
  }

  // Access the transferData
  // console.log(data);

  const kpiData = [
    {
      data: 1,
      timeSpan: "Monthly",
      title: "Casino Bets",
      currentValue: "3,654,654",
      lastValue: "3,472,183",
      percent: "14",
      logo: "chips",
    },
    {
      data: 2,
      timeSpan: "Monthly",
      title: "Casino Wins",
      currentValue: "3,463,635",
      lastValue: "3,532,293",
      percent: "12",
      logo: "ribbon",
    },
    {
      data: 3,
      timeSpan: "Monthly",
      title: "Revenue",
      currentValue: "1,137,794",
      lastValue: "830,782",
      percent: "20",
      logo: "moneyBag",
    },
    {
      data: 4,
      timeSpan: "Monthly",
      title: "RTP (%)",
      currentValue: "97.96",
      lastValue: "97.86",
      percent: "0.1",
      logo: "money",
    },
    {
      data: 5,
      timeSpan: "Monthly",
      title: "Number of Spins",
      currentValue: "1,723,750",
      lastValue: "1,242,980",
      percent: "14",
      logo: "slot",
    },
  ];

  console.log("This is the passed data", data);

  return (
    <>
      <Box
        bg="white"
        height="42px"
        position="sticky"
        top={"70px"}
        left={0}
        right={0}
        width={"auto"}
        zIndex={1}
        borderBottom={"2px solid"}
        borderColor={"horizon.300"}
      ></Box>
      <Box p={6}>
        <Box mb={6} mt={6}>
          <Flex>
            <Center height={"160px"}>
              <Image
                src="../../../../public/img/casino.png"
                objectFit="cover"
                width="200px"
                mr={"40px"}
              />
            </Center>
            <Box flex={1}>
              <KPICardGrid data={kpiData} />
            </Box>
          </Flex>
        </Box>
        <Tabs variant="line">
          <TabList bg="white" borderTopRadius={"20px"}>
            <Tab p={4} ml={4}>
              General
            </Tab>
            <Tab p={4} ml={4}>
              Contact
            </Tab>
            <Tab p={4} ml={4}>
              Contract
            </Tab>
            <Tab p={4} ml={4}>
              Sub-Brands
            </Tab>
            <Tab p={4} ml={4}>
              Performace
            </Tab>
          </TabList>

          {/* <TabPanels height="calc(100vh - 70px - 41.2px)" px={6}> */}
          <TabPanels px={6} bg="white" borderBottomRadius={"20px"}>
            <TabPanel>
              <ViewCustomerGeneral generalInfo={generalInfo} wallet={wallet} />
            </TabPanel>
            <TabPanel>
              <ViewCustomerContact contact={contact} />
            </TabPanel>
            <TabPanel>
              <ViewCustomerContract />
            </TabPanel>
            <TabPanel>
              <ViewCustomerSubrands />
            </TabPanel>
            <TabPanel>
              <ViewCustomerPerformance />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default ViewCustomerPage;
