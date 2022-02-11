import React from "react";
import Grid from "@mui/material/Grid";
import { Link, Stack } from "@mui/material";
import { useStyles } from "../styles/InformationCardStyles";
import LanguageIcon from "@mui/icons-material/Language";

const InformationCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Grid
        container
        style={{
          color: "#627575",
          fontSize: 16,
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "16%",
          paddingRight: "17%",
        }}
      >
        <Grid item xs={12}>
          Questions? Call{" "}
          <Link
            href="/"
            underline="hover"
            sx={{ color: "#627575", fontSize: 16, fontWeight: 500 }}
          >
            0850-390-7444
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            color: "#454545",
            fontSize: "18px",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1%",
          }}
        >
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
                color: "#627575",
                fontSize: 13,
                fontWeight: 500,
                paddingRight: "15%",
                marginBottom: "2%",
              }}
            >
              FAQ
            </Link>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575",
                fontSize: 13,
                fontWeight: 500,
                paddingRight: "15%",
                marginBottom: "2%",
              }}
            >
              Help Center
            </Link>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575",
                fontSize: 13,
                fontWeight: 500,
                paddingRight: "15%",
                marginBottom: "2%",
              }}
            >
              Terms of Use
            </Link>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#627575",
                fontSize: 13,
                fontWeight: 500,
                paddingRight: "15%",
                marginBottom: "2%",
              }}
            >
              Privacy
            </Link>
          </Stack>
          <Link
            href="/"
            underline="hover"
            sx={{
              color: "#627575",
              fontSize: 13,
              fontWeight: 500,
              paddingRight: "10%",
              marginBottom: "2%",
            }}
          >
            Cookie Preferences
          </Link>
          <Link
            href="/"
            underline="hover"
            sx={{
              color: "#627575",
              fontSize: 13,
              fontWeight: 500,
              marginBottom: "2%",
            }}
          >
            Corporate Information
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          marginTop="40px"
          style={{ position: "relative" }}
        >
          <LanguageIcon
            style={{
              color: "#8C8C8C",
              position: "absolute",
              left: 10,
              top: 12,
              zIndex: 1,
            }}
          />
          <select
            name="language"
            id="languages"
            style={{
              backgroundColor: "black",
              position: "absolute",
              width: "120px",
              height: "50px",
              border: "1px solid #8C8C8C",
              borderRadius: "5px",
              color: "#8C8C8C",
              textAlign: "right",
            }}
          >
            <option value="turkish">Türkçe&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="english" selected="selected">
              English&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
          </select>
        </Grid>
      </Grid>
    </div>
  );
};

export default InformationCard;
