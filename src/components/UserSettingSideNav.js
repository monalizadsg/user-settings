import React from "react";
import { List, Typography, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./UserSettingSideNav.scss";

const sideNavMenus = [
  { name: "Profile details", path: "/profile-details", plan: "", index: 0 },
  { name: "Integrations", path: "/integrations", plan: "", index: 1 },
  {
    name: "Insights & Analytics",
    path: "/insights-and-analytics",
    plan: "Upgrade",
    index: 2,
  },
  { name: "Subscription", path: "/subscription", plan: "", index: 3 },
  { name: "Billing", path: "/billing", plan: "", index: 4 },
];

const UserSettingSideNav = () => {
  return (
    <div className='user-setting-side-nav'>
      {/* header */}
      <div className='side-nav-header'>
        <div className='user-avatar'>
          <Typography className='avatar-content'>HE</Typography>
        </div>
        <div className='user-details'>
          <Typography className='user-plan'>premium</Typography>
          <Typography className='user-name'>Jonas Hammarberg</Typography>
        </div>
      </div>
      {/* menus */}
      <div className='user-menus'>
        <List>
          {sideNavMenus.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className='nav-link'
              activeClassName='active-nav-link'
              exact
            >
              <ListItem className='user-menu' button>
                {item.name}
                {item.plan && (
                  <span className='user-menu-plan'>{item.plan}</span>
                )}
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </div>
  );
};

export default UserSettingSideNav;
