import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Appbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";


function Appbar() {
  const authReducer = useSelector((store) => store.AuthReducer);
  const [auth, setAuth] = React.useState(false);

  const dispatch = useDispatch();

  const handleChange = () => {
    setAuth(!auth);
  };

  const handleLogOut = () => {
    dispatch(logout());
    setAuth(!auth);
  };
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <div className={styles.mainContainer}>
        <img
          onClick={() => {
            navigate("/");
          }}
          className={styles.logo}
          src="https://logos-download.com/wp-content/uploads/2016/07/Blogger_logo_wordmark.png"
          alt=""
        />

        {authReducer.isAuth && (
          <Box>
            <IconButton sx={{ p: 0 }} onClick={handleChange}>
              <Avatar
                className={styles.sideImageIcon}
                alt="Semy Sharp"
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
              />
            </IconButton>

            {auth && (
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={auth}
                onClose={handleChange}
              >
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            )}
          </Box>
        )}
      </div>
    </AppBar>
  );
}
export default Appbar;
