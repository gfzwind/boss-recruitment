import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './navLink.scss'
@withRouter
class NavLink extends React.Component {
  static propsTypes = {
    data: PropTypes.array.isRequired
  }
  render() {
    // 先进行过滤，filter里面为true的会留下来,不会改变元数据
    const data = this.props.data.filter(v => !v.hide)
    const { pathname } = this.props.location
    return (
      <React.Fragment>
        {data.map(v => {
          return (
            <span key={v.path} className="navlink-span" onClick={() => {
              this.props.history.push(v.path)
            }}>
              <img src={v.path === pathname ? require(`./images/${v.icon}-active.png`) : require(`./images/${v.icon}.png`)} alt="" />
              <a style={v.path === pathname ? { color: 'blue' } : {}}>{v.title}</a>
            </span>
          )
        })}
      </React.Fragment>
    )
  }
}
export default NavLink;