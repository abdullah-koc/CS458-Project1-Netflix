import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase";
import {useStyles} from "../styles/LoginCardStyles";
import {Avatar, Button, Checkbox, FormControlLabel, Link, Stack, Typography,} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {useSnackbar} from "notistack";
import {FacebookAuthProvider, getAuth, signInWithPopup} from "firebase/auth";


const LoginCard = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const provider = new FacebookAuthProvider();

  provider.setCustomParameters({
    'display': 'popup'
  });

  const [TextFieldBG1, setTextFieldBG1] = useState("#333333");
  const [TextFieldBG2, setTextFieldBG2] = useState("#333333");

  const [mailOrPhone, setMailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordInfoShown, setIsPasswordInfoShown] = useState(false);
  const [isMailPhoneInfoShown, setIsMailPhoneInfoShown] = useState(false);
  const [mailPhoneInfoText, setMailPhoneInfoText] = useState(
    "Please enter a valid email or phone number."
  );

  const [phoneCode, setPhoneCode] = useState("90");

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

  const sendLoginInfoToDB = async() => {
    const usersRef = collection(db, "users");
    let dbQuery;
    let tempInfo = "";
    let isPhone = false;
    if (/^-?\d+$/.test(mailOrPhone)) {
      tempInfo = phoneCode + mailOrPhone;
      isPhone = true;
    }
  
    if (!isPhone) {
      dbQuery = query(usersRef, where("mail", "==", mailOrPhone), where("password", "==", password));
    } else {
      //send phone number information to DB (phone: tempInfo, PW: password)
      dbQuery = query(usersRef, where("phone", "==", tempInfo), where("password", "==", password));
    }

    const querySnapshot = await getDocs(dbQuery);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });

    if (querySnapshot.size > 0) {
      // login successful
      enqueueSnackbar('Login successful!', {
        variant: "success",
        preventDuplicate: true
      });
    } else {
      // wrong credentials
      enqueueSnackbar('Login failed! Please check your credentials.', {
        variant: "error",
        preventDuplicate: true
      });
    }
  };

  const loginWithFacebook = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          enqueueSnackbar(`Login successful! Welcome, ${user.displayName}`, {
            variant: "success",
            preventDuplicate: true
          });
        })
        .catch(() => {
          enqueueSnackbar(`An error occurred during Facebook login!`, {
            variant: "error",
            preventDuplicate: true
          });
        });
  }

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
              value={phoneCode}
              onChange={(e) => setPhoneCode(e)}
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
            onClick={() => {
              sendLoginInfoToDB();
            }}
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
                      icon={<CheckBoxOutlineBlankIcon className={classes.outlineCheckbox}/>}
                      checkedIcon={<CheckBoxIcon className={classes.checkbox}/>}
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
            onClick={() => {
              // loginWithFacebook();
            }}
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
