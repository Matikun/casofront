import styled from 'styled-components';
import { globalStyles } from '../../Styles/GlobalStyles';
import { MdArrowBack } from 'react-icons/md';
import { GiPlainSquare, GiPlainCircle } from 'react-icons/gi';
import { BsFillTriangleFill } from 'react-icons/bs';
import { Link as LinkR } from 'react-router-dom';
export const NavbarContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100%;
	position: sticky;
	top: 0;
	left: 0;
	margin-bottom: 4.3vh;
`;

export const Topbar = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 4vh;
	width: 100;
	background-color: ${globalStyles.darkRed};
	padding: 0.4em;
`;

export const TopbarIconSquare = styled(GiPlainSquare)`
	font-size: 0.85em;
	color: #fff;
	opacity: 0.4;
	margin: 0 0.4em;
`;
export const TopbarIconCircle = styled(GiPlainCircle)`
	font-size: 0.85em;
	color: #fff;
	opacity: 0.4;
	margin: 0 0.4em;
`;
export const TopbarIconTriangle = styled(BsFillTriangleFill)`
	font-size: 0.85em;
	color: #fff;
	opacity: 0.4;
	margin: 0 0.4em;
	transform: rotate(180deg);
`;

export const Mainbar = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 10vh;
	background-color: ${globalStyles.lightRed};
	margin: 0;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
`;

export const IconLink = styled(LinkR)``;
export const IconMainbar = styled(MdArrowBack)`
	font-size: 44px;
	margin-left: 0.3em;
	color: #fff;
`;

export const MainbarText = styled.h2`
	font-size: 22px;
	margin-left: 1em;
	margin-top: 2vh;
	color: #fff;
	font-weight: 400;
`;

export const Progressbar = styled.div`
	background-color: ${globalStyles.darkRed};
	width: ${({ progress }) => (progress ? progress : '0%')};
	height: 4vh;
`;
