import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const useStyles = makeStyles({
  cardContainer: {
    background: "rgba(0,0,0,0.75)",
    height: "550px",
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
    "@media only screen and (max-width: 800px)": {
      width: "80%",
    },
  },

  button: {
    width: "320px",
    borderRadius: "4px",
  },
  infoText: {
    fontSize: 13,
    margin: 0,
    marginTop: 8,
    marginLeft: 6,
    color: "#e87c03",
  },
});

const LoginCard = () => {
  const classes = useStyles();

  async function get() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().mail}`);
    });
  }
  useEffect(() => {
    get();
  }, []);

  const [TextFieldBG1, setTextFieldBG1] = useState("#333333");
  const [TextFieldBG2, setTextFieldBG2] = useState("#333333");

  const [mailOrPhone, setMailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordInfoShown, setIsPasswordInfoShown] = useState(false);
  const [isMailPhoneInfoShown, setIsMailPhoneInfoShown] = useState(false);
  const [mailPhoneInfoText, setMailPhoneInfoText] = useState(
    "Please enter a valid email or phone number."
  );

  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (mailOrPhone.length === 0) {
      setIsMailPhoneInfoShown(false);
    } else if (mailOrPhone.length > 0) {
      if (/^-?\d+$/.test(mailOrPhone)) {
        if (mailOrPhone.length < 5) {
          setMailPhoneInfoText("Please enter a valid phone number.");
          setIsMailPhoneInfoShown(true);
        } else {
          setIsMailPhoneInfoShown(false);
          setMailPhoneInfoText("Please enter a valid email or phone number.");
        }
      } else {
        if (!mailOrPhone.includes("@")) {
          setIsMailPhoneInfoShown(true);
          setMailPhoneInfoText("Please enter a valid email.");
        } else {
          if (
            mailOrPhone.length < 5 ||
            mailOrPhone.substring(
              mailOrPhone.indexOf("@") + 1,
              mailOrPhone.indexOf("@") + 2
            ) === ""
          ) {
            setIsMailPhoneInfoShown(true);
            setMailPhoneInfoText("Please enter a valid email.");
          } else {
            setIsMailPhoneInfoShown(false);
            setMailPhoneInfoText("Please enter a valid email or phone number.");
          }
        }
      }
    }
  }, [mailOrPhone]);

  useEffect(() => {
    if (password.length > 3 || password.length === 0) {
      setIsPasswordInfoShown(false);
    } else {
      setIsPasswordInfoShown(true);
    }
  }, [password]);

  return (
    <div className={classes.cardContainer}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <h1 style={{ fontSize: "32px" }}>Sign In</h1>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "10px", position: "relative" }}>
          <TextField
            label="Email or phone number"
            variant="filled"
            onChange={(e) => setMailOrPhone(e.target.value)}
            className={classes.textField}
            sx={{ input: { color: "white" }, label: { color: "#8C8C8C" } }}
            style={{
              backgroundColor: TextFieldBG1,
              borderBottom: isMailPhoneInfoShown ? "2px solid #e87c03" : "",
            }}
            value={mailOrPhone}
            onFocus={() => setTextFieldBG1("#454545")}
            onBlur={() => {
              setTextFieldBG1("#333333");
              if (mailOrPhone.length < 5) {
                setIsMailPhoneInfoShown(true);
              }
            }}
            color="warning"
            InputProps={{
              disableUnderline: true,
            }}
          />
          {/^-?\d+$/.test(mailOrPhone) && (
            <PhoneInput
              style={{ position: "absolute", left: "270px", top: "10px" }}
              country={"tr"}
              value={phone}
              onChange={(e) => setPhone(e)}
              dropdownStyle={{
                backgroundColor: TextFieldBG1,
                color: "#8C8C8C",
              }}
              buttonStyle={{
                backgroundColor: TextFieldBG1,
                color: TextFieldBG1,
                borderColor: TextFieldBG1,
              }}
              inputStyle={{ width: -10, visibility: "hidden" }}
            />
          )}

          {isMailPhoneInfoShown && (
            <p className={classes.infoText}>{mailPhoneInfoText}</p>
          )}
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
            style={{
              backgroundColor: TextFieldBG2,
              borderBottom: isPasswordInfoShown ? "2px solid #e87c03" : "",
            }}
            onFocus={() => setTextFieldBG2("#454545")}
            onBlur={() => {
              setTextFieldBG2("#333333");
              if (password.length < 4) {
                setIsPasswordInfoShown(true);
              }
            }}
            color="warning"
            InputProps={{
              disableUnderline: true,
            }}
          />
          {isPasswordInfoShown && (
            <p className={classes.infoText}>
              Your password must contain between 4 and 60 characters.
            </p>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          marginTop="40px"
        >
          <Button
            className={classes.button}
            style={{
              textTransform: "none",
              backgroundColor: "#e50914",
              fontSize: "16px",
              fontWeight: "700",
              padding: "10px",
            }}
            variant="contained"
            onClick={() => setIsPasswordInfoShown(true)}
          >
            Sign In
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <div style={{ display: "inline-block", margin: 0, padding: 0 }}>
                  <Checkbox
                    iconstyle={{ fill: "white" }}
                    style={{ color: "#333" }}
                  />
                </div>
              }
              label={
                <Typography
                  sx={{
                    color: "#b3b3b3",
                    fontSize: 13,
                    fontWeight: 500,
                    marginLeft: "-6px",
                  }}
                >
                  Remember me
                </Typography>
              }
            />
            <Typography
              sx={{ color: "#b3b3b3", fontSize: 13, fontWeight: 500 }}
            >
              Need help?
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "32px" }}>
          <Button
            sx={{
              color: "#737373",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "none",
              padding: 0.5,
              minHeight: 0,
              minWidth: 0,
            }}
            startIcon={
              <Avatar
                variant="square"
                style={{ width: "20px", height: "20px" }}
                src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
              />
            }
          >
            Login with Facebook
          </Button>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "8px" }}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={0.8}
            alignItems="center"
          >
            <Typography
              sx={{ color: "#737373", fontSize: 16, fontWeight: 500 }}
            >
              New to Netflix?
            </Typography>
            <Link
              href="/"
              underline="none"
              sx={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
            >
              Sign up now.
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "8px" }}>
          <Typography
            display="inline"
            sx={{
              color: "#8c8c8c",
              fontSize: 13,
              textAlign: "left",
              lineHeight: "0",
            }}
          >
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Typography>
          <Link
            href="/"
            underline="none"
            sx={{ fontSize: 13, marginLeft: "4px" }}
          >
            Learn more.
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginCard;
