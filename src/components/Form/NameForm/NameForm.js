import React, { useContext } from 'react';
import { UsersDataState } from '../../../Context/UsersDataContext';
import useSubmitRoute from '../../../hooks/useSubmitRoute';
import { TYPES } from '../../../reducer/reducer';
import {
	FormButton,
	FormButtonContainer,
	Form,
	InputContainer,
	InputText,
	LabelText,
} from '../FormAtoms';

const NameForm = ({ nextRoute }) => {
	const { state, dispatch } = useContext(UsersDataState);
	const { handleSubmit } = useSubmitRoute();
	const { fullName, DNI } = state;
	return (
		<Form onSubmit={(e) => handleSubmit(e, nextRoute)}>
			<InputContainer>
				<LabelText>Nombre y apellido</LabelText>
				<InputText
					placeholder="Carlos Villa"
					required
					onChange={(e) =>
						dispatch({ type: TYPES.FULL_NAME, payload: e.target.value })
					}
					value={fullName}
				/>
			</InputContainer>
			<InputContainer>
				<LabelText>DNI</LabelText>
				<InputText
					placeholder="999 999 999"
					required
					onChange={(e) =>
						dispatch({ type: TYPES.DNI, payload: e.target.value })
					}
					value={DNI}
				/>
			</InputContainer>
			<FormButtonContainer>
				<FormButton type="submit">Siguiente</FormButton>
			</FormButtonContainer>
		</Form>
	);
};

export default NameForm;
