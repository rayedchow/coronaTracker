import React, { useContext } from 'react';
import { Form, Select } from 'semantic-ui-react';
import { getCountryData } from '../data/APICalls';
import { CurrentCountry, CurrentState } from '../data/Store';
import '../styles/Search.css';

let mounted: boolean = false;
let options: Array<Object>;

const CountrySearchElement: React.FC = () => {

	// eslint-disable-next-line
	const [country, setCountry] = useContext(CurrentCountry);
	// eslint-disable-next-line
	const [state, setState] = useContext(CurrentState);
	
	if(mounted === false) {
		options = [];

		getCountryData()
			.then((res: any) => {
				for(let i: number = 0; i < res.length; i++) {
					options.push({ key: res[i]["country"], text: res[i]["country"], value: res[i]["country"] })
				};
			});
	}

	const handleChange = (e: HTMLFormElement, { value }: any) => {
		setCountry(value);
		setState("");
	};

	mounted = true;

	return (
		<div className="search">
			<Form.Field
				control={Select}
				options={options}
				placeholder='Countries'
				search
				onChange={handleChange}
			/>
		</div>
	);
}

export default CountrySearchElement;
