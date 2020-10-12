import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import StopWatch from '../Components/StopWatch';
import '../Styles/StopWatch.css';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      marginLeft: 888,
      marginTop: -600
    },
}));

export default function Timer() {
    const classes = useStyles();
    const name12 = Cookies.get('name');
    console.log(`Right now in the timer`);
	console.log(`From Cookies: ${name12}`);
    return(
        <div>
            <StopWatch />
        </div>
    );
};

