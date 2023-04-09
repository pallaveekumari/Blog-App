import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./UserAnalytics.module.scss";
import Appbar from "../../Components/Appbar";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { getTopUsers, getUsersCount } from "../../Redux/AppReducer/action";

const UserAnalytics = () => {
  const appReducer = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopUsers());
    dispatch(getUsersCount());
  }, [dispatch]);
  return (
    <Box className={styles.mainContainer}>
      <Appbar />
      <Typography className={styles.heading} variant="h4" component={"div"}>
        User Analytics
      </Typography>
      <Box className={styles.dataMainBox}>
        <Box className={styles.totalUserBox}>
          <Typography
            className={styles.totalUserText}
            variant="p"
            component={"div"}
          >
            Total Number Of Users
          </Typography>
          <Typography
            className={styles.userCount}
            variant="h2"
            component={"div"}
          >
            {appReducer.totalUsers}
          </Typography>
        </Box>
        <Box className={styles.topUsersListBox}>
          <Typography
            className={styles.totalUserText}
            variant="p"
            component={"div"}
          >
            {" "}
            Top 5 Active Users
          </Typography>
          {appReducer.topUsers.map((el, i) => {
            return (
              <Box className={styles.eachUserDetail}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{i + 1}</Avatar>
                <Box className={styles.eachUserTextBox}>
                  <Typography variant="p" component={"div"}>
                    Name : {el.name}
                  </Typography>
                  <Typography variant="p" component={"div"}>
                    Email : {el.email}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default UserAnalytics;
