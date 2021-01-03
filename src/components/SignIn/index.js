import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<p>Sign in with your email and password.</p>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={email}
						label='Email Address'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						label='Password'
						handleChange={this.handleChange}
						required
					/>
					<div className='justify-center'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton type='button' className='google-sign-in-button' onClick={signInWithGoogle}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
