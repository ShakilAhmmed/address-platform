import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {getPersistorStore} from "./Redux/Store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading="null" persistor={getPersistorStore()}>
            <React.StrictMode>
                <BrowserRouter>
                    <Dashboard/>
                </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
