import React, { useContext } from 'react';
import { Form, Select } from 'semantic-ui-react';
import { getStateData } from '../data/APICalls';
import { CurrentCountry, CurrentState } from '../data/Store';
import '../styles/Search.css';

let mounted: boolean = false;
let options: Array<Object>;

const StateSearchElement: React.FC = () => {

	const [country] = useContext(CurrentCountry);
	// eslint-disable-next-line
	const [state, setState] = useContext(CurrentState);

	if(country === "USA") {
		if(mounted === false) {
			options = [];
	
			getStateData()
				.then((res: any) => {
					for(let i: number = 0; i < res.length; i++) {
						options.push({ key: res[i]["state"], text: res[i]["state"], value: res[i]["state"] })
					};
				});
		}
	
		mounted = true;
	}

	const handleChange = (e: HTMLFormElement, { value }: any) => {
		setState(value);
	};

	return (
		<>
			{country === "USA" &&
				<div className="search state">
					<Form.Field
						control={Select}
						options={options}
						placeholder='States'
						search
						onChange={handleChange}
					/>
				</div>
			}
		</>
	);
}

export default StateSearchElement;
