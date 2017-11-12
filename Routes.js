import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Send from './Send.js'
import Portfolio from './Portfolio.js'
import Coins from './Coins.js'

const Routes = () => (
   <Router>
       <Scene key = "root">
        <Scene key = "coins" component = {Coins} hideNavBar initial = {true}/>
        <Scene key = "send" component = {Send} hideNavBar />
        <Scene key = "portfolio" component = {Portfolio} hideNavBar/>
     </Scene>
  </Router>
)
export default Routes
