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
// import Navbar from '../Components/Navbar/Navbar';
// import Alert from '../Components/Alert';
// import Cookies from 'js-cookie';
import styled from 'styled-components';
const Title = styled.h1`
    position: absolute;
    width: 213px;
    height: 42px;
    left: 700px;
    top: 188px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 42px;
    text-align: center;
    color: black;

`;


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

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('Inside submit handler!');
		console.log(first_name + ' ' + last_name);
		console.log(email);
		console.log(password);
		// if (password === confirmPassword) {
        //     axios
        //         .post('https://acadivity.herokuapp.com/api/register', {
		// 			name: first_name + ' ' + last_name,
		// 			email: email,
		// 			password: confirmPassword
		// 		})
		// 		.then(
		// 			(response) => {
		// 				if (response.data == "registered") {
		// 					setSignupsuccess(true);
		// 				}
		// 			}
		// 		);
		// } else {
		// 	setErrMsg('Password Mismatch');
		// }
	};
		return (
			<div>
				{/* <Navbar/> */}
				<div>
					{/* <Alert msg={errMsg} type='danger' /> */}
					<Container component='main' maxWidth='xs'>
						<CssBaseline />
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<PersonAddIcon />
							</Avatar>
							{/* <Typography component='h1' variant='h5' style={{ marginBottom: '25px', color:'textPrimary'}}>
								Sign Up
							</Typography> */}
							<Title>Sign up</Title>
							<form className={classes.form} onSubmit={submitHandler} noValidate={true}>
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
								</Grid>
								<Link to='/signin'><Button
									value='submit'
									fullWidth
									variant='contained'
									color='primary'
									className={classes.submit}
								>
									Sign Up
								</Button></Link>
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
