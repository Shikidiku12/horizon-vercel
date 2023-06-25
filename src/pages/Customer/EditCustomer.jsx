import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EditCustomer = () => {
  return (
    <section>
      <Box bg="white" height="41.2px"></Box>
      <h1>Edit Customer</h1>
      <br />
      <Link to="/addnew">Add New</Link>
      <Link to="/viewpage">View Page</Link>
      <br />
    </section>
  );
};

export default EditCustomer;
