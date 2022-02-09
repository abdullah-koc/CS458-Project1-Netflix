import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

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
            onBlur={() => {
              setTextFieldBG1("#333333");
              if (mailOrPhone.length < 5) {
                setIsMailPhoneInfoShown(true);
              }
            }}
            color="warning"
          />

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
            style={{ backgroundColor: TextFieldBG2 }}
            onFocus={() => setTextFieldBG2("#454545")}
            onBlur={() => {
              setTextFieldBG2("#333333");
              if (password.length < 4) {
                setIsPasswordInfoShown(true);
              }
            }}
            color="warning"
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
      </Grid>
    </div>
  );
};

export default LoginCard;
