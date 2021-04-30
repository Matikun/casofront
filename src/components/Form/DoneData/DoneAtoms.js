import styled from 'styled-components';
import { ImQrcode } from 'react-icons/im';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdDownload, IoMdMailOpen } from 'react-icons/io';

export const TextDoneContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 2.3vh;
	color: #555;
	width: 100%;
	margin-top: -2vh;
`;

export const TextDone = styled.span``;

export const QrCode = styled(ImQrcode)`
	font-size: 42vh;
	color: #000;
	margin: auto;
	margin-top: 6vh;
`;

export const IconsContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 1vh;
	margin-top: 3vh;
`;

export const WhatsUpIcon = styled(FaWhatsapp)`
	font-size: 7vh;
	color: #000;
`;

export const DownloadIcon = styled(IoMdDownload)`
	font-size: 7vh;
	margin: 0 2vh;
	color: #000;
`;

export const MailIcon = styled(IoMdMailOpen)`
	font-size: 7vh;
	color: #000;
`;
