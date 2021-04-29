import React from "react";
import { Grid, Typography } from "@material-ui/core";
import OneDrive from "../assets/icons/Icon_OneDrive.png";
import GoogleDrive from "../assets/icons/Icon_GoogleDrive.png";
import Slack from "../assets/icons/Icon_Slack.png";
import Hubspot from "../assets/icons/Icon_Hubspot.png";
import Salesforce from "../assets/icons/Icon_Salesforce.png";

import "./Integrations.scss";

const integrationsList = [
  {
    title: "Integrate Microsoft OneDrive",
    description: "Connect your personal OneDrive to share and store files",
    icon: OneDrive,
    iconWidth: 70,
    iconHeight: 65,
    button: "Connect",
  },
  {
    title: "Integrate Google Drive",
    description: "Connect your drive to share and store files",
    icon: GoogleDrive,
    iconWidth: 70,
    iconHeight: 65,
    button: "Connect",
  },
  {
    title: "Integrate Slack with your SP CE",
    description:
      "Connect your account to replace our native chat functionality",
    icon: Slack,
    iconWidth: 65,
    iconHeight: 60,
    button: "Connect",
  },
  {
    title: "Integrate Salesforce CRM",
    description: "Connect your CRM system for a seamless experience",
    icon: Salesforce,
    iconWidth: 45,
    iconHeight: 32,
    button: "Request",
  },
  {
    title: "Integrate Hubspot CRM",
    description: "Connect your CRM system for a seamless experience",
    icon: Hubspot,
    iconWidth: 38,
    iconHeight: 38,
    button: "Connect",
  },
];

const Integrations = () => {
  return (
    <div className='integrations'>
      {/* header */}
      <div className='integrations-header'>
        <Typography className='title'>Integrations</Typography>
      </div>

      {/* content */}
      <Grid className='grid-container' container spacing={0}>
        {integrationsList.map((item, index) => (
          <Grid
            key={index}
            className='grid-item'
            container
            item
            sm={12}
            direction='row'
          >
            <Grid className='grid-item-icon' item md={1}>
              <img
                src={item.icon}
                alt='integration icon'
                width={item.iconWidth}
                height={item.iconHeight}
              />
            </Grid>
            <Grid className='grid-item-details' item md={7}>
              <Typography className='details-title'>{item.title}</Typography>
              <Typography className='details-description'>
                {item.description}
              </Typography>
            </Grid>
            <Grid className='grid-item-button' item md={2}>
              <button className='button'>{item.button}</button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Integrations;
