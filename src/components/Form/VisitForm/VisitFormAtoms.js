import styled from 'styled-components';
import { IoMdCalendar } from 'react-icons/io';
import { motion } from 'framer-motion';

export const InlineInputCountainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0;
	margin-top: 3.5vh;
	flex-wrap: wrap;
	margin-bottom: 4vh;
`;

export const InputContainerDynamic = styled(motion.div)`
	position: relative;
	display: inline-block;
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '48%')};

	transition: transform 0.25s;
	transition: all 0.2 ease-in;
`;

export const CalendarIcon = styled(IoMdCalendar)`
	position: absolute;
	bottom: 4px;
	right: 5px;
	font-size: 40px;
	color: #444;
`;

export const InputSelect = styled.select`
	display: block;
	padding: 8px 15px;
	height: 7vh;
	max-width: 100%;
	background-color: #fff;
	width: 100%;
	border: 1px solid #555;
	cursor: pointer;
	border-radius: 6px;

	&:focus,
	:active :hover,
	:active {
		border: 1px solid #444;
		overflow: hidden;
		width: 100%;
		outline: none;
	}
`;

export const OptionValue = styled.option`
	max-width: 100%;
	width: 100%;
	overflow: ellipsis;
	display: block;
	border-radius: 6px;
`;
