
import React from "react";
import { Routes, Route } from "react-router-dom";
import Analytics from "./Analytics/Analytics";
import Homepage from "./Homepage/Homepage";
import Postpage from "./PostPage/Postpage";
import Userpage from "./UserPage/Userpage";



const AllRoutes = () => {
 return (
   <Routes>
     <Route path={"/"} element={<Homepage />} />
     <Route path={"/users"} element={<Userpage />} />
     <Route path={"/posts"} element={<Postpage />} />
     <Route path={"/analytics"} element={<Analytics />} />
   </Routes>
 );
};
export default AllRoutes;