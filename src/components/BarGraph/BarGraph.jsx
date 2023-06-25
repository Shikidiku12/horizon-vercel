import React from "react";
import { Bar } from "react-chartjs-2";
import Data from "./Data";
import { Chart as ChartJS } from "chart.js/auto";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
} from "@chakra-ui/react";

// options={}

const BarGraph = () => {
  // const barData = {
  //   labels: Data.labels,
  //   datasets: Data.datasets,
  //   options: Data.options,
  // };
  const barData = {
    labels: [
      "June 18",
      "June 19",
      "June 20",
      "June 21",
      "June 22",
      "June 23",
      "June 24",
      "June 25",
    ],
    datasets: [
      {
        label: "Bets",
        data: [8000, 4577, 7888, 9000, 8000, 8329, 4235, 2376],
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(0, 128, 128, 0.4)", // Set the fill color
      },
      {
        label: "Wins",
        data: [2000, 2173, 8951, 3456, 9643, 1823, 5491, 3215],
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(151, 201, 60, 0.4)", // Set the fill color
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    // responsive: false,
    // aspectRatio: "1|1",
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
          Bets and Wins
        </Heading>
      </CardHeader>
      <CardBody px={5} pb={8} pt={1}>
        <Box height={"300px"} px={3}>
          <Bar data={barData} options={options} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default BarGraph;
