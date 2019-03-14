import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CartDetail from '@/pages/CartDetail';

class Com extends Component{
    render(){
        return(
            <Route path='/cartDetail/:id' component={ CartDetail }/>
        )
    }
}

export default Com
