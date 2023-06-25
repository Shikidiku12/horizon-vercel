import { useState } from "react";
import TransferContext from "./TransferContext";

const TransferContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  console.log("This is the form data", formData);
  return (
    <TransferContext.Provider value={{ formData, setFormData }}>
      {children}
    </TransferContext.Provider>
  );
};

export default TransferContextProvider;
