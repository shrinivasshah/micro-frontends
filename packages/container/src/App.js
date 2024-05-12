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
const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))


const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth" component={AuthLazy} />
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App