import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();
