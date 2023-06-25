import { useRef, useState, useEffect, FormEvent } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../services/axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";

const NAME_REGEX = /^[A-Za-z\s]+$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_.]).{8,24}/;
const REGISTER_URL = "/register";

const Register = () => {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const userRef = useRef(null);
  const roleRef = useRef(null);
  const errRef = useRef(null);

  const [firstname, setFirstname] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [role, setRole] = useState("");
  const [roleFocus, setRoleFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //   Focusing at the username field at load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Checking the validation of first name
  useEffect(() => {
    const result = NAME_REGEX.test(firstname);
    console.log(result);
    console.log(firstname);
    setValidFirstname(result);
  }, [firstname]);

  // Checking the validation of Last name
  useEffect(() => {
    const result = NAME_REGEX.test(lastname);
    console.log(result);
    console.log(lastname);
    setValidLastname(result);
  }, [lastname]);

  // Checking the validation of email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  // Checking the vlaidation of the username
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  //   Checkingthe validation of password
  useEffect(() => {
    // const result = PWD_REGEX.test(pwd);
    // console.log("Use effect for regex tester");
    // console.log(result);
    // console.log(pwd);
    // setValidPwd(result);
    setValidPwd(true);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  //   For resetting error message on reload of component
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, firstname, lastname, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // If button enabled with JS hack
    console.log("Submitted");
    console.log(user);
    const checkUser = USER_REGEX.test(user);
    // const checkPwd = PWD_REGEX.test(pwd);
    const checkPwd = true;
    console.log("Checkuser and CheckPWD: ", checkUser, checkPwd);
    if (!checkUser || !checkPwd) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const controller = new AbortController();
      const { signal } = controller;
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          firstname,
          lastname,
          user,
          email,
          pwd,
          role,
        }),
        // JSON.stringify({
        //   firstname: firstname,
        //   lastname: lastname,
        //   username: user,
        //   email: email,
        //   password: pwd,
        //   role: role,
        // }), // dapat array yung role in the future. Sabihin kay RJ
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          signal,
        }
      );
      console.log(response.data);
      // console.log(response.data.accessToken);
      setSuccess(true);
      return () => controller.abort();
      // clear the input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Usaername Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      setErrMsg("Registration Failed");
      // errRef.current.focus();
    }
  };

  return (
    <>
      <Box width="100vw" height="100vh" overflow="hidden">
        <Image
          src="../public/img/login.jpg"
          alt="Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />

        <Box
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
          borderRadius="20px"
          bg="whiteAlpha.800"
          width="40%"
          height="75%"
          p={6}
        >
          <Image
            src="../public/img/horizon-logo.png"
            alt="Horizon Image"
            mt={10}
            mb={16}
          />

          {success ? (
            <Box>
              <Heading as="h1" size="xl">
                Registration Successful
              </Heading>
            </Box>
          ) : (
            <Box>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="firstname">
                    First Name:
                    {validFirstname && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faCheck} />
                      </Box>
                    )}
                    {validFirstname === false && firstname && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faTimes} />
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="text"
                    id="firstname"
                    ref={firstnameRef}
                    onChange={(e) => setFirstname(e.target.value)}
                    aria-invalid={validFirstname ? "false" : "true"}
                    aria-describedby="firstnamenote"
                    onFocus={() => setFirstnameFocus(true)}
                    onBlur={() => setFirstnameFocus(false)}
                  />
                  {firstnameFocus && firstname && !validFirstname && (
                    <p id="firstnamenote">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      First name must be characters only.
                    </p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="lastname">
                    Last Name:
                    {validLastname && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faCheck} />
                      </Box>
                    )}
                    {validLastname === false && user && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faTimes} />
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="text"
                    id="lastname"
                    ref={lastnameRef}
                    onChange={(e) => setLastname(e.target.value)}
                    aria-invalid={validLastname ? "false" : "true"}
                    aria-describedby="lastnamenote"
                    onFocus={() => setLastnameFocus(true)}
                    onBlur={() => setLastnameFocus(false)}
                  />
                  {lastnameFocus && lastname && !validLastname && (
                    <p id="lastnamenote">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Last name must be characters only.
                    </p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="username">
                    Username:
                    {validName && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faCheck} />
                      </Box>
                    )}
                    {validName === false && user && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faTimes} />
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  {userFocus && user && !validName && (
                    <p>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter. <br />
                      Letters, numbers, underscored, hypens allowed
                    </p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="email">
                    Email:
                    {validEmail && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faCheck} />
                      </Box>
                    )}
                    {validEmail === false && user && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faTimes} />
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="text"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  {emailFocus && email && !validEmail && (
                    <p id="emailnote">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Follow email format (e.g. test@gmail.com)
                    </p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="password">
                    Password:
                    {validPwd && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faCheck} />
                      </Box>
                    )}
                    {validPwd === false && pwd && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faTimes} />
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  {pwdFocus && !validPwd && pwd && (
                    <p id="pwdnote">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters. <br />
                      Must include uppercase and lowercase letters, a number,
                      and a special character. <br />
                      Allowed special characters:
                      <Box as="span" aria-label="exclamantion mark">
                        !
                      </Box>
                      <Box as="span" aria-label="at symbol">
                        @
                      </Box>
                      <Box as="span" aria-label="hashtag">
                        #
                      </Box>
                      <Box as="span" aria-label="dollar sign">
                        $
                      </Box>
                      <Box as="span" aria-label="percent">
                        %
                      </Box>
                      <Box as="span" aria-label="underscore">
                        _
                      </Box>
                      <Box as="span" aria-label="dot">
                        .
                      </Box>
                    </p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="confirm_pwd">
                    Confirm Password:
                    {validMatch && matchPwd && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faCheck} />
                      </Box>
                    )}
                    {validMatch === false && matchPwd && (
                      <Box as="span">
                        <FontAwesomeIcon icon={faTimes} />
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  {matchFocus && !validMatch && matchPwd && (
                    <p>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="roles">Roles:</FormLabel>
                  <Select
                    id="roles"
                    ref={roleRef}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    aria-describedby={role}
                    // onFocus={() => setRoleFocus(true)}
                    // onBlur={() => setRoleFocus(false)}
                  >
                    <option disabled defaultValue>
                      Select a role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="billing">Billing</option>
                    <option value="staff">Staff</option>
                    <option value="management">Management</option>
                  </Select>
                  {/* {roleFocus && role === "admin" && (
                    <p id="admin">This role is for highest access roles</p>
                  )}
                  {roleFocus && role === "billing" && (
                    <p id="billing">This role is for billing access roles</p>
                  )}
                  {roleFocus && role === "staff" && (
                    <p id="staff">This role is for lowest access roles</p>
                  )}
                  {roleFocus && role === "management" && (
                    <p id="management">This role is for billing access roles</p>
                  )} */}
                </FormControl>

                {/* Add other form elements here */}

                <Button
                  type="submit"
                  disabled={!validName || !validPwd || !validMatch || !role}
                  mt={3}
                >
                  Submit
                </Button>
              </form>
            </Box>
          )}
        </Box>
      </Box>

      {/* <Box width="100vw" height="100vh" overflow="hidden">
        <Image
          src="../public/img/login.jpg"
          alt="Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />
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
          {success ? (
            <Box>
              <Heading as={"xl"}>Registration Successful</Heading>
            </Box>
          ) : (
            <Box>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                  Username:
                  {validName && (
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  )}
                  {validName === false && user && (
                    <span>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                ></input>
                {userFocus && user && !validName && (
                  <p>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter. <br />
                    Letters, numbers, underscored, hypens allowed
                  </p>
                )}
                <label htmlFor="password">
                  Password:
                  {validPwd && (
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  )}
                  {validPwd === false && pwd && (
                    <span>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  )}
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                {pwdFocus && !validPwd && pwd && (
                  <p id="pwdnote">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number, and
                    a special character. <br />
                    Allowed special characters:
                    <span aria-label="exclamantion mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                    <span aria-label="underscore">_</span>
                    <span aria-label="dot">.</span>
                  </p>
                )}
                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  {validMatch && matchPwd && (
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  )}
                  {validMatch === false && matchPwd && (
                    <span>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  )}
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                {matchFocus && !validMatch && matchPwd && (
                  <p>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>
                )}

                <label htmlFor="roles">Roles:</label>
                <select
                  id="roles"
                  ref={roleRef}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  aria-describedby={role}
                  onFocus={() => setRoleFocus(true)}
                  onBlur={() => setRoleFocus(false)}
                >
                  <option disabled selected>
                    Select an role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="billing">Billing</option>
                  <option value="staff">Staff</option>
                  <option value="management">Management</option>
                </select>
                {roleFocus && role === "admin" && (
                  <p id="admin">This role is for highest access roles</p>
                )}
                {roleFocus && role === "billing" && (
                  <p id="billing">This role is for billing access roles</p>
                )}
                {roleFocus && role === "staff" && (
                  <p id="staff">This role is for lowest access roles</p>
                )}
                {roleFocus && role === "management" && (
                  <p id="management">This role is for billing access roles</p>
                )}

                <button
                  disabled={
                    !validName || !validPwd || !validMatch || !role
                      ? true
                      : false
                  }
                >
                  Submit
                </button>
              </form>
            </Box>
          )}
        </Box>
      </Box> */}
      {/* {success ? (
        <h1>Registration successful</h1>
      ) : (
        <div>
          {errMsg && (
            <p ref={errRef} aria-live="assertive">
              {errMsg}
            </p>
          )}
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              {validName && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {validName === false && user && (
                <span>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            ></input>
            {userFocus && user && !validName && (
              <p>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter. <br />
                Letters, numbers, underscored, hypens allowed
              </p>
            )}
            <label htmlFor="password">
              Password:
              {validPwd && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {validPwd === false && pwd && (
                <span>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            {pwdFocus && !validPwd && pwd && (
              <p id="pwdnote">
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters. <br />
                Must include uppercase and lowercase letters, a number, and a
                special character. <br />
                Allowed special characters:
                <span aria-label="exclamantion mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
                <span aria-label="underscore">_</span>
                <span aria-label="dot">.</span>
              </p>
            )}
            <label htmlFor="confirm_pwd">
              Confirm Password:
              {validMatch && matchPwd && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {validMatch === false && matchPwd && (
                <span>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            {matchFocus && !validMatch && matchPwd && (
              <p>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
            )}

            <label htmlFor="roles">Roles:</label>
            <select
              id="roles"
              ref={roleRef}
              onChange={(e) => setRole(e.target.value)}
              required
              aria-describedby={role}
              onFocus={() => setRoleFocus(true)}
              onBlur={() => setRoleFocus(false)}
            >
              <option disabled selected>
                Select an role
              </option>
              <option value="admin">Admin</option>
              <option value="billing">Billing</option>
              <option value="staff">Staff</option>
              <option value="management">Management</option>
            </select>
            {roleFocus && role === "admin" && (
              <p id="admin">This role is for highest access roles</p>
            )}
            {roleFocus && role === "billing" && (
              <p id="billing">This role is for billing access roles</p>
            )}
            {roleFocus && role === "staff" && (
              <p id="staff">This role is for lowest access roles</p>
            )}
            {roleFocus && role === "management" && (
              <p id="management">This role is for billing access roles</p>
            )}

            <button
              disabled={
                !validName || !validPwd || !validMatch || !role ? true : false
              }
            >
              Submit
            </button>
          </form>
        </div>
      )} */}
    </>
  );
};

export default Register;
