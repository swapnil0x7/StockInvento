import React from 'react';
import logo from '../assets/Logo.svg';
import Form from '../components/Form';

const Login = () => {
	return (
		<main className='flex'>
			<div className='h-[100vh] w-full flex flex-col justify-center items-center'>
				<img className='w-48 h-48' src={logo} alt='logo' />
				<p className='w-full text-center font-semibold text-2xl mt-2 text-blue-400 whitespace-no-wrap overflow-hidden'>
					STOCKINVENTO
				</p>
			</div>
			<div className='h-[100vh] w-full flex flex-col justify-center items-center'>
				<Form />
			</div>
		</main>
	);
};

export default Login;
