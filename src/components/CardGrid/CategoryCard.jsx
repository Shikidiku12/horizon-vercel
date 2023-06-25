import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

// Table container props (bg="white" borderRadius={20} shadow={2} p={0})
const CategoryCard = ({ data }) => {
  return (
    <Card color="horizon.300" boxShadow="lg">
      <CardBody p={2}>
        <TableContainer size="sm" mt={2}>
          <Table variant="horizon" p={0} m={0} size="sm">
            <Thead p={0} m={0}>
              <Tr>
                <Th>Top {data.category}</Th>
                <Th isNumeric borderLeft="1px solid">
                  Earnings
                </Th>
              </Tr>
            </Thead>
            <Tbody p={0} m={0}>
              {data.top.map((topElement) => {
                return (
                  <Tr key={topElement.rank} p={0} m={0}>
                    <Td>
                      {topElement.rank} {topElement.categoryName}
                    </Td>
                    <Td isNumeric borderLeft="1px solid">
                      {topElement.earnings}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default CategoryCard;
