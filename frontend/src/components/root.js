import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// We'll create this soon
import App from './app';

// import {ContextProvider} from '../components/socketcontext'
import { ContextProvider } from '../Context';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <ContextProvider>
                 <App />
            </ContextProvider>
        </HashRouter>
    </Provider>
);

export default Root;