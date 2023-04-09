import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Appbar from "../../Components/Appbar";
import styles from "../Postform/Postform.module.scss";
const Postform = () => {
  return (
    <Box>
      <Appbar />
      <Box className={styles.mainbox}>
        <Typography variant="h3" component="h2">
          You Can Create Your Content Here
        </Typography>
        <Box className={styles.formbox}>
          <TextField
            id="outlined-multiline-static"
            label="write your content"
            multiline
            rows={4}
          />
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Postform;
