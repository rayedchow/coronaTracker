import React, { useState } from 'react';

const initialState = ""

export const CurrentCountry: any = React.createContext(initialState);
export const CurrentState: any = React.createContext(initialState);

const Store = ({ children }: any) => {

	const [country, setCountry] = useState(initialState);
	const [state, setState] = useState(initialState);

	return (
		<>
			<CurrentCountry.Provider value={[country, setCountry]}><CurrentState.Provider value={[state, setState]}>{children}</CurrentState.Provider></CurrentCountry.Provider>
		</>
	)

}

export default Store;