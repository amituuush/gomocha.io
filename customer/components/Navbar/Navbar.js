import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const propTypes = {
  items: React.PropTypes.array,
  menuShow: React.PropTypes.bool,
  menuToggle: React.PropTypes.func,
  handleShoppingCartToggle: React.PropTypes.func,
};

class Navbar extends Component {

  render() {

    if (this.props.authenticated) {
      return (
      <div>
        <nav className="top-nav">
          <div className="menu-bars"
            onClick={() => {this.props.menuToggle()}}>
            <i className={this.props.menuShow ? 'fa fa-times fa-2x' : 'fa fa-bars fa-2x'} aria-hidden="true"></i>
          </div>
          <div className="top-nav-logo">
            <img src="/img/gomocha-logo-sml.png" />
          </div>
          <div className="shopping-cart" onClick={this.props.handleShoppingCartToggle}>
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <p>{this.props.items.length}</p>
          </div>
          <ul className={this.props.menuShow ? 'menu-show' : 'menu-hide'}>
            <Link to="/dashboard" onlyActiveOnIndex={true} className='router-link'>
              <li onClick={() => {this.props.menuToggle()}}>Dashboard</li>
            </Link>
            <Link to="/previous-orders" className="prev-orders-link">
              <li onClick={() => {this.props.menuToggle()}}>Previous Orders</li>
            </Link>
            <Link to="favorite-orders" className="fav-orders-link">
              <li onClick={() => {this.props.menuToggle()}}>Favorite Orders</li>
            </Link>
            <Link to="/logout" className='router-link'>
              <li className="sign-out" onClick={() => {this.props.menuToggle()}}>Log Out</li>
            </Link>
          </ul>
        </nav>
        <nav className="side-nav">
          <Link to="/dashboard" onlyActiveOnIndex={true} className='router-link'>
            <div className="side-nav-logo">
              <img src="/img/gomocha-logo-sml.png" />
            </div>
          </Link>
          <Link to="/dashboard" onlyActiveOnIndex={true} className='router-link'>
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
          </Link>
          <Link to="/previous-orders" className="prev-orders-link">
            <i className="fa fa-clock-o fa-2x"></i>
          </Link>
          <Link to="favorite-orders" className="fav-orders-link">
            <i className="fa fa-heart fa-2x"></i>
          </Link>
          <div className="side-nav-divider"></div>
          <Link to="/logout" className='router-link'><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></Link>
        </nav>
      </div>
    );
    } else {
      return (
        <div></div>
      );
    }
  }
}

Navbar.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);
