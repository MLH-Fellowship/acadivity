import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ButtonBases from './TimerandProjectListButton';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 650,
    marginTop: 200,
    backgroundColor: theme.palette.background.paper,
    width: 700,
  },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
	const [ email, setEmail ] = React.useState('');
	const [ loginsuccess, setLoginsuccess ] = React.useState(false);
	const [ password, setPassword ] = React.useState('');
	const [ otpsuccess, setOtpsuccess ] = React.useState(true);
	const [ errMsg, setErrMsg ] = useState('');
    // const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const submitHandler = (e) => {
        // e.preventDefault();
        // axios
        //     // .post('https://serieux-saucisson-31787.herokuapp.com/api/user/loginUser', {

        //     .post('', {
        //     email: email.toLowerCase(),
        //         password: password
        //     })
        //     .then(
        //         (response) => {
        //             // console.log(response);
        //             if (response.data.success) {
        //                 setLoginsuccess(true);
        //                 Cookies.set('session-id', response.data['token']);
        //                 window.location.reload(false);
        //             }
        //         },
        //         (error) => {
        //             console.log(error.response.data.err);
        //             if (error.response.data.err === 'User Not Found') {
        //                 setErrMsg('User not found');
        //             } else if (error.response.data.err.message === 'Incorrect Password') {
        //                 setErrMsg('Incorrect password');
        //             } else if (error.response.data.err === 'Email Verification Status: False') {
        //                 setOtpsuccess(false);
        //             }
        //         }
        //     );
    };

    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="Enter Your Project Details Here!" {...a11yProps(0)} />
            <Tab label="Start the productive time!" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <form className={classes.form} onSubmit={submitHandler}>
                <Grid container spacing={2}>
                    <Grid spacing={2} item xs={12}>
                        <TextField
                            type='email'
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid spacing={2} item xs={12}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>

                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                >
                    Sign In
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href='#' variant='body2' />
                    </Grid>
                    <Grid item>
                        <Link href='/signup' variant='body2'>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
			</form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <ButtonBases /> 
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
