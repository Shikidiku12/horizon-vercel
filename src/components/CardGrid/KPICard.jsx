import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Text,
  HStack,
  Box,
  Image,
  Stack,
  Icon,
  Center,
} from "@chakra-ui/react";
import React from "react";
// import { ReactComponent as ChipsIcon } from "../../logo/chips.svg";
// import { ReactComponent as RibbonIcon } from "../../logo/ribbon.svg";
// import { ReactComponent as MoneyBagIcon } from "../../logo/moneyBag.svg";
// import { ReactComponent as MoneyIcon } from "../../logo/money.svg";
// import { ReactComponent as SlotIcon } from "../../logo/slot.svg";
import { TbPokerChip } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { GiLever, GiRibbonMedal } from "react-icons/gi";

const iconMap = {
  chips: TbPokerChip,
  ribbon: GiRibbonMedal,
  moneyBag: TbPigMoney,
  money: GiPayMoney,
  slot: GiLever,
};

const KPICard = ({ data }) => {
  const IconComponent = iconMap[data.logo];

  return (
    <Card color="horizon.300" boxShadow="lg">
      <CardBody>
        <Stat>
          <HStack mb={3}>
            <Stack spacing={1}>
              <Text fontWeight="extrabold">{data.title}</Text>
              {/* <Text>{data.timeSpan}</Text>a */}
              <StatLabel>{data.timeSpan}</StatLabel>
            </Stack>
            <Icon as={IconComponent} boxSize={10} ml={2} />
          </HStack>

          <HStack>
            <StatNumber>{data.currentValue}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {data.percent}%
            </StatHelpText>
          </HStack>

          <StatHelpText>Last month: {data.lastValue}</StatHelpText>
        </Stat>
      </CardBody>
    </Card>
  );
};

export default KPICard;
