import React from 'react'
import MarketingAPP from './components/MarketingApp'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles"

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default ()=>{
    return   ( 
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <MarketingAPP/>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}
