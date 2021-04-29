import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "./ProfileDetails.scss";
import TextInput from "./TextInput";

const ProfileDetails = () => {
  // dummy data
  const profileDetails = {
    firstName: "Jonas",
    lastName: "Hammarberg",
    email: "jonas.hammarberg@meetingmaker.se",
    phoneNumber: "",
    password: "password",
  };

  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isChangePassword, setIsChangePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation) {
      return;
    }

    const passwordDetails = {
      currentPassword: changePasswordForm.currentPassword,
      newPassword: changePasswordForm.newPassword,
    };

    console.log(passwordDetails);

    // go back to password
    setIsChangePassword(false);
    setChangePasswordForm({ currentPassword: "", newPassword: "" });
  };

  const validateForm = () => {
    const { currentPassword, newPassword } = changePasswordForm;
    let errors = {};
    let isValid = true;

    if (currentPassword === "") {
      errors.currentPassword = "This field is required";
    }
    if (newPassword === "") {
      errors.newPassword = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleOnChange = ({ target: input }) => {
    const { name, value } = input;
    setChangePasswordForm({ ...changePasswordForm, [name]: value });
  };

  return (
    <div className='profile-details'>
      {/* header */}
      <div className='profile-details-header'>
        <Typography className='title'>Profile details</Typography>
      </div>
      {/* form */}
      <div className='container'>
        <form className='form' autoComplete='off' onSubmit={handleSubmit}>
          {/* left column */}
          <div className='form-left-column'>
            <TextInput
              label='First Name'
              name='firstName'
              value={profileDetails.firstName}
              error={errors.firstName}
            />
            <TextInput
              label='Last Name'
              name='lastName'
              value={profileDetails.lastName}
              error={errors.lastName}
            />
            <TextInput
              type='email'
              label='Email'
              name='email'
              value={profileDetails.email}
              error={errors.email}
            />
            <TextInput
              label='Phone number'
              name='phoneNumber'
              value={profileDetails.phoneNumber}
              error={errors.phoneNumber}
            />
          </div>

          {/* right column */}
          <div className='form-right-column'>
            {!isChangePassword && (
              <div className='form-right-column-wrapper'>
                {/* password */}
                <div className='form-right-column-text-input'>
                  <TextInput
                    type='password'
                    label='Password'
                    name='password'
                    value={profileDetails.password}
                  />
                </div>
                <div className='form-right-column-button'>
                  <button
                    className='button'
                    onClick={() => setIsChangePassword(true)}
                  >
                    Change
                  </button>
                </div>
              </div>
            )}

            {/* change password form */}
            {isChangePassword && (
              <div className='form-right-column-wrapper'>
                <div className='form-right-column-text-input'>
                  <TextInput
                    type='password'
                    label='Current Password'
                    name='currentPassword'
                    value={changePasswordForm.currentPassword}
                    onChange={handleOnChange}
                    error={errors.currentPassword}
                  />
                  <TextInput
                    type='password'
                    label='New Password'
                    name='newPassword'
                    value={changePasswordForm.newPassword}
                    onChange={handleOnChange}
                    error={errors.newPassword}
                  />
                </div>
                <div className='form-right-column-button'>
                  <button className='button'>Save</button>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* delete profile  */}
        <div className='delete-profile'>
          <Typography className='delete-button'>
            <span className='highlight'>Delete</span> my profile
          </Typography>
          <Typography className='note'>
            You will receive an email to confirm your decision.
          </Typography>
          <Typography className='note'>
            Please note, that all boards you have created will permanently
            erased.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
