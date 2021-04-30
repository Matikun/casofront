import React from 'react';
import {
	IconLink,
	IconMainbar,
	Mainbar,
	MainbarText,
	NavbarContainer,
	Progressbar,
	Topbar,
	TopbarIconCircle,
	TopbarIconSquare,
	TopbarIconTriangle,
} from './NavbarAtoms';

const Navbar = ({ previusRoute, progress }) => {
	return (
		<NavbarContainer>
			<Topbar>
				<TopbarIconSquare />
				<TopbarIconCircle />
				<TopbarIconTriangle />
			</Topbar>
			<Mainbar>
				<IconLink to={previusRoute}>
					<IconMainbar />
				</IconLink>
				<MainbarText>Registrar Visita</MainbarText>
			</Mainbar>
			<Progressbar progress={progress} />
		</NavbarContainer>
	);
};

export default Navbar;
