import { createContext } from "react";

// const SeamlesContext = createContext();

const SeamlesContext = createContext({
  merchant_name: "",
  brand_name: "",
  regulation: "",
  license: "",
  office_ip: "",
  lang: "",
  currency: "",
  default_currency: "",
  business_contact_email: "",
  billing_contact_email: "",
  technical_contact_email: "",
  customer_service_contact_email: "",
  maintainer_contact_email: "",
  company_contact_email: "",
  staging: {
    desktopURL: "",
    mobileURL: "",
    testAccounts: "",
    walletEndpoint: "",
    walletIP: "",
    walletPort: "",
    serviceAPIIP: "",
  },
  production: {
    desktopURL: "",
    mobileURL: "",
    testAccounts: "",
    walletEndpoint: "",
    walletIP: "",
    walletPort: "",
    serviceAPIIP: "",
    IMSname: "",
    IMSemail: "",
  },
});

export default SeamlesContext;
