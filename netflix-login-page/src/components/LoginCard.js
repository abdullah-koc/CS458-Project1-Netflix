import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
  cardContainer: {
    background: "rgba(0,0,0,0.75)",
    height: "680px",
    width: "314px",
    "@media only screen and (max-width: 800px)": {
      width: "100vw",
    },
    padding: "68px",
    paddingTop: "38px",
    borderRadius: "5px",
  },
  textField: {
    width: "320px",
    borderRadius: "5px",
  },
});

const LoginCard = () => {
  const classes = useStyles();

  const [TextFieldBG1, setTextFieldBG1] = useState("#333333");
  const [TextFieldBG2, setTextFieldBG2] = useState("#333333");

  const [mailOrPhone, setMailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.cardContainer}>
      <Grid container style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={12}>
          <h1 style={{ fontSize: "32px" }}>Sign In</h1>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <TextField
            label="Email or phone number"
            variant="filled"
            onChange={(e) => setMailOrPhone(e.target.value)}
            className={classes.textField}
            sx={{ input: { color: "white" }, label: { color: "#8C8C8C" } }}
            style={{ backgroundColor: TextFieldBG1 }}
            value={mailOrPhone}
            onFocus={() => setTextFieldBG1("#454545")}
            onBlur={() => setTextFieldBG1("#333333")}
            color="warning"
          />
        </Grid>

        <Grid item xs={12} style={{ marginTop: "16px" }}>
          <TextField
            label="Password"
            type="password"
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={classes.textField}
            sx={{ input: { color: "white" }, label: { color: "#8C8C8C" } }}
            style={{ backgroundColor: TextFieldBG2 }}
            onFocus={() => setTextFieldBG2("#454545")}
            onBlur={() => setTextFieldBG2("#333333")}
            color="warning"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginCard;
