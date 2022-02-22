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
      {isLogged ? (
        <div
          style={{
            zIndex: 1,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          User looged in succesfully.
        </div>
      ) : (
        <Grid container direction={"column"}>
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
      )}
    </div>
  );
}

export default App;
