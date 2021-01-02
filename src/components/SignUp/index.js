import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2>I don't have an account</h2>
				<p>Sign up with your email and password.</p>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						label='Display Name'
						handleChange={this.handleChange}
						required
					/>
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
					<FormInput
						type='password'
						name='confirmPassword'
						value={password}
						label='Confirm Password'
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
