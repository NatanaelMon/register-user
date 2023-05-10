import React from 'react';
import ReactDOM from 'react-dom/client';
import MyFunction from './routes.js';
import GlobalStyle from './styles/globalStyle';

// import Home from './containers/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <MyFunction /> <GlobalStyle />
    </>
);

