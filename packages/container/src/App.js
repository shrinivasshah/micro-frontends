import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { lazy } from 'react'
import { Suspense } from 'react'
import Progress from './components/Progress'
import { useState } from 'react'
const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))


const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false)



    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App