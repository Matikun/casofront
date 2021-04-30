import React from 'react';
import { MainContainer } from './ContainerAtoms';

const Container = ({ children }) => {
	return <MainContainer>{children}</MainContainer>;
};

export default Container;
