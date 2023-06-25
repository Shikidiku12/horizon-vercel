import { SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardGrid = ({ data }) => {
  return (
    <SimpleGrid columns={4} spacing={5}>
      {data.map((data) => (
        <CategoryCard key={data.data} data={data} />
      ))}
    </SimpleGrid>
  );
};

export default CategoryCardGrid;
