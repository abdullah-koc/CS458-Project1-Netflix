import { makeStyles } from "@mui/styles";

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
  errorMessage: {
    width: "300px",
    borderRadius: "5px",
    borderRadius: "5px",
    "@media only screen and (max-width: 800px)": {
      width: "80%",
    },
    backgroundColor: "#e87c03",
    color: "white",
    padding: "10px",
    fontSize: "90%",
    marginBottom: "10px",
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
  checkbox: {
    color: "#737373",
  },
  outlineCheckbox: {
    color: "#737373",
  },
});

export { useStyles };
