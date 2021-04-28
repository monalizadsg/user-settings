import React from "react";
import { makeStyles } from "@material-ui/styles";
import UserSettingSideNav from "./UserSettingSideNav";

const useStyles = makeStyles((theme) => ({
  userSettingDisplay: {
    backgroundColor: "#ECEEEF",
    height: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 20px 40px 20px",
  },
}));

const UserSettings = () => {
  const classes = useStyles();
  return (
    <div className={classes.userSettingDisplay}>
      <UserSettingSideNav />
    </div>
  );
};

export default UserSettings;
