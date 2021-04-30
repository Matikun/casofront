import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';
import { HiOutlineStar } from 'react-icons/hi';

export const ColumnContainerSpaceBtween = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5em 0.5em;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	color: #555;
`;
export const MainDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding: 0 2vh;
	margin-bottom: 4vh;
`;
export const FullName = styled.h3`
	font-size: 3.7vh;
	margin-bottom: 1vh;
`;

export const DataTextP = styled.p`
	font-size: 2.2vh;
	font-weight: 500;
	margin-bottom: 0.1vh;
	color: #666;
`;

export const UpdateButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: inherit;
`;

export const UpdateIcon = styled(FaPencilAlt)`
	font-size: 3.6vh;
`;

export const DataTextH4 = styled.h4`
	color: #666;
	font-size: 3.2vh;
	font-weight: 500;
`;

export const VehicleInfoContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
export const SelectWrapper = styled.div`
	display: 'flex';
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: '1vh 0';
	margin-right: 1vh;
`;

export const MatriculeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
`;

export const CounterContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 60%;
	padding-left: 2vh;
	margin-top: 1vh;
`;

export const OperationButtonPluss = styled(CgMathPlus)`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 1vh;
	font-size: 5vh;
	font-weight: 600;
	border-radius: 6px;
	color: #444;
	box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
`;

export const OperationButtonMinus = styled(CgMathMinus)`
	cursor: pointer;
	padding: 1vh;
	font-size: 5vh;
	font-weight: 600;
	border-radius: 6px;
	color: #444;
	box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.4);
`;

export const DisplayNumber = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4vh;
	font-weight: 400;
	border: 1px solid #444;
	border-radius: 6px;
	color: #666;
	width: 6vh;
	height: 6vh;
	padding: 0.8vh;
	padding-bottom: 1vh;
	margin: 0 2vh;
`;

export const FavoriteButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 93%;
	border-radius: 6px;
	font-weight: 600;
	margin: 0 auto;
	height: 6vh;
	margin-top: 8vh;
	padding: 0 1vh;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	font-size: 3.4vh;
`;

export const StarIcon = styled(HiOutlineStar)`
	font-size: 3.7vh;
	color: #ffc107;
	font-weight: 600;
`;
