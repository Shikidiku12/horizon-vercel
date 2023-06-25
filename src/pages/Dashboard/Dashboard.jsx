// import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import StatsAnalytics from "./StatsAnalytics";
import PlaceHolder from "./PlaceHolder";

const Dashboard = () => {
  // const tabRef = useRef(null);
  // const [isTabFixed, setIsTabFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const tabPosition = tabRef.current.getBoundingClientRect().top;
  //     setIsTabFixed(tabPosition <= 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Tabs variant="colorful" size={"2xl"}>
        <TabList
          bg="white"
          position="sticky"
          top={"70px"}
          left={0}
          right={0}
          width={"auto"}
          zIndex={1}
        >
          <Tab>Stats and Analytics</Tab>
          <Tab>PlaceHolder Tab 1</Tab>
          <Tab>PlaceHolder Tab 2</Tab>
        </TabList>

        {/* <TabPanels height="calc(100vh - 70px - 41.2px)" px={6}> */}
        <TabPanels px={6}>
          <TabPanel>
            <StatsAnalytics />
          </TabPanel>
          <TabPanel>
            <PlaceHolder />
          </TabPanel>
          <TabPanel>
            <PlaceHolder />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Dashboard;
