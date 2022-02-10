import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  cardContainer: {
    background: "rgba(0,0,0,0.75)",
    height: "200px",
    width: "100%",
    "@media only screen and (max-width: 800px)": {
      width: "100vw",
    },
    padding: "68px",
    paddingTop: "38px",
    borderRadius: "5px",
  },
  button: {
    width: "320px",
    borderRadius: "4px",
  }
});

const InformationCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Grid container
        style={{
          color: "#627575",
          fontSize: 16,
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "16%",
          paddingRight: "17%",

        }}>
        <Grid item xs={12}>
          Questions? Call <Link
            href="/"
            underline="hover"
            sx={{ color: "#627575", fontSize: 16, fontWeight: 500 }}
          >
            0850-390-7444
          </Link>
        </Grid>
        <Grid item xs={12} style={{
          color: "#454545",
          fontSize: "18px",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1%",
        }}>
          <Stack
            direction="row"
            paddingTop="2%"
            justifyContent="flex-start"
            spacing={3.5}
            alignItems="center"

          >
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575", fontSize: 13, fontWeight: 500, paddingRight: "15%", marginBottom:"2%"

              }}
            >
              FAQ
            </Link>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575", fontSize: 13, fontWeight: 500, paddingRight: "15%", marginBottom:"2%"

              }}
            >
              Help Center
            </Link>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575", fontSize: 13, fontWeight: 500, paddingRight: "15%", marginBottom:"2%"

              }}
            >
              Terms of Use
            </Link>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575", fontSize: 13, fontWeight: 500, paddingRight: "15%", marginBottom:"2%"

              }}
            >
              Privacy
            </Link>

          </Stack>
          <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575", fontSize: 13, fontWeight: 500, paddingRight: "10%", marginBottom:"2%"

              }}
            >
            Cookie Preferences
          </Link>
          <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575", fontSize: 13, fontWeight: 500, marginBottom:"2%"

              }}
            >
            Corporate Information
          </Link>
        </Grid>

        <Grid item xs={12} justifyContent="center" alignItems="center" marginTop="40px">
          <Button
            className={classes.button}
            style={{
              textTransform: 'none',
              fontSize: "16px",
              fontWeight: "100",
              width: "13%",
            }}
            variant="contained">
            Language
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InformationCard;
