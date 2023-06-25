import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AddNewTransfer from "./AddNewTransfer";
import AddNewSeamless from "./AddNewSeamless";
import SeamlesContextProvider from "../../../context/SeamlesContextProvider";

const AddNew = () => {
  return (
    <>
      <Tabs variant="colorful">
        <TabList
          bg="white"
          position="sticky"
          top={"70px"}
          left={0}
          right={0}
          width={"auto"}
          zIndex={1}
        >
          <Tab>Transfer</Tab>
          <Tab>Seamless</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SeamlesContextProvider>
              <AddNewTransfer />
            </SeamlesContextProvider>
          </TabPanel>
          <TabPanel>
            <SeamlesContextProvider>
              <AddNewSeamless />
            </SeamlesContextProvider>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default AddNew;
