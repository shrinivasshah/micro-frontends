import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles'
import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import { createBrowserHistory } from 'history';


import Progress from './components/Progress'

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))
const DashboardLazy = lazy(() => import("./components/DashboardApp"))

const history = createBrowserHistory()

const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" exact component={MarketingLazy} />
                        <Route path="/dashboard">
                            {!isSignedIn ? <Redirect to="/" /> : <DashboardLazy />}
                        </Route>
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
}

export default App