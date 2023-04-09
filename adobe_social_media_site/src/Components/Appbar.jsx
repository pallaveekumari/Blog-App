import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Appbar.module.scss";
import { useNavigate } from "react-router-dom";


function Appbar() {
 const navigate = useNavigate();
 return (
   <AppBar position="static">
     <div className={styles.mainContainer}>
       <img
         onClick={() => {
           navigate("/");
         }}
         className={styles.logo}
         src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png"
         alt=""
       />


       <Box>
         <Tooltip title="Open settings">
           <IconButton sx={{ p: 0 }}>
             <Avatar
               className={styles.sideImageIcon}
               alt="Semy Sharp"
               src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
             />
           </IconButton>
         </Tooltip>
       </Box>
     </div>
   </AppBar>
 );
}
export default Appbar;



