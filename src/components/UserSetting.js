import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
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
    display: "flex",
    justifyContent: "space-between",
    padding: "45px 20px",
  },
}));

const UserSetting = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerDisplay}>
      <Container maxWidth='xl'>
        <div className={classes.userSetting}>
          <UserSettingSideNav />
          <UserSettingContentLayout>
            <Switch>
              <Route exact path='/' component={ProfileDetails} />
              <Route path='/profile-details' component={ProfileDetails} />
              <Route path='/integrations' component={Integrations} />
              <Route
                path='/insights-and-analytics'
                component={InsightsAnalytics}
              />
              <Route path='/subscription' component={Subscription} />
              <Route path='/billing' component={Billing} />
            </Switch>
          </UserSettingContentLayout>
        </div>
      </Container>
    </div>
  );
};

export default UserSetting;
