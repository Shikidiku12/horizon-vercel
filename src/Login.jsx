import { useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import axios from "./services/axios";
import useAuth from "./hooks/useAuth";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

// const LOGIN_URL = "/login";
const LOGIN_URL = "/auth";

const Login = () => {
  // const { setAuth } = useAuth();
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const controller = new AbortController();
      const { signal } = controller;
      console.log("Here are the user and pwd", user, pwd);
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user: user, pwd: pwd }),
        // JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          signal,
        }
      );
      document.cookie = `jwt=${response?.data?.refreshToken}; path=/;`;
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      console.log(roles);
      setAuth({ user, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
      return () => controller.abort();
    } catch (err) {
      // This if statement for error was commented out and not tested before
      if (!err?.resonse) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      console.log(err);
      setErrMsg("Login Failed");
      errRef.current.focus();
    }
  };

  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <Image
        src="../public/img/login.jpg"
        alt="Image"
        objectFit="cover"
        width="100%"
        height="100%"
      />

      {/* Insert other components inside the Box */}
      {/* For example, a text overlay */}
      <Box
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius={"20px"}
        bg={"whiteAlpha.800"}
        width={"400px"}
        height={"500px"}
        p={6}
      >
        <Image
          src="../public/img/horizon-logo.png"
          alt="Horizon Image"
          mt={10}
          mb={16}
        />
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="username" ml={"20px"}>
                Username:
              </FormLabel>
              <Input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                borderRadius={"20px"}
                mb={3}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" ml={"20px"}>
                Password:
              </FormLabel>
              <Input
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                borderRadius={"20px"}
              />
            </FormControl>
            {errMsg && (
              // <Box ref={errRef} aria-live="assertive" ml={"20px"}>
              //   {errMsg}
              // </Box>
              <Alert status="error" ref={errRef} aria-live="assertive" mt={3}>
                <AlertIcon />
                <AlertTitle>Login Failed!</AlertTitle>
                <AlertDescription>{errMsg}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              colorScheme="teal"
              my={3}
              textAlign="left"
              width={"100%"}
              borderRadius={"20px"}
              bg={"horizon.300"}
            >
              Sign In
            </Button>
          </form>
          <Box>
            <Link href="#">Forgot password?</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
