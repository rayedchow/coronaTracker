export const getCountryData: Function = async(country: string = "null") => {
	
	let data: any;

	await fetch("https://disease.sh/v3/covid-19/countries" + (country !== "null" ? "/" + country : ""))
		.then(response => response.json())
		.then(res => data = res);
	return data;

};

export const getStateData: Function = async(state: string = "null") => {
	
	let data: any;

	await fetch("https://disease.sh/v3/covid-19/states" + (state !== "null" ? "/" + state : ""))
		.then(response => response.json())
		.then(res => data = res);
	return data;

};