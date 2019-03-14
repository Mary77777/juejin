import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Collect from '@/pages/Collect';
class Com extends Component{
    render(){
        return(
            <div className = "box">

                <Switch>
                    <Route path='/userapp/collect' component={ Collect }/>
                    <Route path='/userapp/login' component={ Login }/>
                    <Route path='/userapp/register' component={ Register }/>
                    
                </Switch>
            </div>
        )
    }
}

export default Com
