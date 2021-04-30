import React from 'react';
import Container from '../components/Container/Container';
import NameForm from '../components/Form/NameForm';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title';

const MainPage = () => {
	return (
		<Container>
			<Navbar previusRoute="/" progress={'15%'} />
			<Title text="Datos de la visita" />
			<NameForm nextRoute="/visit" />
		</Container>
	);
};

export default MainPage;
