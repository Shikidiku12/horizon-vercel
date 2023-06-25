import { SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";
import KPICard from "./KPICard";

const KPICardGrid = ({ data }) => {
  return (
    <SimpleGrid columns={5} spacing={5}>
      {/* <SimpleGrid spacing={5} minChildWidth="300px"> */}
      {data.map((data) => (
        <KPICard key={data.data} data={data} />
      ))}
    </SimpleGrid>
  );
};

export default KPICardGrid;
