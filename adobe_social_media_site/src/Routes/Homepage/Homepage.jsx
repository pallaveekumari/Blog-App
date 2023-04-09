import Appbar from "../../Components/Appbar";
import { Box, Button } from "@mui/material";
import styles from "./Homepage.module.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useNavigate } from "react-router-dom";
import Content from "../../Components/Contents/Content";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Appbar />
      <Box className={styles.createPostBox} ></Box>
      <Box className={styles.mainBox}>
        <Box className={styles.sidebarBox}>
          <Box
            onClick={() => {
              navigate("/users");
            }}
            className={styles.userTextBox}
          >
            {" "}
            <PeopleAltIcon /> Users List
          </Box>

          <Box
            onClick={() => {
              navigate("/useranalytics");
            }}
            className={styles.userTextBox}
          >
            <AnalyticsIcon />
            User Analytics
          </Box>
          <Box
            onClick={() => {
              navigate("/postanalytics");
            }}
            className={styles.userTextBox}
          >
            <AnalyticsIcon />
            Post Analytics
          </Box>
        </Box>

        <Content />
        <Box className={styles.UserDetailsBox}>
          <RightSideBar />
        </Box>
      </Box>
    </Box>
  );
}
