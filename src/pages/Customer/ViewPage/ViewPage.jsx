import React, { useContext, useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import KPICardGrid from "../../../components/CardGrid/KPICardGrid";
import {
  Link as ReactRouterLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "../../../services/axios";
import AuthContext from "../../../context/AuthContext";

const ViewPage = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   const referrer = document.referrer;
  //   console.log(referrer);
  //   if (referrer) {
  //     // The component was navigated from a link on a previous page
  //     console.log("Navigated from a link on a previous page");
  //   } else {
  //     // The component was launched through a manual link typed in the browser
  //     console.log("Launched through a manual link typed in the browser");
  //   }
  // }, []);

  const [transferData, setTransferData] = useState([]);
  const [seamlessData, setSeamlessData] = useState([]);
  const [customersData, setCustomersData] = useState([]);
  const { auth, setAuth } = useContext(AuthContext);

  console.log("Ito yung unang customersData ", customersData);

  // Retrieving transfer data from transferAPI
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get("/transferClientList", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
        withCredentials: true,
        signal,
      })
      .then((response) => {
        console.log(response.data);
        setTransferData(response.data);
        // setCustomersData((prevCustomersData) => {
        //   const updatedCustomers = response.data.map((transferCustomer) => {
        //     const customer = {
        //       brandName: transferCustomer.brand_name,
        //       instance_tle: "",
        //       walletType: "transfer",
        //       currency: transferCustomer.currency,
        //       dateAdded: transferCustomer.created_date,
        //       status: "pending",
        //       contract: "pending",
        //     };
        //     return customer;
        //   });
        //   return [...prevCustomersData, ...updatedCustomers];
        // });
      })
      .catch((err) => {
        console.log("Nag error yung call ko");
        console.log(err);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get("/seamlessClientList", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
        },
        withCredentials: true,
        signal,
      })
      .then((response) => {
        console.log(response.data);
        setSeamlessData(response.data);
        // setCustomersData((prevCustomersData) => {
        //   const updatedCustomers = response.data.map((seamlessCustomer) => {
        //     const customer = {
        //       brandName: seamlessCustomer.brand_name,
        //       instance_tle: "",
        //       walletType: "seamless",
        //       currency: seamlessCustomer.currency,
        //       dateAdded: seamlessCustomer.created_date,
        //       status: "pending",
        //       contract: "pending",
        //     };
        //     return customer;
        //   });
        //   return [...prevCustomersData, ...updatedCustomers];
        // });
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   console.log("This is transfer data: ", transferData);
  // }, [transferData]);

  // useEffect(() => {
  //   console.log("This is seamless data: ", seamlessData);
  // }, [seamlessData]);

  // setCustomersData(transferData);
  // seamlessData.forEach((data) => {
  //   setCustomersData([...customersData, data]);
  // });

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
  console.log(
    "This is the combined data for seamless and transfer",
    customersData
  );

  // ########################################
  // const transferData = {
  //   generalInfo: {
  //     merchantName: "Merchant",
  //     merchantChineseName: "Chinese Name",
  //     brandName: "Bran X",
  //     language: "EN",
  //     currencies: "PHP,KRW",
  //     prefix: "PT",
  //   },
  //   contact: {
  //     businessContact: "contact@gmail.com",
  //     billingContact: "contact@gmail.com",
  //     technicalContact: "contact@gmail.com",
  //     customerContact: "contact@gmail.com",
  //     maintainerContact: "contact@gmail.com",
  //     companyContact: "contact@gmail.com",
  //   },
  //   productInfo: {
  //     domainWhitelist: "sampledomain.com",
  //     IPWhitelist: "123.123.123.12",
  //   },
  // };

  // const seamlessData = {
  //   generalInfo: {
  //     merchantName: "Merchant",
  //     brandName: "Bran X",
  //     regulations: "Regulation",
  //     license: "PAGCOR",
  //     officeIP: "123.123.123.12",
  //     language: "EN",
  //     currencies: "PHP,KRW",
  //     defaultCurrency: "PHP",
  //   },
  //   contact: {
  //     businessContact: "contact@gmail.com",
  //     billingContact: "contact@gmail.com",
  //     technicalContact: "contact@gmail.com",
  //     customerContact: "contact@gmail.com",
  //     maintainerContact: "contact@gmail.com",
  //     companyContact: "contact@gmail.com",
  //   },
  //   integrationDetails: {
  //     staging: {
  //       desktopURL: "desk.horizon88.com",
  //       mobileURL: "mobile.horizon88.com",
  //       testAccounts: "PT__JED",
  //       walletEndpoint: "www.staging-wallet-horizon.com",
  //       walletIP: "123.123.123.12",
  //       walletPort: "8080",
  //       serviceAPIIP: "123.123.123.12",
  //     },
  //     production: {
  //       desktopURL: "desk.horizon88.com",
  //       mobileURL: "mobile.horizon88.com",
  //       testAccounts: "PT__JED",
  //       walletEndpoint: "www.wallet-horizon.com",
  //       walletIP: "123.123.123.12",
  //       walletPort: "8080",
  //       serviceAPIIP: "123.123.123.12",
  //     },
  //   },
  // };
  // ##############################

  const navigate = useNavigate();

  const handleLinkClick = (path, state) => {
    navigate(path, { state });
  };

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
        <Box mb={9} mt={6}>
          <KPICardGrid data={kpiData} />
        </Box>
        <Heading as="h3" size="lg" mb={4}>
          Customers
        </Heading>
        <TableContainer bg="white" borderRadius={20} shadow={2}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Brand Name</Th>
                <Th>Instance</Th>
                <Th>Wallet Type</Th>
                <Th>Currency</Th>
                <Th>Date Added</Th>
                <Th>Status</Th>
                <Th>Contract</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {customersData.map((customer) => {
                return (
                  <Tr key={customer.brand_name}>
                    <Td>
                      <Link
                        onClick={() =>
                          handleLinkClick(`/viewpage/${customer.brand_name}`, {
                            customer,
                            wallet: customer.wallet,
                          })
                        }
                      >
                        {customer.brand_name}
                      </Link>
                    </Td>
                    <Td></Td>
                    <Td>{customer.wallet}</Td>
                    <Td>{customer.currency}</Td>
                    <Td>{customer.created_date}</Td>
                    <Td>Pending</Td>
                    <Td>Pending</Td>
                  </Tr>
                );
              })} */}
              {transferData.map((customer) => {
                return (
                  <Tr key={customer.brand_name}>
                    <Td>
                      <Link
                        onClick={() =>
                          handleLinkClick(`/viewpage/${customer.brand_name}`, {
                            customer,
                            wallet: customer.wallet,
                          })
                        }
                      >
                        {customer.brand_name}
                      </Link>
                    </Td>
                    <Td></Td>
                    <Td>{customer.wallet}</Td>
                    <Td>{customer.currency}</Td>
                    <Td>{customer.created_date}</Td>
                    <Td>Pending</Td>
                    <Td>Pending</Td>
                  </Tr>
                );
              })}
              {seamlessData.map((customer) => {
                return (
                  <Tr key={customer.brand_name}>
                    <Td>
                      <Link
                        onClick={() =>
                          handleLinkClick(`/viewpage/${customer.brand_name}`, {
                            customer,
                            wallet: customer.wallet,
                          })
                        }
                      >
                        {customer.brand_name}
                      </Link>
                    </Td>
                    <Td></Td>
                    <Td>{customer.wallet}</Td>
                    <Td>{customer.currency}</Td>
                    <Td>{customer.created_date}</Td>
                    <Td>Pending</Td>
                    <Td>Pending</Td>
                  </Tr>
                );
              })}

              {/* ################################## */}
              {/* <Tr>
                <Td> */}
              {/* <ReactRouterLink
                    // as={ReactRouterLink}
                    to={{
                      pathname: "/viewpage/filbet",
                      state: { transferData },
                    }}
                  >
                    Filbet
                  </ReactRouterLink> */}
              {/* <Link
                    onClick={() =>
                      handleLinkClick("/viewpage/filbet", { transferData })
                    }
                  >
                    Filbet
                  </Link> */}
              {/* <Link>Filbet</Link>
                </Td>
                <Td>Instance 1</Td>
                <Td>Seamless</Td>
                <Td>PHP</Td>
                <Td>Feb 3, 2023</Td>
                <Td>Production (To Start)</Td>
                <Td>Pending</Td>
              </Tr>
              <Tr>
                <Td>
                  <Link>OkBet</Link>
                </Td>
                <Td>Instance 2</Td>
                <Td>Transfer</Td>
                <Td>PHP</Td>
                <Td>Feb 14, 2023</Td>
                <Td>Implementation</Td>
                <Td>Pending</Td>
              </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ViewPage;
