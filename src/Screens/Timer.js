import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import StopWatch from '../Components/StopWatch';
import '../Styles/StopWatch.css';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      marginLeft: 888,
      marginTop: -600
    },
}));

export default function Timer() {
    const classes = useStyles();
    return(
        <div>
            <StopWatch />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Submit Time
            </Button>
        </div>
    );
};

