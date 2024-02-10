import { TypeAnimation } from 'react-type-animation';
import logoAnimation from '../assets/animations/Logo.json';
import Form from '../components/Form';
import Lottie from 'react-lottie';

const Login = () => {
	return (
		<main className='grid lg:grid-cols-2'>
			<div className='relative h-[100vh] w-full hidden lg:flex flex-col justify-center items-center'>
				<Lottie
					options={{
						animationData: logoAnimation,
						loop: true,
						autoplay: true,
					}}
					height={500}
					width={500}
				/>
				<p className='absolute w-full top-[30rem] text-center font-bold text-xs mt-2 text-blue-300 whitespace-no-wrap overflow-hidden'>
					<TypeAnimation
						sequence={[
							'INVENTORY MANAGEMENT APPLICATION',
							1000,
							'MODERN USER INTERFACE',
							1000,
							'SEAMLESS STOCK MANAGEMENT',
							1000,
							'INSTANT ALERTS AND CRITICAL NOTIFICATIONS',
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
