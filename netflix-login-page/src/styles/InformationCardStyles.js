import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    cardContainer: {
        background: "rgba(0,0,0,0.75)",
        height: "200px",
        width: "100%",
        "@media only screen and (max-width: 800px)": {
            width: "100vw",
        },
        padding: "68px",
        paddingTop: "38px",
        borderRadius: "5px",
    },
    button: {
        width: "320px",
        borderRadius: "4px",
    }
});

export { useStyles }