import React from "react";
import KPICardGrid from "../../components/CardGrid/KPICardGrid";
import CategoryCardGrid from "../../components/CardGrid/CategoryCardGrid";
import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import BarGraph from "../../components/BarGraph/BarGraph";
import LineGraph from "../../components/LineGraph/LineGraph";

const StatsAnalytics = () => {
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
      title: "Player Wins",
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

  const data = [
    {
      data: 1,
      category: "Operator",
      top: [
        { rank: 1, categoryName: "FILBET", earnings: "733,628" },
        { rank: 2, categoryName: "OKBET", earnings: "733,628" },
        { rank: 3, categoryName: "COMMONTECH", earnings: "733,628" },
        { rank: 4, categoryName: "TORROSPIN", earnings: "733,628" },
        { rank: 5, categoryName: "BLACKSTONE", earnings: "733,628" },
        { rank: 6, categoryName: "SUPABET", earnings: "733,628" },
        { rank: 7, categoryName: "SUPERSWAN", earnings: "733,628" },
        { rank: 8, categoryName: "GAMINGHUB", earnings: "733,628" },
        { rank: 9, categoryName: "SWIX", earnings: "733,628" },
        { rank: 10, categoryName: "FLEX", earnings: "733,628" },
      ],
    },
    {
      data: 2,
      category: "Countries",
      top: [
        { rank: 1, categoryName: "Philippines", earnings: "733,628" },
        { rank: 2, categoryName: "India", earnings: "733,628" },
        { rank: 3, categoryName: "Japan", earnings: "733,628" },
        { rank: 4, categoryName: "Thailand", earnings: "733,628" },
        { rank: 5, categoryName: "Korea", earnings: "733,628" },
        { rank: 6, categoryName: "Singapore", earnings: "733,628" },
        { rank: 7, categoryName: "Myanmar", earnings: "733,628" },
        { rank: 8, categoryName: "China", earnings: "733,628" },
        { rank: 9, categoryName: "Israel", earnings: "733,628" },
        { rank: 10, categoryName: "Afghanistan", earnings: "733,628" },
      ],
    },
    {
      data: 3,
      category: "Currencies",
      top: [
        { rank: 1, categoryName: "PHP", earnings: "733,628" },
        { rank: 2, categoryName: "IDR", earnings: "733,628" },
        { rank: 3, categoryName: "VND", earnings: "733,628" },
        { rank: 4, categoryName: "CNY", earnings: "733,628" },
        { rank: 5, categoryName: "INR", earnings: "733,628" },
        { rank: 6, categoryName: "THB", earnings: "733,628" },
        { rank: 7, categoryName: "MYR", earnings: "733,628" },
        { rank: 8, categoryName: "USD", earnings: "733,628" },
        { rank: 9, categoryName: "KRW", earnings: "733,628" },
        { rank: 10, categoryName: "JPY", earnings: "733,628" },
      ],
    },
    {
      data: 4,
      category: "Games",
      top: [
        { rank: 1, categoryName: "Buffalo Blitz", earnings: "733,628" },
        { rank: 2, categoryName: "Archer", earnings: "733,628" },
        { rank: 3, categoryName: "Arowana's Luck", earnings: "733,628" },
        { rank: 4, categoryName: "Mammoth", earnings: "733,628" },
        { rank: 5, categoryName: "All Bets Blackjack", earnings: "733,628" },
        { rank: 6, categoryName: "Age of the Gods", earnings: "733,628" },
        { rank: 7, categoryName: "Fat Choi", earnings: "733,628" },
        { rank: 8, categoryName: "Blitzkrieg", earnings: "733,628" },
        { rank: 9, categoryName: "Valorant", earnings: "733,628" },
        { rank: 10, categoryName: "Dota", earnings: "733,628" },
      ],
    },
  ];
  return (
    <>
      <Box mb={9} mt={6}>
        <KPICardGrid data={kpiData} />
      </Box>
      <Heading size={"lg"} color="horizon.300" my={6}>
        Revenue Per Month
      </Heading>
      {/* <Flex gap={5}>
        <Box>
          <BarGraph />
        </Box>
        <Box>
          <LineGraph />
        </Box>
      </Flex> */}

      <Box>
        <Grid templateColumns="repeat(10, 1fr)" gap={5}>
          <GridItem colSpan={4}>
            <Box>
              <BarGraph />
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <Box>
              <LineGraph />
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Heading size={"lg"} color="horizon.300" my={6}>
        Top Categories
      </Heading>
      <Box mb={6}>
        <CategoryCardGrid data={data} />
      </Box>
    </>
  );
};

export default StatsAnalytics;
