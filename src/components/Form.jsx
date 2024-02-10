import { useState } from 'react';
import logo from '../assets/Logo.svg';
import Google from '../assets/google.svg';
import { useForm } from 'react-hook-form';

const inputStyle = {
	width: '25rem',
	height: '2.5rem',
	padding: '1rem 0.5rem',
	marginBottom: '0.5rem',
	marginTop: '0.2rem',
	border: '1px solid lightgray',
	borderRadius: '0.35rem',
};

const buttonStyle = {
	width: '25rem',
	height: '2.5rem',
	borderRadius: '0.35rem',
	textAlign: 'center',
	marginTop: '0.5rem',
};

const errorStyle = {
	color: 'red',
	textAlign: 'left',
};

const Form = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const { register, handleSubmit, formState } = useForm();
	const { errors, isValid } = formState;

	const onSubmit = (data) => {
		console.log('formdata : ', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className='m-4 p-4'>
				<div className='flex flex-col items-center gap-2'>
					<img className='w-10 h-10' src={logo} alt='logo' />
					<div className='mt-2 text-2xl font-bold text-gray-600'>
						{isSignUp ? 'Create an account' : 'Log in to your account'}
					</div>
					<div className='font-thin text-gray-400 text-sm'>
						{isSignUp
							? ' Please enter your details'
							: 'Welcome back! Please enter your details'}
					</div>
				</div>
				<div className='flex flex-col items-start gap-2 mt-8'>
					{isSignUp && (
						<div className='flex flex-col text-gray-500 text-sm my-1'>
							<label>Name*</label>
							<input
								style={inputStyle}
								type='text'
								name='fullname'
								{...register('fullname', {
									required: {
										value: true,
										message: 'Name is required',
									},
								})}
								placeholder='Enter your name'
								className='border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-500 shadow-sm'
							/>
							<p style={errorStyle}>{errors.fullname?.message}</p>
						</div>
					)}

					<div className='flex flex-col text-gray-500 text-sm relative my-1'>
						<label>Email</label>
						<input
							style={inputStyle}
							type='email'
							name='email'
							{...register('email', {
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
								required: {
									value: true,
									message: 'Email is required',
								},
							})}
							placeholder='Enter your email'
							className='border border-gray-300 p-2 focus:outline-none focus: focus:border-blue-500 shadow-sm'
						/>
						<p style={errorStyle}>{errors.email?.message}</p>
					</div>

					<div className='flex flex-col text-gray-500 text-sm my-1'>
						<label>Password</label>
						<div className='mb-4'>
							<input
								style={inputStyle}
								type='password'
								name='password'
								{...register('password', {
									required: {
										value: true,
										message: 'Password is required',
									},
									minLength: {
										value: 8,
										message: 'Password must be at least 8 characters',
									},
								})}
								placeholder='Enter your password'
								className='border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-500 shadow-sm'
							/>
							<p style={errorStyle}>{errors.password?.message}</p>
						</div>
					</div>
					<div className='w-full flex justify-between text-sm text-gray-500 mb-2'>
						<div>
							<input
								type='checkbox'
								name='checkbox'
								{...register('checkbox')}
								className='mr-1'
							/>
							<span>Remember me</span>
						</div>
						<div className=' text-blue-500 pr-2  hover:cursor-pointer hover:font-extrabold'>
							Forgot password
						</div>
					</div>
					<button
						type='submit'
						style={buttonStyle}
						className='bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-white'>
						{isSignUp ? 'Get started' : 'Sign in'}
					</button>

					<button
						type='submit'
						style={buttonStyle}
						className='relative text-center mt-1 text border border-gray-200 pl-8 hover:bg-gray-100 transition-colors duration-300 ease-in-out'>
						<img
							src={Google}
							className='left-28 absolute w-6 h-6'
							alt='google-logo'></img>
						Sign in with Google
					</button>
				</div>
				<div className='text-center pt-4 text-sm text-gray-500'>
					{!isSignUp ? "Don't have an account?" : 'Already have an account?'}{' '}
					<span
						onClick={() => setIsSignUp((prev) => !prev)}
						className='text-blue-500 hover:underline hover:cursor-pointer'>
						{!isSignUp ? 'Sign up' : 'Sign in'}
					</span>{' '}
				</div>
			</div>
		</form>
	);
};

export default Form;
