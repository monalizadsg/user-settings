import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import TextInput from "./TextInput";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "./SubscriptionAddUser.scss";

const SubscriptionAddUser = ({ onClose, onAddUser }) => {
  const [newUser, setNewUser] = useState({
    firstName: "Erik",
    lastName: "Wibom",
    email: "erik.wibom@meetingmaker.se",
    phoneNumber: "",
    subscription: "Enterprise",
    role: "USER",
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = ({ target: input }) => {
    const { name, value } = input;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSave = (e) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation) {
      return;
    }

    // console.log(newUser);
    onAddUser(newUser);

    // go back to subscription
    onClose();
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      subscription,
      role,
    } = newUser;
    let errors = {};
    let isValid = true;

    if (firstName === "") {
      errors.firstName = "This field is required";
    }
    if (lastName === "") {
      errors.lastName = "This field is required";
    }
    if (email === "") {
      errors.email = "This field is required";
    }
    if (phoneNumber === "") {
      errors.phoneNumber = "This field is required";
    }
    if (subscription === "") {
      errors.subscription = "This field is required";
    }
    if (role === "") {
      errors.role = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  return (
    <div className='subscription-add-user'>
      {/* header */}
      <div className='subscription-add-user-header'>
        <Typography className='title'>Add user</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon className='close-icon' />
        </IconButton>
      </div>

      {/* form */}
      <form noValidate autoComplete='off'>
        <Grid className='grid-container' container>
          <Grid container item md={6} direction='column'>
            <TextInput
              label='First Name'
              name='firstName'
              value={newUser.firstName}
              onChange={handleOnChange}
              error={errors.firstName}
            />
            <TextInput
              label='Last Name'
              name='lastName'
              value={newUser.lastName}
              onChange={handleOnChange}
              error={errors.lastName}
            />
            <TextInput
              type='email'
              label='Email'
              name='email'
              value={newUser.email}
              onChange={handleOnChange}
              error={errors.email}
            />
            <TextInput
              label='Phone number'
              name='phoneNumber'
              value={newUser.phoneNumber}
              onChange={handleOnChange}
              error={errors.phoneNumber}
            />
            <Grid container item direction='row' spacing={1}>
              <Grid item sm={12} md={6}>
                <TextInput
                  label='Subscription'
                  name='subscription'
                  value={newUser.subscription}
                  onChange={handleOnChange}
                  error={errors.subscription}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextInput
                  label='Role'
                  name='role'
                  value={newUser.role}
                  onChange={handleOnChange}
                  error={errors.role}
                />
              </Grid>
            </Grid>
            <div className='save-button'>
              <button className='button' onClick={handleOnSave}>
                Save and Invite
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SubscriptionAddUser;
