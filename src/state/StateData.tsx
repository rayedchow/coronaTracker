import React, { useContext, useState } from 'react'
import { CurrentCountry, CurrentState } from '../data/Store';
import { getStateData } from '../data/APICalls';
import '../styles/Data.css';

let lastState: any;

const StateData = () => {

	const [country] = useContext(CurrentCountry);
	const [state] = useContext(CurrentState);

	const [stateData, setStateData]: any = useState("");
	if(country === "USA") {
		if(state !== "") {
			if(stateData === "" || state !== lastState) {
				getStateData(state).then((res: any) => {
					lastState = state;
					setStateData(res);
				});
			}
		}
	}

	const listedData = [
		{
			"name": "cases",
			"index": "cases"
		},
		{
			"name": "cases today",
			"index": "todayCases"
		},
		{
			"name": "deaths",
			"index": "deaths"
		},
		{
			"name": "deaths today",
			"index": "todayDeaths"
		},
		{
			"name": "recovered",
			"index": "recovered"
		},
		{
			"name": "tests",
			"index": "tests"
		},
		{
			"name": "population",
			"index": "population"
		}
	];

	return (
		<>
			{country === "USA" && state !== "" &&

				<div className="container covidData">
					<br />

					{listedData.map(data => (

						<>

							<div className="dataName"><b>{data.name.toUpperCase()}</b></div>
							<div className="data">{`${stateData[data.index]}` !== "0" ? `${stateData[data.index]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</div>
							<br />
							
						</>

					))}

				</div>

			}
		</>
	)

}

export default StateData;