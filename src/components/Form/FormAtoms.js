import styled from 'styled-components';
import { globalStyles } from '../../Styles/GlobalStyles';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em 1em;
	justify-content: space-around;
	width: 100%;
	height: auto;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1vh 1vh;
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 100%;
	height: auto;
	margin-bottom: 4vh;
`;

export const LabelText = styled.label`
	font-size: 0.8em;
	color: #555;
	margin-bottom: 2px;
`;

export const InputText = styled.input`
	display: flex;
	padding: 1em;
	height: 7vh;
	width: 100%;
	border: 1px solid #555;
	border-radius: 6px;
	&:focus {
		outline-color: #777;
	}
`;

export const FormButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
`;

export const FormButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	width: 92%;
	height: 7.5vh;
	background: ${globalStyles.darkRed};
	white-space: nowrap;
	color: #fff;
	font-size: 22px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	bottom: 0;
	margin-bottom: 5vh;
	position: absolute;

	&:hover {
		transition: all 0.2 ease-in-out;
		background: #fff;
		color: ${globalStyles.darkRed};
	}
`;
