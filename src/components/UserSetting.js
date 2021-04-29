import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import UserSettingSideNav from "./UserSettingSideNav";
import UserSettingContentLayout from "./UserSettingContentLayout";
import ProfileDetails from "./ProfileDetails";
import Integrations from "./Integrations";
import InsightsAnalytics from "./InsightsAnalytics";
import Subscription from "./Subscription";
import Billing from "./Billing";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerDisplay: {
    width: "100%",
    backgroundColor: "#ECEEEF",
  },
  userSetting: {
    // height: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "space-between",
    padding: "45px 20px",
  },
}));

const UserSetting = () => {
  const classes = useStyles();
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const handleClickMenu = (index) => {
    setSelectedMenuIndex(index);
  };

  const renderMenuContent = () => {
    if (selectedMenuIndex === 0) {
      return <ProfileDetails />;
    }
    if (selectedMenuIndex === 1) {
      return <Integrations />;
    }
    if (selectedMenuIndex === 2) {
      return <InsightsAnalytics />;
    }
    if (selectedMenuIndex === 3) {
      return <Subscription />;
    }
    if (selectedMenuIndex === 4) {
      return <Billing />;
    }
  };

  return (
    <div className={classes.containerDisplay}>
      <Container maxWidth='xl'>
        <div className={classes.userSetting}>
          <UserSettingSideNav
            selected={selectedMenuIndex}
            onClickMenu={handleClickMenu}
          />
          <UserSettingContentLayout>
            {renderMenuContent()}
          </UserSettingContentLayout>
        </div>
      </Container>
    </div>
  );
};

export default UserSetting;
