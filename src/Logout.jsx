import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Note: This will not redirect to login page. Kasi valid pa yung token ko

const Logout = () => {
  const navigate = useNavigate();

  // // Use this kapag may backend na
  // useEffect(()=>{
  //     // axios call to logout
  // })

  const handleRedirect = () => {
    navigate("/login"); // Redirects to the '/about' route
  };

  handleRedirect();
};

export default Logout;
