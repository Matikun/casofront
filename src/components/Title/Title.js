import React from 'react';
import { TitleContainer, TitleText } from './TitleAtoms';

const Title = ({ text }) => {
	return (
		<TitleContainer>
			<TitleText>{text}</TitleText>
		</TitleContainer>
	);
};

export default Title;
