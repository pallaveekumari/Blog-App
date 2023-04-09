import React from "react";
import { Routes, Route } from "react-router-dom";
import Analytics from "./UserAnalytics/UserAnalytics";
import Homepage from "./Homepage/Homepage";
import Loginform from "./LoginForm/Loginform";
import Postform from "./Postform/Postform";
import Postpage from "./PostPage/Postpage";
import Userform from "./UserForm/Userform";
import Userpage from "./UserPage/Userpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/users"} element={<Userpage />} />
      <Route path={"/posts"} element={<Postpage />} />
      <Route path={"/analytics"} element={<Analytics />} />
      <Route path={"/userform"} element={<Userform />} />
      <Route path={"/login"} element={<Loginform />} />
      <Route path={"/postform"} element={<Postform />} />
    </Routes>
  );
};
export default AllRoutes;
