import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import KindDetail from '@/pages/KindDetail';

class Com extends Component{
    render(){
        return(
            <Route path='/kindDetail/:id' component={ KindDetail }/>
        )
    }
}

export default Com