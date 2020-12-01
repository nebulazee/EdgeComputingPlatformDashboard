import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Devices from '../Devices/Devices'
import Home from '../Home/Home'
export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/addDevice" component={Devices} />
                    <Route exact path="/viewDevices" component={Devices} />
                </Switch>
            </React.Fragment>
        )
    }
}
