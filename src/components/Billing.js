import React, { useState } from "react";
import { Grid, Typography, MenuItem } from "@material-ui/core";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import "./Billing.scss";

const Billing = () => {
  const data = {
    firstName: "Jonas",
    lastName: "Hammarberg",
    email: "jonas.hammarberg@meetingmaker.se",
    phoneNumber: "",
    organization: "Hammarberg",
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    postalCode: "12345",
    vatId: "",
    streetAddress: "121 South Inca St.",
    unit: "12345",
    poNumber: "",
  };

  const [billingInfo, setBillingInfo] = useState(data);
  const [errors, setErrors] = useState({});

  const handleOnChange = ({ target: input }) => {
    const { name, value } = input;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleOnSave = (e) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation) {
      return;
    }

    console.log(billingInfo);
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      organization,
      email,
      country,
      state,
      phoneNumber,
      city,
      postalCode,
    } = billingInfo;
    let errors = {};
    let isValid = true;

    if (firstName === "") {
      errors.firstName = "This field is required";
    }
    if (lastName === "") {
      errors.lastName = "This field is required";
    }
    if (organization === "") {
      errors.organization = "This field is required";
    }
    if (email === "") {
      errors.email = "This field is required";
    }
    if (country === "") {
      errors.country = "This field is required";
    }
    if (state === "") {
      errors.state = "This field is required";
    }
    if (phoneNumber === "") {
      errors.phoneNumber = "This field is required";
    }
    if (city === "") {
      errors.city = "This field is required";
    }
    if (postalCode === "") {
      errors.postalCode = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  return (
    <div className='billing'>
      <div className='billing-header'>
        <Typography className='title'>Billing Information</Typography>
        <button className='button' onClick={handleOnSave}>
          Save
        </button>
      </div>

      <form noValidate autoComplete='off'>
        <Grid className='grid-container' container spacing={3}>
          <Grid container item md={6} direction='column'>
            <TextInput
              label='First Name *'
              name='firstName'
              value={billingInfo.firstName}
              onChange={handleOnChange}
              error={errors.firstName}
            />
            <TextInput
              label='Organization *'
              name='organization'
              value={billingInfo.organization}
              onChange={handleOnChange}
              error={errors.organization}
            />
            <Grid container item direction='row' spacing={1}>
              <Grid item sm={12} md={6}>
                <SelectInput
                  label='Country *'
                  name='country'
                  value={billingInfo.country}
                  onChange={handleOnChange}
                >
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Sweden'>Sweden</MenuItem>
                  <MenuItem value='Canada'>Canada</MenuItem>
                </SelectInput>
              </Grid>
              <Grid item sm={12} md={6}>
                <SelectInput
                  label='State *'
                  name='state'
                  value={billingInfo.state}
                  onChange={handleOnChange}
                >
                  <MenuItem value='CA'>CA</MenuItem>
                  <MenuItem value='LA'>LA</MenuItem>
                  <MenuItem value='NY'>NY</MenuItem>
                </SelectInput>
              </Grid>
            </Grid>
            <Grid container item direction='row' spacing={1}>
              <Grid item sm={12} md={6}>
                <TextInput
                  label='City *'
                  name='city'
                  value={billingInfo.city}
                  onChange={handleOnChange}
                  error={errors.city}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextInput
                  label='Postal Code *'
                  name='postalCode'
                  value={billingInfo.postalCode}
                  onChange={handleOnChange}
                  error={errors.postalCode}
                />
              </Grid>
            </Grid>
            <Grid container item direction='row' spacing={1}>
              <Grid item sm={12} md={8}>
                <TextInput
                  label='Street Address '
                  name='streetAddress'
                  value={billingInfo.streetAddress}
                  onChange={handleOnChange}
                  error={errors.streetAddress}
                />
              </Grid>
              <Grid item sm={12} md={4}>
                <TextInput
                  label='Suite/Unit'
                  name='unit'
                  value={billingInfo.unit}
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container item md={6} direction='column'>
            <TextInput
              label='Last Name *'
              name='lastName'
              value={billingInfo.lastName}
              onChange={handleOnChange}
              error={errors.lastName}
            />
            <TextInput
              type='email'
              label='Email *'
              name='email'
              value={billingInfo.email}
              onChange={handleOnChange}
              error={errors.email}
            />
            <TextInput
              label='Phone number *'
              name='phoneNumber'
              value={billingInfo.phoneNumber}
              onChange={handleOnChange}
              error={errors.phoneNumber}
            />
            <TextInput
              label='VAT ID'
              name='vatId'
              value={billingInfo.vatId}
              onChange={handleOnChange}
            />
            <TextInput
              label='PO Number'
              name='poNumber'
              value={billingInfo.poNumber}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Billing;
