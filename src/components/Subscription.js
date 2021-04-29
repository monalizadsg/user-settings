import React, { useState } from "react";
import { Typography, Menu, MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Subscription.scss";
import SubscriptionAddUser from "./SubscriptionAddUser";

// dummy data
const data = [
  {
    name: "Jonas Hammarberg",
    avatar: "AB",
    email: "jonas.hammarberg@meetingmaker.se",
    role: "admin",
    subscription: "Enterprise",
    lastActivity: "April 2, 2021",
  },
  {
    name: "Jonas Hammarberg",
    avatar: "AB",
    email: "jonas.hammarberg@meetingmaker.se",
    role: "user",
    subscription: "Enterprise",
    lastActivity: "April 2, 2021",
  },
  {
    name: "Jonas Hammarberg",
    avatar: "AB",
    email: "jonas.hammarberg@meetingmaker.se",
    role: "user",
    subscription: "Enterprise",
    lastActivity: "April 2, 2021",
  },
];

// more icon menu items
const moreIconMenus = [
  "Edit user info",
  "Make Admin",
  "Transfer spaces",
  "Inactive user",
];

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #ECEEEF",
    backgroundColor: "#fff",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles({
  tableHeader: {
    borderBottom: "none",
    backgroundColor: "#ffffff",
    fontSize: 15,
    fontFamily: "MediumLLWeb-Regular",
  },
  tableBody: {
    backgroundColor: "#F4F6F8",
    fontSize: 12,
    fontFamily: "MediumLLWeb-Bold",
  },
  menuItem: {
    fontSize: 14,
    fontFamily: "MediumLLWeb-Regular",
    color: "#000",
  },
  menuBulletPoint: {
    height: 8,
    width: 8,
    backgroundColor: "#1fda8b",
    borderRadius: "50%",
    marginRight: 5,
  },
});

const Subscription = () => {
  const classes = useStyles();
  const [isAddUser, setIsAddUser] = useState(false);
  const [selectMenu, setSelectMenu] = useState(null);

  const handleCloseAddUser = () => {
    setIsAddUser(false);
  };

  const handleOpenAddUser = () => {
    setIsAddUser(true);
  };

  const handleClickMoreIcon = (event) => {
    setSelectMenu(event.currentTarget);
  };

  const handleClose = () => {
    setSelectMenu(null);
  };

  return (
    <>
      {!isAddUser && (
        <div className='subscription'>
          {/* header */}
          <div className='subscription-header'>
            <Typography className='title'>Subscription</Typography>
            <button className='button' onClick={handleOpenAddUser}>
              Add user
            </button>
          </div>

          {/* sub-heading */}
          <div className='subscription-sub-heading'>
            <Typography className='sub-heading-paragraph'>
              <span className='sub-heading-highlight'>3 of 10 </span> user seats
              allocated
            </Typography>
          </div>

          {/* table */}
          <TableContainer className='table-container'>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell classes={{ root: classes.tableHeader }}>
                    Name
                  </TableCell>
                  <TableCell classes={{ root: classes.tableHeader }}>
                    Role
                  </TableCell>
                  <TableCell classes={{ root: classes.tableHeader }}>
                    Subscription
                  </TableCell>
                  <TableCell classes={{ root: classes.tableHeader }}>
                    Last Activity
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableHeader }}
                    align='right'
                  ></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((p, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        classes={{ root: classes.tableBody }}
                        component='th'
                        scope='row'
                      >
                        <div className='tablebody-name-wrapper'>
                          <div className='tablebody-name-avatar'>
                            {p.avatar}
                          </div>
                          <div className='tablebody-name-details'>
                            <div className='tablebody-details-name'>
                              {" "}
                              {p.name}
                            </div>
                            <div className='tablebody-details-email'>
                              {p.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tableBody }}
                        style={{ textTransform: "uppercase" }}
                      >
                        {p.role}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        {p.subscription}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        {p.lastActivity}
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tableBody }}
                        style={{ paddingRight: "114px" }}
                        align='right'
                      >
                        <MoreHorizIcon
                          className='tablebody-more-icon'
                          onClick={handleClickMoreIcon}
                        />
                        <StyledMenu
                          anchorEl={selectMenu}
                          keepMounted
                          open={Boolean(selectMenu)}
                          onClose={handleClose}
                        >
                          {moreIconMenus.map((menu, index) => (
                            <MenuItem
                              key={index}
                              className={classes.menuItem}
                              onClick={handleClose}
                            >
                              <span className={classes.menuBulletPoint}></span>
                              {menu}
                            </MenuItem>
                          ))}
                        </StyledMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {isAddUser && <SubscriptionAddUser onClose={handleCloseAddUser} />}
    </>
  );
};

export default Subscription;
