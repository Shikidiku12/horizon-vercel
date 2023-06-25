import { useContext } from "react";
import axios from "../services/axios";
import AuthContext from "../context/AuthContext";

const useRefreshToken = () => {
  console.log("We are at use refresh token");
  const { auth, setAuth } = useContext(AuthContext);
  console.log("This is authn before", auth);
  const cookies = document.cookie.split("; ");
  let jwt = null;

  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=");
    if (name === "jwt") {
      jwt = decodeURIComponent(value);
    }
  });
  const refresh = async () => {
    const controller = new AbortController();
    const { signal } = controller;
    const response = await axios.post("/refresh", JSON.stringify({ jwt }), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      signal,
    });
    // const response = await axios.get("/refresh", {
    //   withCredentials: true,
    // });
    // ##############################################################
    // setAuth((prev) => {
    //   console.log("Dapat nag GET refresh to");
    //   console.log("Ito dapat yung prev", JSON.stringify(prev));
    //   console.log(response.data.accessToken);
    //   return {
    //     ...prev,
    //     roles: response.data.roles,
    //     accesstoken: response.data.accessToken,
    //   };
    // });
    console.log(response.data);
    setAuth({
      user: response.data.user,
      roles: response.data.role,
      // accessToken: response.data.access_token,
      accessToken: response.data.accessToken, // magigin access_token dapat to
    });
    console.log("This is auth now", auth);
    return () => controller.abort();
    // return response.data.accesstoken;
  };
  return refresh;
};

export default useRefreshToken;
