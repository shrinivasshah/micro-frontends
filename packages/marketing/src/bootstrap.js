import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';
// Mount function to start app
const mount = (el, options) => {
    const history = options && options.defaultHistory || createMemoryHistory({
        initialEntries: [options.initialPath]
    })
    if (options && options.onNavigate) {
        history.listen(options.onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    )

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location;
            if (pathname !== nextPathName) {
                history.push(nextPathName)
            }
        }
    }
}

// if we are in development and in isolation
// call mount immidiately

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root")
    if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() })
}

export { mount }