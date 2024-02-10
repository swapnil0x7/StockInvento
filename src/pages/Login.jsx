import { TypeAnimation } from 'react-type-animation';
import logo from '../assets/Logo.svg';
import Form from '../components/Form';

const Login = () => {
	return (
		<main className='grid lg:grid-cols-2'>
			<div className='h-[100vh] w-full hidden lg:flex flex-col justify-center items-center'>
				<img className='w-48 h-48' src={logo} alt='logo' />
				<p className='w-full text-center font-bold text-xl mt-2 text-green-500 whitespace-no-wrap overflow-hidden'>
					<TypeAnimation
						sequence={[
							'STOCK INVENTO',
							1000,
							'INVENTORY MANAGEMENT',
							1000,
							'MODERN INTERFACE',
							1000,
							'SEAMLESS STOCK MANAGEMENT',
							1000,
						]}
						wrapper='span'
						speed={30}
						style={{ display: 'inline-block' }}
						repeat={Infinity}
					/>
				</p>
			</div>
			<div className='h-[100vh] w-full flex flex-col justify-center items-center'>
				<Form />
			</div>
		</main>
	);
};

export default Login;
