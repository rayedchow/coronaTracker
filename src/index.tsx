import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Application from './Application';
import Store from './data/Store';

ReactDOM.render(
	<Store>
		<Application />
	</Store>,
	document.getElementById('root')
);