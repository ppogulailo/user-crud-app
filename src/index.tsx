import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Provider from 'react-redux/es/components/Provider';
import { CircularProgress } from '@mui/material';
import store, { persistor } from './redux/store';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={<CircularProgress/>} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
);

reportWebVitals();
