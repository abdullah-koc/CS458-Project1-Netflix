import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SnackbarProvider} from "notistack";
import {IconButton, Slide} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const notistackRef = React.createRef();
const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
}

ReactDOM.render(
    <React.StrictMode>
        <SnackbarProvider
            ref={notistackRef}
            action={(key) => (
                <IconButton color="primary" onClick={onClickDismiss(key)} component="span">
                    <CloseIcon style={{ color: 'white' }}/>
                </IconButton>
            )}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            TransitionComponent={Slide}
        >
            <App/>
        </SnackbarProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
