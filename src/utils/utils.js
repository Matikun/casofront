import { IconVehicle } from '../components/IconVehicle/IconVehicle';

const activeVehicle = (arr, size) => {
	const activeVehicle = arr.filter((vehicle) => vehicle.active === true);
	return renderVehicle(activeVehicle, size);
};

const renderVehicle = (arr, size) => {
	const key = Date.now();
	return arr.map((vehicle) => (
		<IconVehicle
			type={vehicle.type}
			size={size}
			isActive={vehicle.active}
			key={`${vehicle.type}${key}`}
		/>
	));
};

const getFirstName = (str) => {
	const arrayOfStr = str.split(' ');
	return arrayOfStr[0];
};

export { renderVehicle, activeVehicle, getFirstName };
