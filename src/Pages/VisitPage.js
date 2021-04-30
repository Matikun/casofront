import React from 'react';
import Container from '../components/Container/Container';
import VisitForm from '../components/Form/VisitForm/VisitForm';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title';

const VisitPage = () => {
	return (
		<Container>
			<Navbar previusRoute="/" progress={'50%'} />
			<Title text="Algunos datos más" />
			<VisitForm nextRoute="/vehicle" />
		</Container>
	);
};

export default VisitPage;
