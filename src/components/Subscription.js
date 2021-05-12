import React, { useState } from "react";
import { Typography, Menu, MenuItem, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SubscriptionAddUser from "./SubscriptionAddUser";
import "./Subscription.scss";

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
    padding: 0,
    paddingLeft: 16,
    fontFamily: "MediumLLWeb-Regular",
  },
  tableBody: {
    fontSize: 12,
    fontFamily: "MediumLLWeb-Bold",
    padding: 0,
    borderBottom: "none",
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
  selectInput: {
    backgroundColor: "#F4F6F8",
    fontSize: 12,
    width: "100%",
    fontFamily: "MediumLLWeb-Bold",
    "&:focus": {
      backgroundColor: "#F4F6F8",
    },
  },
  selectDropdownStyle: {
    left: "50%",
    transform: "translateX(-77%) translateY(32%)",
    "& .MuiMenuItem-root": {
      fontFamily: "MediumLLWeb-Regular",
      fontSize: 12,
    },
  },
});

const Subscription = () => {
  const classes = useStyles();
  // dummy data
  const [data, setData] = useState([
    {
      id: 1,
      name: "Jonas Hammarberg",
      avatar: "AB",
      email: "jonas.hammarberg@meetingmaker.se",
      role: "admin",
      subscriptionPlan: "Enterprise",
      lastActivity: "April 2, 2021",
    },
    {
      id: 2,
      name: "Jonas Hammarberg",
      avatar: "AB",
      email: "jonas.hammarberg@meetingmaker.se",
      role: "user",
      subscriptionPlan: "Enterprise",
      lastActivity: "April 2, 2021",
    },
    {
      id: 3,
      name: "Jonas Hammarberg",
      avatar: "AB",
      email: "jonas.hammarberg@meetingmaker.se",
      role: "user",
      subscriptionPlan: "Enterprise",
      lastActivity: "April 2, 2021",
    },
  ]);
  const [isAddUser, setIsAddUser] = useState(false);
  const [selectMenu, setSelectMenu] = useState(null);
  const [allocatedUsers, setAllocatedUsers] = useState({
    current: data.length,
    total: 3,
  });

  const handleSubscriptionPlanChange = (event, id) => {
    const newData = [...data].map((user) =>
      user.id === id
        ? Object.assign(user, { subscriptionPlan: event.target.value })
        : user
    );

    setData(newData);
  };

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

  const handleAddUser = (user) => {
    const newUser = {
      name: `${user.firstName}  ${user.lastName}`,
      avatar: "AB",
      email: user.email,
      role: user.role,
      subscriptionPlan: user.subscription,
      lastActivity: "April 2, 2021",
    };
    const newData = [...data];
    newData.unshift(newUser);
    setData(newData);
  };

  return (
    <>
      {!isAddUser && (
        <div className='subscription'>
          <div className='subscription-header'>
            <Typography className='title'>Subscription</Typography>
            <button className='button' onClick={handleOpenAddUser}>
              Add user
            </button>
          </div>

          <div className='subscription-sub-heading'>
            {allocatedUsers.current > allocatedUsers.total ? (
              <Typography className='sub-heading-highlight'>
                Your current subscription have ({allocatedUsers.total}) users
                and {allocatedUsers.current} users are allocated. Your account
                will be charged with{" "}
                {allocatedUsers.current - allocatedUsers.total} extra user(s).
              </Typography>
            ) : (
              <Typography className='sub-heading-paragraph'>
                <span className='sub-heading-highlight'>
                  {allocatedUsers.current} of {allocatedUsers.total}{" "}
                </span>{" "}
                user seats allocated
              </Typography>
            )}
          </div>

          <TableContainer className='table-container'>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell
                    classes={{ root: classes.tableHeader }}
                  ></TableCell>
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
                    style={{ paddingRight: "50px" }}
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
                        style={{ width: 100 }}
                      >
                        <div
                          className='tablecell avatar-bg-light-gray'
                          style={{ width: 100 }}
                        >
                          <div className='avatar-bg-white'>
                            <div className='avatar'>{p.avatar}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        <div className='tablecell padding-left'>
                          <div className='name-details'>
                            <div className='name'>{p.name}</div>
                            <div className='email'>{p.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        <div
                          style={{ textTransform: "uppercase" }}
                          className='tablecell padding-left'
                        >
                          {p.role}
                        </div>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        <div className='tablecell padding-left'>
                          <Select
                            value={p.subscriptionPlan}
                            onChange={(event) =>
                              handleSubscriptionPlanChange(event, p.id)
                            }
                            disableUnderline
                            classes={{ root: classes.selectInput }}
                            MenuProps={{
                              classes: { paper: classes.selectDropdownStyle },
                              getContentAnchorEl: null,
                              anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "center",
                              },
                              transformOrigin: {
                                vertical: "top",
                                horizontal: "center",
                              },
                            }}
                          >
                            <MenuItem value='Freemium'>Freemium</MenuItem>
                            <MenuItem value='Premium'>Premium</MenuItem>
                            <MenuItem value='Enterprise'>Enterprise</MenuItem>
                            <MenuItem value='Allocate subscription'>
                              Allocate subscription
                            </MenuItem>
                          </Select>
                        </div>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        <div className='tablecell padding-left'>
                          {p.lastActivity}
                        </div>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableBody }}>
                        <div className='tablecell padding-left'>
                          <MoreHorizIcon
                            className='more-icon'
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
                                <span
                                  className={classes.menuBulletPoint}
                                ></span>
                                {menu}
                              </MenuItem>
                            ))}
                          </StyledMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {/* Add new user form */}
      {isAddUser && (
        <SubscriptionAddUser
          onClose={handleCloseAddUser}
          onAddUser={handleAddUser}
        />
      )}
    </>
  );
};

export default Subscription;
