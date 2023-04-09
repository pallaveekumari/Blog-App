
import { Box } from "@mui/material";
import styles from "./Homepage.module.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useNavigate } from "react-router-dom";
import Appbar from "../../Components/Appbar";


export default function Homepage() {
 const navigate = useNavigate();
 return (
   <Box>
     <Appbar />
     <Box className={styles.mainBox}>
       <Box className={styles.sidebarBox}>
         <Box
           onClick={() => {
             navigate("/users");
           }}
           className={styles.userTextBox}
         >
           {" "}
           <PeopleAltIcon /> User Section
         </Box>
         <Box
           onClick={() => {
             navigate("/posts");
           }}
           className={styles.userTextBox}
         >
           {" "}
           <LocalPostOfficeIcon /> Posts Section
         </Box>
         <Box
           onClick={() => {
             navigate("/analytics");
           }}
           className={styles.userTextBox}
         >
           <AnalyticsIcon />
           Analytics Section
         </Box>
       </Box>
       <Box className={styles.mainContentBox}></Box>
     </Box>
   </Box>
 );
}


