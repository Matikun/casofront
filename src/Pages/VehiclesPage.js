import React from 'react';
import Container from '../components/Container/Container';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title';
import VehicleCards from '../components/VehicleCards';

const VehiclesPage = () => {
	return (
		<Container>
			<Navbar previusRoute="/visit" progress={'75%'} />
			<Title text="¿Qué vehículo usa?" />
			<VehicleCards nextRoute="/checkdata" />
		</Container>
	);
};

export default VehiclesPage;
