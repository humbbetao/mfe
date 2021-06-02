import React, {lazy, Suspense, useState, useEffect} from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Switch, Router, Redirect, useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles"
import ProgressBar from "./components/Progress"

const MarketingAppLazy = lazy(()=>import ('./components/MarketingApp'))
const AuthAppLazy = lazy(()=>import ('./components/AuthApp'))
const DashboardAppLazy = lazy(()=>import ('./components/DashboardApp'))
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory()

export default ()=>{

    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(()=>
        {
            if(isSignedIn){
                history.push('/dashboard')
            }
    }, [isSignedIn])


    return   ( 
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={()=> setIsSignedIn(false)}/>
                    <Suspense fallback={<ProgressBar/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={()=> setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/"/>}
                                <DashboardAppLazy />
                            </Route>
                            <Route path="/"  >
                                <MarketingAppLazy />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}
