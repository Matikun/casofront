import React from 'react';
import Container from '../components/Container/Container';
import DoneData from '../components/Form/DoneData';
import Navbar from '../components/Navbar/Navbar';

const DonePage = () => {
	return (
		<Container>
			<Navbar previusRoute="/checkdata" progress={'0%'} />
			<DoneData />
		</Container>
	);
};

export default DonePage;
