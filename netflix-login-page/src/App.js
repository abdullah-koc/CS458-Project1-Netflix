import BackgroundImage from "./images/background.jpg";
import NetflixLogo from "./images/netflix_logo.png";
import { makeStyles } from "@mui/styles";
import LoginCard from "./components/LoginCard";
import Grid from "@mui/material/Grid";
import { db } from "./firebase";

const useStyles = makeStyles({
  bg: {
    width:"100%",
    minHeight: "140vh",
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    color: "white",
    "@media only screen and (max-width: 800px)": {
      background: "black",
    },
  },
  netflixLogoContainer: {
    minHeight: "12vh",
    padding: "21px 0px 12px 42px",
  },
  loginContainer: {
    minHeight: "88vh",
    display: "flex",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    
      <div className={classes.bg}>
      <Grid container direction={"column"}>
        <Grid item xs={1} className={classes.netflixLogoContainer}>
          <img src={NetflixLogo} style={{ width: "176px" }} alt="" />
        </Grid>
        <Grid item xs={8} className={classes.loginContainer}>
          <div>
            <LoginCard />
          </div>
        </Grid>
        <Grid item xs={3} style={{ minHeight: "40vh" }}>
          543678
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
