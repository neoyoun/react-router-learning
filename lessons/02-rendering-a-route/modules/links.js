import React,{Component} from 'react'
import { Link } from 'react-router'
export default class Links extends Component {
	render() {
		return(
			<ul className="linkList" role="nav">
				<li><Link to="/">home</Link></li>
				<li><Link to="/about">about</Link></li>
				<li><Link to="/repos">repos</Link></li>
    		</ul>
			)
	}
}