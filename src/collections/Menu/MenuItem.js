import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

/**
 * @example
 * <MenuItem label='Home Page' name='home' />
 */
export default class MenuItem extends Component {
  static propTypes = {
    activeItem: PropTypes.string,
    callbackParent: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(this.props.name);
    }
    this.props.callbackParent(this.props.name);
  };

  render() {
    let menuLabel = <div className='sd-menu-label ui blue label'>{this.props.label}</div>;
    let isActive = this.props.activeItem === this.props.name;
    let classes = classNames(
      'sd-menu-item',
      this.props.className,
      'blue',
      'item',
      {active: isActive}
    );
    return (
      <a {...this.props} className={classes} onClick={this.handleClick}>
        {this.props.name}
        {this.props.label && menuLabel}
        {this.props.children}
      </a>
    );
  }
}