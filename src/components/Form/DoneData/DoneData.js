import React, { useContext } from 'react';
import { UsersDataState } from '../../../Context/UsersDataContext';
import { getFirstName } from '../../../utils/utils';
import Title from '../../Title/Title';
import { ColumnContainerSpaceBtween } from '../CheckForm/CheckFormAtoms';
import {
	DownloadIcon,
	IconsContainerCenter,
	MailIcon,
	QrCode,
	TextDone,
	TextDoneContainer,
	WhatsUpIcon,
} from './DoneAtoms';

const DoneData = () => {
	const { state } = useContext(UsersDataState);
	const { fullName } = state;
	return (
		<ColumnContainerSpaceBtween style={{ marginTop: '-3vh' }}>
			<Title
				//getting first name
				text={`¡${
					fullName ? getFirstName(fullName) : 'Carlos'
				} ya está listo! `}
			/>
			<TextDoneContainer>
				<TextDone>Necesitará este código para poder</TextDone>
				<TextDone>Ingresar al condominio, recuerda enviarlo</TextDone>
			</TextDoneContainer>
			<QrCode />
			<IconsContainerCenter>
				<WhatsUpIcon />
				<DownloadIcon />
				<MailIcon />
			</IconsContainerCenter>
		</ColumnContainerSpaceBtween>
	);
};

export default DoneData;
