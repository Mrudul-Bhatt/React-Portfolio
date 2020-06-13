import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';

ReactDOM.render(
	<ZeitProvider>
		<React.StrictMode>
			<CssBaseline />
			<App />
		</React.StrictMode>
	</ZeitProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
