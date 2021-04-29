import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
}));

const UserSettingContentLayout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default UserSettingContentLayout;
