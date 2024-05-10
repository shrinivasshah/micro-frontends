import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// if we are in development and in isolation
// call mount immidiately

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root")
    if (devRoot) mount(devRoot)
}

export { mount }