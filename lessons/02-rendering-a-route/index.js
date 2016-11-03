import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Repos from './modules/Repos'
import About from './modules/About'
render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={About} />
		<Route path="/repos" component={Repos} />
	</Router>),document.getElementById('app'))
