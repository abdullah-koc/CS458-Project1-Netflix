import NetflixLogo from "./images/netflix_logo.png";
import LoginCard from "./components/LoginCard";
import InformationCard from "./components/InformationCard";
import Grid from "@mui/material/Grid";
import { useStyles } from "./styles/AppStyles";
import { useState } from "react";

function App() {
  const classes = useStyles();
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className={classes.bg}>
      <div
        style={{
          zIndex: 1,
          width: "100vw",
          height: isLogged ? "100vh" : "0vh",
          display: "flex",
          justifyContent: "center",
          visibility: isLogged ? "visible" : "hidden",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        User looged in succesfully.
      </div>
      <Grid
        container
        direction={"column"}
        style={{
          visibility: isLogged ? "hidden" : "visible",
        }}
      >
        <Grid item xs={1} className={classes.netflixLogoContainer}>
          <a href="/#">
            <img src={NetflixLogo} style={{ width: "176px" }} alt="" />
          </a>
        </Grid>
        <Grid item xs={8} className={classes.loginContainer}>
          <div>
            <LoginCard passLoginInfo={setIsLogged} />
          </div>
        </Grid>
        <Grid item xs={3} style={{ minHeight: "40vh" }}>
          <div>
            <InformationCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
