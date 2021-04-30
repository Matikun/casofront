import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
	position: relative;
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 62px;
	height: 30px;
	border-radius: 15px;
	background: #666;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 25px;
		height: 25px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.3);
		transition: 0.2s;
	}
`;
export const CheckButton = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 62px;
	height: 30px;
	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 25px;
			height: 25px;
			margin-left: 36px;
			transition: 0.2s;
		}
	}
`;
