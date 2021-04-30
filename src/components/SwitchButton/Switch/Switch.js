import React, { useContext } from 'react';
import { UsersDataState } from '../../../Context/UsersDataContext';
import { CheckBoxLabel, CheckBoxWrapper, CheckButton } from './SwitchAtoms';

const Switch = ({ id, isChecked, type }) => {
	const { dispatch } = useContext(UsersDataState);
	return (
		<CheckBoxWrapper>
			<CheckButton
				id={id}
				type="checkbox"
				checked={isChecked}
				onChange={() => dispatch({ type })}
			/>
			<CheckBoxLabel htmlFor={id} />
		</CheckBoxWrapper>
	);
};

export default Switch;
