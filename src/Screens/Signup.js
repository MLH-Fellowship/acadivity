import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
// import Alert from '../Components/Alert';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		color: '#080808d9',
		backgroundColor: 'transparent'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignUp () {
	const classes = useStyles();
	const [ email, setEmail ] = React.useState('');
	const [ first_name, setFirstName ] = React.useState('');
	const [ last_name, setLastName ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ confirmPassword, setConfirmPassword ] = React.useState('');
	const [ signupsuccess, setSignupsuccess ] = React.useState(false);
	const [ loginsuccess, setLoginsuccess ] = React.useState(false);
	const [ errMsg, setErrMsg ] = useState('');
	const responseSuccessGoogle = (response) => {
		console.log(response);
		console.log(response.tokenId);
		axios({
			method: 'POST',
            // url: 'https://serieux-saucisson-31787.herokuapp.com/api/user/googlelogin',
            url: '',

			data: { tokenId: response.tokenId }
		}).then((response) => {
			console.log(response);
			if (response.data.success) {
				setLoginsuccess(true);
				Cookies.set('session-id', response.data['token']);
				window.location.reload(false);
			}
			// alert(`Welcome ${response.data.user.name}! You have been Successfully Signed In!`);
		});
	};

	const responseErrorGoogle = (response) => {
		console.log(response);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
            axios
                .post('', {
				// .post('https://serieux-saucisson-31787.herokuapp.com/api/user/signupUser', {
					email: email.toLowerCase(),
					password: password,
					firstname: first_name,
					lastname: last_name
				})
				.then(
					(response) => {
						if (response.data.success === true) {
							setSignupsuccess(true);
						}
					},
					(error) => {
						if (error.response.data.err === 'Email Already Registered and Verified') {
							setErrMsg('Email Already Registered and Verified');
						} else setErrMsg('Something went wrong');
					}
				);
		} else {
			setErrMsg('Password Mismatch');
		}
	};
	if (signupsuccess === true) {
		return (
			<Redirect
				to={{
					pathname: '/verifyotp',
					state: { email: email }
				}}
			/>
		);
	} else if (loginsuccess) {
		return <Redirect to='/' />;
	} else {
		return (
			<div>
				<div>
					{/* <Alert msg={errMsg} type='danger' /> */}
					<Container component='main' maxWidth='xs'>
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<PersonAddIcon />
							</Avatar>
							<Typography component='h1' variant='h5' style={{ marginBottom: '25px' }}>
								Sign Up
							</Typography>
							<div className='center'>
								<GoogleLogin
									className='black-text'
									buttonText='Sign up with Google'
									clientId='798827553844-i0rjoguupm9jucbohldlp16kthi5boif.apps.googleusercontent.com'
									onSuccess={responseSuccessGoogle}
									onFailure={responseErrorGoogle}
									cookiePolicy={'single_host_origin'}
									redirectUri={'/'}
								/>
							</div>
							<h6 className='signin-divider'>
								<span>or</span>
							</h6>
							<form className={classes.form} onSubmit={submitHandler}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											autoComplete='fname'
											name='firstName'
											variant='outlined'
											required
											fullWidth
											id='firstName'
											label='First Name'
											value={first_name}
											onChange={(e) => setFirstName(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='lastName'
											label='Last Name'
											name='lastName'
											value={last_name}
											onChange={(e) => setLastName(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											type='email'
											variant='outlined'
											required
											fullWidth
											id='email'
											label='Email Address'
											name='email'
											autoComplete='email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</Grid>

									<Grid item xs={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											name='password1'
											label='Password'
											type='password'
											id='password'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											name='password2'
											label='Confirm Password'
											type='password'
											id='password'
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControlLabel
											control={<Checkbox value='allowExtraEmails' color='primary' />}
											label='I want to receive inspiration, marketing promotions and updates via email.'
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
									Sign Up
								</Button>
								<Grid container justify='flex-end'>
									<Grid item>
										<Link href='/signin' variant='body2'>
											Already have an account? Sign in
										</Link>
									</Grid>
								</Grid>
							</form>
						</div>
					</Container>
				</div>
				{/* <div style={{ marginTop: '8%' }}>
					<Footer />
				</div> */}
			</div>
		);
	}
}
