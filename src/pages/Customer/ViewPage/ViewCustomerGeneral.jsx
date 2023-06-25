import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const ViewCustomerGeneral = ({ generalInfo, wallet }) => {
  return (
    <Box>
      {/* <Grid templateColumns="repeat(5, 1fr)" gap={6} my={4}>
        <GridItem w="100%" colSpan={1}>
          Merchant Name:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Merchant Chinese Name:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Brand Name:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Currencies:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Language:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Player Prefix:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          URL Domain:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Contract Uploaded:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Created Date:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>
      </Grid> */}

      <Grid templateColumns="repeat(5, 1fr)" gap={6} my={4}>
        <GridItem w="100%" colSpan={1}>
          Merchant Name:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {generalInfo.merchant_name}
        </GridItem>

        {wallet === "transfer" && (
          <>
            <GridItem w="100%" colSpan={1}>
              Merchant Chinese Name:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.merchantChineseName}
            </GridItem>
          </>
        )}

        <GridItem w="100%" colSpan={1}>
          Brand Name:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {generalInfo.brand_name}
        </GridItem>

        <GridItem w="100%" colSpan={1}>
          Currencies:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {generalInfo.currency}
        </GridItem>

        {wallet === "seamless" && (
          <>
            <GridItem w="100%" colSpan={1}>
              Default Currency:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.default_currency}
            </GridItem>

            <GridItem w="100%" colSpan={1}>
              Regulations:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.regulation}
            </GridItem>

            <GridItem w="100%" colSpan={1}>
              License:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.license}
            </GridItem>

            <GridItem w="100%" colSpan={1}>
              Office IP:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.office_ip}
            </GridItem>
          </>
        )}

        <GridItem w="100%" colSpan={1}>
          Language:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {generalInfo.lang}
        </GridItem>

        {wallet === "transfer" && (
          <>
            <GridItem w="100%" colSpan={1}>
              Player Prefix:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.player_prefix}
            </GridItem>

            <GridItem w="100%" colSpan={1}>
              URL Domain Whitelist:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.url_domain_whitelist}
            </GridItem>

            <GridItem w="100%" colSpan={1}>
              IP Whitelist:
            </GridItem>
            <GridItem w="100%" colSpan={4}>
              {generalInfo.ip_whitelist}
            </GridItem>
          </>
        )}

        <GridItem w="100%" colSpan={1}>
          Contract Uploaded:
        </GridItem>
        <GridItem w="100%" colSpan={4}></GridItem>

        <GridItem w="100%" colSpan={1}>
          Created Date:
        </GridItem>
        <GridItem w="100%" colSpan={4}>
          {generalInfo.created_date}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ViewCustomerGeneral;
