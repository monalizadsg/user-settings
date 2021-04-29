import React from "react";
import { List, Typography, ListItem } from "@material-ui/core";
import "./UserSettingSideNav.scss";

const sideNavMenus = [
  { name: "Profile details", plan: "", index: 0 },
  { name: "Integrations", plan: "", index: 1 },
  { name: "Insights & Analytics", plan: "Upgrade", index: 2 },
  { name: "Subscription", plan: "", index: 3 },
  { name: "Billing", plan: "", index: 4 },
];

const UserSettingSideNav = ({ selected, onClickMenu }) => {
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
          {sideNavMenus.map((item) => (
            <ListItem
              className='user-menu'
              button
              key={item.name}
              selected={selected === item.index}
              onClick={() => onClickMenu(item.index)}
            >
              {item.name}
              {item.plan && <span className='user-menu-plan'>{item.plan}</span>}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default UserSettingSideNav;
