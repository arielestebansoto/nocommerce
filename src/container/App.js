import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Payment from '../pages/Payment'
import ShoppingCart from '../pages/ShoppingCart'
import Success from '../pages/Success'
import Register from '../pages/Register'

import Header from '../components/Header'

const App = () => {
    return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/product" component={Product}/> 
            <Route exact path="/payment" component={Payment}/> 
            <Route exact path="/shoppingcart" component={ShoppingCart}/> 
            <Route exact path="/success" component={Success}/> 
            <Route exact path="/register" component={Register}/> 
        </Switch>
    </BrowserRouter>
 )
}
export default App