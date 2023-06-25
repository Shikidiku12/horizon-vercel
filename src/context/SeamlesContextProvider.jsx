import { useState } from "react";
import { createContext } from "react";
import SeamlesContext from "./SeamlesContext";

// const SeamlessContext = createContext();

const SeamlesContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  // console.log("This is the form data", formData);
  return (
    <SeamlesContext.Provider value={{ formData, setFormData }}>
      {children}
    </SeamlesContext.Provider>
  );
};

export default SeamlesContextProvider;
