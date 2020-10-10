import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Footer from '../Components/Footer2';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
// import Alert from '../Components/Alert';
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
		backgroundColor: 'transparent',
		fontSize: '48vw'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(2, 0, 2)
	}
}));

export default function SignIn () {
	const classes = useStyles();
	const [ email, setEmail ] = React.useState('');
	const [ loginsuccess, setLoginsuccess ] = React.useState(false);
	const [ password, setPassword ] = React.useState('');
	const [ otpsuccess, setOtpsuccess ] = React.useState(true);
	const [ errMsg, setErrMsg ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', {
            	email: email.toLowerCase(),
				password: password
			})
			.then(
				(response) => {
					console.log(response);
					setLoginsuccess(true);
					console.log(response.data['_id']);
					Cookies.set('name', response.data['name']);
					// if (response.data) {
					// 	setLoginsuccess(true);
					// 	Cookies.set('session-id', response.data['_id']);
					// 	window.location.reload(false);
					// 	console.log(response.data);
					// }
				},
				(error) => {
					console.log(error.response.data);
					setErrMsg('Enter valid combination of email id and password!');
					// if (error.response.data.err === 'User Not Found') {
					// 	setErrMsg('User not found');
					// } else if (error.response.data.err.message === 'Incorrect Password') {
					// 	setErrMsg('Incorrect password');
					// }
				}
			);
	};
	return (
		<div>
			<div>
				{/* <Alert msg={errMsg} type='danger' /> */}
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<PersonIcon />
						</Avatar>
						<Typography component='h1' variant='h5' style={{ marginBottom: '25px' }}>
							Sign In
						</Typography>
						<h6 className='signin-divider'>
						</h6>
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
					</div>
				</Container>
			</div>
			{/* <Footer /> */}
		</div>
	);
}
