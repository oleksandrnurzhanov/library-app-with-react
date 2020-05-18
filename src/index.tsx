import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './features/App/App';
import store from './store';
import { Provider } from 'react-redux';
import './fonts/ABeeZee/ABeeZee-Regular.ttf';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
