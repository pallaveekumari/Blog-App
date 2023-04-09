import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

import UserAnalytics from "./UserAnalytics/UserAnalytics";
import PostAnalytics from "./PostAnalytics/PostAnalytics";
import Userform from "./UserForm/Userform";
import Loginform from "./LoginForm/Loginform";

import UserList from "./UserList/UserList";
import Postform from "./Postform/Postform";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/users"} element={<UserList />} />
     
      <Route path={"/useranalytics"} element={<UserAnalytics />} />
      <Route path="/postanalytics" element={<PostAnalytics />} />
      <Route path={"/userform"} element={<Userform />} />
      <Route path={"/login"} element={<Loginform />} />
      <Route path={"/postform"} element={<Postform />} />
    </Routes>
  );
};

export default AllRoutes;
