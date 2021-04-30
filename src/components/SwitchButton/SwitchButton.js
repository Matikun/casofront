import React from 'react';
import Switch from './Switch/Switch';

import { SpaceBetweenContainer, SwitchText } from './SwitchButtonAtoms';

const SwitchButton = ({ id, textLabel, isChecked, type }) => {
	return (
		<SpaceBetweenContainer>
			<SwitchText>{textLabel}</SwitchText>
			<Switch id={id} isChecked={isChecked} type={type} />
		</SpaceBetweenContainer>
	);
};

export default SwitchButton;
