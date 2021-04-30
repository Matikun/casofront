import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaCar } from 'react-icons/fa';
import { FaMotorcycle } from 'react-icons/fa';
import { IoIosBicycle } from 'react-icons/io';
import { UsersDataState } from '../../Context/UsersDataContext';
import { TYPES } from '../../reducer/reducer';

const VEHICLE_ICONS = {
	car: FaCar,
	motorcycle: FaMotorcycle,
	bicycle: IoIosBicycle,
};

const IconVehicle = ({ type, size, isActive }) => {
	const { dispatch } = useContext(UsersDataState);
	const IconByName = VEHICLE_ICONS[type];
	const StyledIcon = styled(IconByName)`
		font-size: ${size};
		width: ${size};
		background-color: ${isActive ? '#4fbe79' : 'inherit'};
		border: 1px solid #333;
		border-radius: 6px;
		padding: 1vh;
	`;

	return (
		<StyledIcon
			onClick={() => dispatch({ type: TYPES.VEHICLE_TYPE, payload: type })}
		/>
	);
};

export { IconVehicle };
