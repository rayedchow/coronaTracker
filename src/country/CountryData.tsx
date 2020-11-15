import React, { useContext, useState } from 'react';
import { CurrentCountry } from '../data/Store';
import { getCountryData } from '../data/APICalls';
import '../styles/Data.css';

let lastCountry: any;

const CountryData: React.FC = () => {

	const [country] = useContext(CurrentCountry);
	const [countryData, setCountryData]: any = useState("");
	if(country !== "") {
		if(countryData === "" || country !== lastCountry) {
			getCountryData(country).then((res: any) => {
				lastCountry = country;
				setCountryData(res);
			});
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
			"name": "recovered today",
			"index": "todayRecovered"
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
			{country !== "" &&

				<div className="container covidData">

					{listedData.map(data => (

						<>

							<div className="dataName"><b>{data.name.toUpperCase()}</b></div>
							<div className="data">{`${countryData[data.index]}` !== "0" ? `${countryData[data.index]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</div>
							<br />
							
						</>

					))}

				</div>
			
			}
		</>
	)

};

export default CountryData;