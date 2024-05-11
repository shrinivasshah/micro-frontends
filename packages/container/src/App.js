import {
    StylesProvider,
    createGenrateClassName
} from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

const generateClassName = createGenrateClassName({
    productionPrefix: "co"
})

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App