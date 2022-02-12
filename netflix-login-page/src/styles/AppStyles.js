import { makeStyles } from "@mui/styles";
import BackgroundImage from "../images/background.jpg";

const useStyles = makeStyles({
  bg: {
    width: "100%",
    minHeight: "160vh",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    color: "white",
    "@media only screen and (max-width: 800px)": {
      background: "black",
    },
    overflowX: "hidden",
  },
  netflixLogoContainer: {
    minHeight: "12vh",
    padding: "21px 0px 12px 42px",
  },
  loginContainer: {
    minHeight: "108vh",
    display: "flex",
    justifyContent: "center",
  },
});

export { useStyles };
