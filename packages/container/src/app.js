import React from 'react'
import MarketingAPP from './components/MarketingApp'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

export default ()=> {
    return   ( 
        <BrowserRouter>
            <div>
                <Header/>
                <MarketingAPP/>
            </div>
        </BrowserRouter>
    )
}
