// modules/NavLink.js
/*
 * 标示当前活动链接
 * 
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
