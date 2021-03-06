import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Block extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    highlight: PropTypes.bool,
    inset: PropTypes.string,
    title: PropTypes.string
  };

  renderTitle () {
    const { title } = this.props
    if (title) {
      return (
        <div className='content-block-title'>{title}</div>
      )
    }
    return null
  }

  render () {
    const { children, className, inset, highlight } = this.props
    const classes = classNames({
      'content-block': true,
      'inset': inset
    })
    return (
      <div className={className}>
        {this.renderTitle()}
        <div className={classes}>
          {!highlight && children}
          {highlight &&
            <div className='content-block-inner'>
              {children}
            </div>
          }
        </div>
      </div>
    )
  }
}
