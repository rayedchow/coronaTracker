import React, { useContext, useState } from 'react';
import CountrySearch from './country/CountrySearch';
import CountryData from './country/CountryData';
import './styles/Application.css';
import logo from './img/logo.png';
import StateData from './state/StateData';
import StateSearch from './state/StateSearch';
import { CurrentCountry } from './data/Store';
import { getCountryData } from './data/APICalls';

let lastCountry: any;
let logoClass: any = "logo";

const Application: React.FC = (): any => {
	
	const [country] = useContext(CurrentCountry);
	const [countryLogo, setCountryLogo]: any = useState(logo);

	const onFooterClick = () => {
		window.open('https://github.com/voomp');
	}

	console.log(window.innerWidth);

	let stateClass = "";
	if(country === "USA") {
		stateClass = "state";
	} if(country !== lastCountry && country !== "") {
		lastCountry = country;
		logoClass = "logo countryLogo";
		getCountryData(country).then((res: any) => {
			setCountryLogo(res["countryInfo"]["flag"]);
		});
	}
	
	return (
		<>
			<div id="header">
				<img src={countryLogo} alt="Logo" className={logoClass} />
				<span id="logoName"><span id="coronaTracker">corona<span id="tracker">Tracker</span></span></span>
			</div>
			<div id="info">
				<div className="dataContainer">
					<CountrySearch />
					<CountryData />
				</div>
				<div className={`dataContainer ${stateClass}`}>
					<StateSearch />
					<StateData />
				</div>
			</div>
			<br />
			<br />
			<footer onClick={onFooterClick}>Programmed by Vamp</footer>
		</>
	)

};

export default Application;