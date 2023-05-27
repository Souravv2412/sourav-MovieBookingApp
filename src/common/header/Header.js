import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import {
	Box,
	Button,
	Modal,
	Tab,
	TextField,
	makeStyles,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

// modal
const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

// main function
const Header = () => {
	// modal state
	const [open, setOpen] = useState(false);
	// state for tabs
	const [value, setValue] = useState('1');

	const classes = useStyles();
	// login modal open function
	const handleOpen = () => {
		setOpen(true);
	};
	// login modal close function
	const handleClose = () => {
		setOpen(false);
	};
	// tablist function
	const handleChange = (event, newValue) => {
		event.preventDefault();
		setValue(newValue);
	};

	// validation state for login form

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const [allUsers, setAllUsers] = useState('');

	// change username
	const handleNameChange = (event) => {
		setUserName(event.target.value);
		console.log(username);
	};

	// handlechange password
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
		console.log(password);
	};

	// form submit function
	const handleLogSubmit = (event) => {
		event.preventDefault();
		if (username !== '' && password !== '') {
			const newArray = { username, password };
			console.log(newArray);
			setAllUsers(...allUsers, newArray);
			setUserName('');
			setPassword('');
			// alert('Logged in successfully!');
		} else {
			alert('Please fill all the fields!');
		}
	};

	const handleRegSubmit = (event) => {
		event.preventDefault();
		if (username !== '' && password !== '') {
			const newArray = { username, password };
			console.log(newArray);
			setAllUsers(...allUsers, newArray);
			setUserName('');
			setPassword('');
			// alert('Logged in successfully!');
		} else {
			alert('Please fill all the fields!');
		}
	};

	return (
		<>
			<div className="header-container">
				<img src={logo} className="header-logo" />
				<Button
					variant="contained"
					color="inherit"
					onClick={handleOpen}
				>
					Login
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					className={classes.modal}
					aria-labelledby="login-modal"
					aria-describedby="modal-for-login"
				>
					<div className={classes.paper}>
						{/* Your login form content goes here */}

						<Box sx={{ width: '100%', typography: 'body1' }}>
							<TabContext value={value}>
								<Box
									sx={{
										borderBottom: 1,
										borderColor: 'divider',
									}}
								>
									<TabList
										onChange={handleChange}
										aria-label="lab API tabs example"
									>
										<Tab label="Login" value="1" />
										<Tab label="Register" value="2" />
									</TabList>
								</Box>
								<TabPanel value="1">
									<Box
										component="form"
										sx={{
											'& > :not(style)': {
												m: 1,
												width: '25ch',
											},
											display: 'flex',
										}}
										// noValidate
										autoComplete="off"
									>
										<form
											onSubmit={handleLogSubmit}
											className="textField"
										>
											<TextField
												id="standard-basic"
												label="Username*"
												variant="standard"
												sx={{ mt: 10 }}
												value={username}
												onChange={handleNameChange}
											/>

											<TextField
												id="standard-basic"
												label="Password*"
												variant="standard"
												value={password}
												onChange={handlePasswordChange}
											/>
											<Button
												type="submit"
												variant="contained"
												color="primary"
											>
												Login
											</Button>
										</form>
									</Box>
								</TabPanel>
								<TabPanel value="2">
									<form
										handle={handleRegSubmit}
										className="textField"
									>
										<TextField
											id="standard-basic"
											label="Username*"
											variant="standard"
											sx={{ mt: 10 }}
										/>
										<TextField
											id="standard-basic"
											label="Email*"
											variant="standard"
											sx={{ mt: 10 }}
										/>

										<TextField
											id="standard-basic"
											label="Password*"
											variant="standard"
										/>
										<Button
											variant="contained"
											color="primary"
										>
											Register
										</Button>
									</form>
								</TabPanel>
							</TabContext>
						</Box>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default Header;
