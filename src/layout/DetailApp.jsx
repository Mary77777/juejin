import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '@/pages/Detail';
import SmallDetail from '@/pages/SmallDetail';
class Com extends Component {

    render () {
        return(
            <div className="box">
            <Switch>
            <Route path="/detail/small/:id" component = { SmallDetail } />
            <Route path='/detail/:id' component={ Detail }/>
            
            </Switch>
            </div>
        )
    }
}

export default Com
