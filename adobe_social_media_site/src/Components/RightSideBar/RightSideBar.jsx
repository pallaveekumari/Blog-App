import React, { useEffect } from "react";
import styles from "./RightSideBar.module.scss";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RightSideBar = () => {
  const authReducer = useSelector((store) => store.AuthReducer);

  const navigate = useNavigate();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "rgb(67, 0, 65)",
    "&:hover": {
      backgroundColor: "rgb(67, 0, 65)",
    },
  }));

  useEffect(() => {}, []);

  return (
    <Box className={styles.mainContainer}>
      <img
        className={styles.logo}
        src="https://www.seekpng.com/png/detail/39-397336_user-android-user-icon.png"
        alt=""
      />
      {authReducer.isAuth ? (
        <Box className={styles.userInfoBox}>
          <p>{authReducer.loggedInUser.name}</p>
          <p>{authReducer.loggedInUser.email}</p>
        </Box>
      ) : (
        <Box className={styles.authButtonBox}>
          <ColorButton
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </ColorButton>
          <p>or</p>
          <ColorButton
            variant="contained"
            onClick={() => {
              navigate("/userform");
            }}
          >
            Create User
          </ColorButton>
        </Box>
      )}
    </Box>
  );
};

export default RightSideBar;
