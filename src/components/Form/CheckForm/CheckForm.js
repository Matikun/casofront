import React, { useContext } from 'react';
import { UsersDataState } from '../../../Context/UsersDataContext';
import useSubmitRoute from '../../../hooks/useSubmitRoute';
import { TYPES } from '../../../reducer/reducer';
import { activeVehicle } from '../../../utils/utils';
import Switch from '../../SwitchButton/Switch';
import { SpaceBetweenContainer } from '../../SwitchButton/SwitchButtonAtoms';
import { FormButton, FormButtonContainer } from '../FormAtoms';
import {
	ColumnContainerSpaceBtween,
	CounterContainer,
	DataTextH4,
	DataTextP,
	DisplayNumber,
	FullName,
	MainDataContainer,
	MatriculeContainer,
	OperationButtonMinus,
	OperationButtonPluss,
	SelectWrapper,
	UpdateButton,
	UpdateIcon,
	VehicleInfoContainer,
	FavoriteButton,
	StarIcon,
} from './CheckFormAtoms';
const CheckForm = ({ nextRoute }) => {
	const { state, dispatch } = useContext(UsersDataState);
	const {
		companion,
		arriveInCar,
		fullName,
		VehicleType,
		DNI,
		VehiclePLateNumber,
		numberOfCompanions,
	} = state;
	const { handleSubmit } = useSubmitRoute();
	return (
		<ColumnContainerSpaceBtween>
			<SpaceBetweenContainer>
				<FullName>{fullName ? fullName : 'Carlos Villa'}</FullName>
				<UpdateButton>
					<UpdateIcon onClick={(e) => handleSubmit(e, '/')} />
				</UpdateButton>
			</SpaceBetweenContainer>
			<MainDataContainer>
				<DataTextP>DNI</DataTextP>
				<DataTextP>{DNI ? DNI : '999 999 999'}</DataTextP>
			</MainDataContainer>
			<SpaceBetweenContainer>
				<DataTextH4>Vehículo</DataTextH4>
				<Switch
					id={'selectedvehicle'}
					type={TYPES.ARRIVE_CAR}
					isChecked={arriveInCar}
				/>
			</SpaceBetweenContainer>
			<SpaceBetweenContainer style={{ marginTop: '1vh' }}>
				<VehicleInfoContainer>
					<SelectWrapper>
						{/* <SelectedVehicle /> */}
						{activeVehicle(VehicleType, '8vh')}
					</SelectWrapper>
					<MatriculeContainer>
						<DataTextP>Matricula</DataTextP>
						<DataTextP>
							{VehiclePLateNumber ? VehiclePLateNumber : '999 999 999'}
						</DataTextP>
					</MatriculeContainer>
				</VehicleInfoContainer>
				<UpdateButton>
					<UpdateIcon onClick={(e) => handleSubmit(e, '/vehicle')} />
				</UpdateButton>
			</SpaceBetweenContainer>
			<SpaceBetweenContainer style={{ marginTop: '5vh' }}>
				<DataTextH4>Acompañantes</DataTextH4>
				<Switch
					id={'acompañantes2'}
					type={TYPES.COMPANION}
					isChecked={companion}
				/>
			</SpaceBetweenContainer>
			<CounterContainer>
				<OperationButtonMinus
					onClick={() =>
						dispatch({ type: TYPES.COMPANIONS_NUMBER, payload: 'rest' })
					}
				/>
				<DisplayNumber>{numberOfCompanions}</DisplayNumber>
				<OperationButtonPluss
					onClick={() =>
						dispatch({ type: TYPES.COMPANIONS_NUMBER, payload: 'add' })
					}
				/>
			</CounterContainer>
			<FavoriteButton>
				Recordar en favoritos
				<StarIcon />
			</FavoriteButton>
			<FormButtonContainer onClick={(e) => handleSubmit(e, nextRoute)}>
				<FormButton type="submit">Listo</FormButton>
			</FormButtonContainer>
		</ColumnContainerSpaceBtween>
	);
};

export default CheckForm;
