import React, { useContext } from 'react';
import useSubmitRoute from '../../hooks/useSubmitRoute';
import { CardContainer } from './VehicleAtoms';
import { UsersDataState } from '../../Context/UsersDataContext';
import { TYPES } from '../../reducer/reducer';
import { renderVehicle } from '../../utils/utils';
import {
	Form,
	FormButton,
	FormButtonContainer,
	InputContainer,
	InputText,
	LabelText,
} from '../Form/FormAtoms';

const VehicleCards = ({ nextRoute }) => {
	const { state, dispatch } = useContext(UsersDataState);
	const { VehicleType } = state;
	const { handleSubmit } = useSubmitRoute();

	return (
		<Form onSubmit={(e) => handleSubmit(e, nextRoute)}>
			<CardContainer>{renderVehicle(VehicleType, '17vh')}</CardContainer>
			<InputContainer>
				<LabelText>Matricula</LabelText>
				<InputText
					placeholder="999 999 999"
					required
					onChange={(e) =>
						dispatch({
							type: TYPES.VEHICLE_PLATE,
							payload: e.target.value,
						})
					}
				/>
			</InputContainer>
			<FormButtonContainer>
				<FormButton type="submit">Siguiente</FormButton>
			</FormButtonContainer>
		</Form>
	);
};

export default VehicleCards;
