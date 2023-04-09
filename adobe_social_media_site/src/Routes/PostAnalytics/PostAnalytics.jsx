import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import styles from "./PostAnalytics.module.scss";
import Appbar from "../../Components/Appbar/Appbar";
import { deepPurple } from "@mui/material/colors";


const PostAnalytics = () => {
 function wordWrapper(text, limit) {
   var wrappedText = "";
   for (let i = 0; i < limit; i++) {
     wrappedText = wrappedText + text[i];
   }
   wrappedText = wrappedText + " ...";
   return wrappedText;
 }


 function wraperText(text, limit, removeWrap) {
   if (text !== null && text !== undefined && text) {
     if (text.length > limit && removeWrap) {
       return wordWrapper(text, limit);
     } else {
       return text;
     }
   }
 }
 const users = [
   {
     name: "abc",
     content: "a@gmail.coms,jdhmcvsjvcjsvdcsjvcjsdvcdshvcujshdvcsdhvcjsdvcsdvcikdsx",
   },
   {
     name: "def",
     content: "b@gmail.com",
   },
   {
     name: "ghi",
     content: "c@gmail.com",
   },
   {
     name: "jkl",
     content: "d@gmail.com",
   },
   {
     name: "mno",
     content: "e@gmail.com",
   },
 ];
 return (
   <Box className={styles.mainContainer}>
     <Appbar />
     <Typography className={styles.heading} variant="h4" component={"div"}>
       Post Analytics
     </Typography>
     <Box className={styles.dataMainBox}>
       <Box className={styles.totalUserBox}>
         <Typography
           className={styles.totalUserText}
           variant="p"
           component={"div"}
         >
           Total Number Of Posts
         </Typography>
         <Typography
           className={styles.userCount}
           variant="h2"
           component={"div"}
         >
           243
         </Typography>
       </Box>
       <Box className={styles.topUsersListBox}>
         <Typography
           className={styles.totalUserText}
           variant="p"
           component={"div"}
         >
           {" "}
           Top 5 Most Liked Posts
         </Typography>
         {users.map((el, i) => {
           return (
             <Box className={styles.eachUserDetail}>
               <Avatar sx={{ bgcolor: deepPurple[500] }}>{i + 1}</Avatar>
               <Box className={styles.eachUserTextBox}>
                 <Typography variant="p" component={"div"}>
                   {wraperText(el.content, 20, true)}
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


export default PostAnalytics;



