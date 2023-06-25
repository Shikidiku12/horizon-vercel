import { createContext } from "react";

const TransferContext = createContext({
  merchantName: "",
  merchantChineseName: "",
  brandName: "",
  language: "",
  currencies: "",
  prefix: "",
  domainWhitelist: "",
  IPWhitelist: "",
  businessContact: "",
  billingContact: "",
  technicalContact: "",
  customerContact: "",
  maintainerContact: "",
  companyContact: "",
});

export default TransferContext;
