import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const ViewCustomerContact = ({ contact }) => {
  return (
    <Box>
      {/* <Grid templateColumns="repeat(5, 1fr)" gap={6} my={4}>
        <GridItem w="100%" colSpan={1}>
          Business Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Billing Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Technical Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Customer Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Maintainer Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Company Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>
      </Grid> */}

      <Grid templateColumns="repeat(5, 1fr)" gap={6} my={4}>
        <GridItem w="100%" colSpan={1}>
          Business Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {contact.business_contact_email}
        </GridItem>

        <GridItem w="100%" colSpan={1}>
          Billing Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {contact.billing_contact_email}
        </GridItem>

        <GridItem w="100%" colSpan={1}>
          Technical Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {contact.technical_contact_email}
        </GridItem>

        <GridItem w="100%" colSpan={1}>
          Customer Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {contact.customer_service_contact_email}
        </GridItem>

        <GridItem w="100%" colSpan={1}>
          Maintainer Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {contact.maintainer_contact_email}
        </GridItem>

        <GridItem w="100%" colSpan={1}>
          Company Contact:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {contact.company_contact_email}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ViewCustomerContact;
