import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';

const UsersDataState = createContext();

const UsersDataContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<UsersDataState.Provider value={{ state, dispatch }}>
			{children}
		</UsersDataState.Provider>
	);
};

export { UsersDataContext, UsersDataState };
