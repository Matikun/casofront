const TYPES = {
	FULL_NAME: 'UPDATE_NAME',
	DNI: 'UPDATE_DNI',
	FEW_DAYS_VISIT: 'TOGGLE_VISIT',
	SET_VISIT_DAYS_START: 'SET_VISIT_DAYS_START',
	SET_VISIT_DAYS_END: 'SET_VISIT_DAYS_END',
	VISIT_TYPE: 'SET_TYPE_VISIT',
	ARRIVE_CAR: 'TOGGLE_CAR',
	VEHICLE_TYPE: 'SET_VEHICLE',
	VEHICLE_PLATE: 'SET_PLATE',
	COMPANION: 'TOGGLE_COMPANION',
	COMPANIONS_NUMBER: 'SET_COMPANIONS',
};

const initialState = {
	fullName: '',
	DNI: '',
	fewDaysVisit: true,
	visitDayDate: { startDayDate: '', endDayDate: '' },
	visitType: '',
	arriveInCar: true,
	VehicleType: [
		{ type: 'car', size: '17vh', active: true },
		{ type: 'motorcycle', size: '17vh', active: false },
		{ type: 'bicycle', size: '17vh', active: false },
	],
	VehiclePLateNumber: '',
	companion: true,
	numberOfCompanions: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case TYPES.FULL_NAME:
			const newName = action.payload;
			return { ...state, fullName: newName };
		case TYPES.DNI:
			const newDNI = action.payload;
			return { ...state, DNI: newDNI };
		case TYPES.FEW_DAYS_VISIT:
			return { ...state, fewDaysVisit: !state.fewDaysVisit };
		case TYPES.SET_VISIT_DAYS_START:
			const startDate = action.payload;
			return {
				...state,
				visitDayDate: {
					...state.visitDayDate,
					startDayDate: startDate,
				},
			};
		case TYPES.SET_VISIT_DAYS_END:
			const endDate = action.payload;
			return {
				...state,
				visitDayDate: {
					...state.visitDayDate,
					endDayDate: endDate,
				},
			};
		case TYPES.VISIT_TYPE:
			return state;
		case TYPES.ARRIVE_CAR:
			return { ...state, arriveInCar: !state.arriveInCar };
		case TYPES.VEHICLE_TYPE:
			const typeOFVehicle = action.payload;
			return {
				...state,
				VehicleType: state.VehicleType.map((vehicle) =>
					vehicle.type === typeOFVehicle
						? { ...vehicle, active: true }
						: { ...vehicle, active: false }
				),
			};
		case TYPES.VEHICLE_PLATE:
			const plateNumber = action.payload;
			return { ...state, VehiclePLateNumber: plateNumber };
		case TYPES.COMPANION:
			return { ...state, companion: !state.companion };
		case TYPES.COMPANIONS_NUMBER:
			if (action.payload === 'add') {
				return {
					...state,
					numberOfCompanions: state.numberOfCompanions + 1,
				};
			} else {
				return {
					...state,
					numberOfCompanions:
						state.numberOfCompanions <= 0
							? 0
							: state.numberOfCompanions - 1,
				};
			}

		default:
			return state;
	}
};

export { initialState, reducer, TYPES };
