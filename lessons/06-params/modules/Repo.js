import React,{Component} from 'react'
export default React.createClass({
	render() {
		return (
			<div>
				<div>this.props.params.userName:<h2>{this.props.params.userName}</h2></div>
				<div>this.props.params.repoName:<h2>{this.props.params.repoName}</h2></div>
			</div>)
	}
})