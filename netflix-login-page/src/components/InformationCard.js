import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";

const useStyles = makeStyles({
  cardContainer: {
    background: "rgba(0,0,0,0.75)",
    height: "300px",
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
      <Grid container>
        <Grid item xs={12}
          style={{
            color: "#454545",
            fontSize: "18px",
            justifyContent: "center",
            alignItems: "center",
          }}>
          Questions? Call 0850-390-7444
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3}
              style={{
                marginTop: "30px",
                color: "#454545",
                fontSize: "14px",
                textTransform: 'none',
              }}>
              FAQ
              <Grid item xs={3}
                style={{
                  marginTop: "30px",
                  color: "#454545",
                  fontSize: "14px",
                  textTransform: 'none',
                }}>
                Help Center
              </Grid>
              <Grid item xs={3}
                style={{
                  marginTop: "30px",
                  color: "#454545",
                  fontSize: "14px",
                  textTransform: 'none',
                }}>
                Terms of Use
              </Grid>

              <Grid item xs={3}
                style={{
                  marginTop: "30px",
                  color: "#454545",
                  fontSize: "14px",
                  textTransform: 'none',
                }}>
              </Grid>
              Privacy
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} justifyContent="center" alignItems="center" marginTop="40px">
          <Button
            className={classes.button}
            style={{
              textTransform: 'none',
              fontSize: "16px",
              fontWeight: "100",
              padding: "10px"
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
