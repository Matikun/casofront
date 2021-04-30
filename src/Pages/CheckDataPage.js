import React from 'react';
import Container from '../components/Container/Container';
import CheckForm from '../components/Form/CheckForm/CheckForm';
import Navbar from '../components/Navbar/Navbar';

const CheckDataPage = () => {
	return (
		<Container>
			<Navbar previusRoute="/vehicle" progress={'85%'} />
			<CheckForm nextRoute="/done" />
		</Container>
	);
};

export default CheckDataPage;
