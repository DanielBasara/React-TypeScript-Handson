import React, { Component } from 'react'
import {HashRouter, Redirect, Route, Switch} from "react-router-dom"
import Film from '../view/film'
import Cinema from '../view/Cinema'
import Center from '../view/Center'
import Detail from '../view/Detail'

export default class IndexRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
        <Route path="/film" component={Film} ></Route>
        <Route path="/cinema" component={Cinema} ></Route>
        <Route path="/center" component={Center} ></Route>
        <Route path="/detail/:myid" component={Detail} ></Route>


        <Redirect from='/' to="/film"></Redirect>
        </Switch>
      </HashRouter>
    )
  }
}
