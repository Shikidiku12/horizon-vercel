import Login from "./Login";
import Register from "./pages/Users/Register";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddNew from "./pages/Customer/AddNew/AddNew";
import EditCustomer from "./pages/Customer/EditCustomer";
import ViewPage from "./pages/Customer/ViewPage/ViewPage";
import Billing from "./pages/Billing/Billing";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Unauthorized from "./pages/Unauthorized";
import Users from "./pages/Users/Users";
import Layout from "./pages/Layout";
import Missing from "./pages/Missing";
import RequireAuth from "./components/RequireAuth";
import ViewCustomerPage from "./pages/Customer/ViewPage/ViewCustomerPage";
import Logout from "./Logout";
import PersistLogin from "./components/PersistLogin";

const ROLES = {
  User: null,
  Billing: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      {/* <Route path="/"> */}
      {/* Public Routes */}
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="unauthorized" element={<Unauthorized />}></Route>

      {/* Protected routes inside the web app */}
      <Route element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="logout" element={<Logout />}></Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            {/* <Route path="dashboard" element={<Dashboard />}></Route> */}
            <Route path="addnew" element={<AddNew />}></Route>
            <Route path="viewpage" element={<ViewPage />}></Route>
            <Route
              path="viewpage/:customer"
              element={<ViewCustomerPage />}
            ></Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["billing"]} />}>
            <Route path="editcustomer" element={<EditCustomer />}></Route>
            <Route path="support" element={<Support />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="billing" element={<Billing />}></Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["management"]} />}>
            <Route path="users" element={<Users />}></Route>
            {/* <Route path="register" element={<Register />}></Route> */}
          </Route>
        </Route>
      </Route>

      {/* Wrong pathsuffix */}
      <Route path="*" element={<Missing />}></Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
