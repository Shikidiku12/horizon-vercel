import React from "react";
import { Line } from "react-chartjs-2";
import Data from "./Data";
import { Chart as ChartJS } from "chart.js/auto";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
} from "@chakra-ui/react";

const LineGraph = () => {
  const barData = {
    labels: Data.labels,
    datasets: Data.datasets,
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <Card boxShadow="lg">
      <CardHeader pt={7}>
        <Heading size="md" color={"horizon.300"}>
          Recent Earnings
        </Heading>
      </CardHeader>
      <CardBody px={5} pb={8} pt={1}>
        <Box height={"300px"} px={3}>
          <Line data={barData} options={options} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default LineGraph;
