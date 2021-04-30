import { AnimatePresence, useAnimation } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { UsersDataState } from '../../../Context/UsersDataContext';
import useSubmitRoute from '../../../hooks/useSubmitRoute';
import { TYPES } from '../../../reducer/reducer';
import { inputAnimation, inputAnimation2 } from '../../../Styles/animation';
import SwitchButton from '../../SwitchButton';
import {
	Form,
	FormButton,
	FormButtonContainer,
	InputContainer,
	InputText,
	LabelText,
} from '../FormAtoms';
import {
	CalendarIcon,
	InlineInputCountainer,
	InputContainerDynamic,
	InputSelect,
	OptionValue,
} from './VisitFormAtoms';

const VisitForm = ({ nextRoute }) => {
	const animation = useAnimation();
	const { input } = inputAnimation;
	const { input2 } = inputAnimation2;
	const { state, dispatch } = useContext(UsersDataState);
	const { handleSubmit } = useSubmitRoute();
	const { fewDaysVisit, arriveInCar, visitDayDate } = state;

	useEffect(() => {
		//animations inputs
		if (!fewDaysVisit) {
			animation.start('animate');
		} else {
			animation.start('initial');
		}
	}, [fewDaysVisit, animation]);

	return (
		<Form onSubmit={(e) => handleSubmit(e, nextRoute)}>
			<SwitchButton
				textLabel="Visita de varios dias"
				isChecked={fewDaysVisit}
				type={TYPES.FEW_DAYS_VISIT}
				id={'1'}
			/>
			<InlineInputCountainer>
				<AnimatePresence initial={true} exitBeforeEnter>
					<InputContainerDynamic
						key={'input1'}
						animate={animation}
						variants={input}
						initial="initial"
						exit="initial"
						fullWidth={!fewDaysVisit}
					>
						<LabelText>Dia de inicio</LabelText>
						<InputText
							type="date"
							placeholder="Hoy"
							required
							onChange={(e) =>
								dispatch({
									type: TYPES.SET_VISIT_DAYS_START,
									payload: e.target.value,
								})
							}
							value={visitDayDate.startDayDate}
						/>
						<CalendarIcon />
					</InputContainerDynamic>
				</AnimatePresence>
				<AnimatePresence initial={true} exitBeforeEnter>
					{fewDaysVisit && (
						<InputContainerDynamic
							key={'input2'}
							animate="animate2"
							variants={input2}
							initial="initial2"
							exit="initial2"
						>
							<LabelText>Dia de fin</LabelText>
							<InputText
								type="date"
								placeholder="Hoy"
								onChange={(e) =>
									dispatch({
										type: TYPES.SET_VISIT_DAYS_END,
										payload: e.target.value,
									})
								}
								required
								value={visitDayDate.endDayDate}
							/>
							<CalendarIcon />
						</InputContainerDynamic>
					)}
				</AnimatePresence>
			</InlineInputCountainer>
			<InputContainer>
				<LabelText>Tipo de visita</LabelText>
				<InputSelect defaultValue="1">
					<OptionValue value="negocios">negocios</OptionValue>
				</InputSelect>
			</InputContainer>
			<SwitchButton
				textLabel="¿Viene en coche?"
				isChecked={arriveInCar}
				type={TYPES.ARRIVE_CAR}
				id={'2'}
			/>
			<FormButtonContainer>
				<FormButton type="submit">Siguiente</FormButton>
			</FormButtonContainer>
		</Form>
	);
};

export default VisitForm;
