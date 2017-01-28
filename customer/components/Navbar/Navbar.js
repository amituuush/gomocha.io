var React = require('react');
var { Link } = require('react-router');

var Navbar = React.createClass({

  render: function() {

    return (
      <nav className="top-nav">
        <ul>
          <li>Log in</li>
        </ul>
      </nav>
    );



    // return (
    //   <div>
    //     <nav className="top-nav">
    //       <div
    //         className="menu-bars"
    //         onClick={() => {this.props.menuToggle()}}>
    //         <i className={this.props.menuShow ? 'fa fa-times fa-2x' : 'fa fa-bars fa-2x'} aria-hidden="true"></i>
    //       </div>
    //         <div className="top-nav-logo">
    //           <img src="/img/gomocha-logo-sml.png" />
    //         </div>
    //       <ul className={this.props.menuShow ? 'menu-show' : 'menu-hide'}>
    //         <Link to="/dashboard" onlyActiveOnIndex={true} className='router-link'>
    //           <li onClick={() => {this.props.menuToggle()}}>Dashboard</li>
    //         </Link>
    //         <Link to="/previous-orders" className="prev-orders-link">
    //           <li onClick={() => {this.props.menuToggle()}}>Previous Orders</li>
    //         </Link>
    //         <Link to="favorite-orders" className="fav-orders-link">
    //           <li onClick={() => {this.props.menuToggle()}}>Favorite Orders</li>
    //         </Link>
    //         <Link to="/" className='router-link'>
    //           <li className="sign-out" onClick={() => {this.props.menuToggle()}}>Sign Out</li>
    //         </Link>
    //       </ul>
    //     </nav>
    //     <nav className="side-nav">
    //       <Link to="/" onlyActiveOnIndex={true} className='router-link'>
    //         <div className="side-nav-logo">
    //           <img src="/img/gomocha-logo-sml.png" />
    //         </div>
    //       </Link>
    //       <Link to="/" onlyActiveOnIndex={true} className='router-link'>
    //         <i className="fa fa-home fa-2x" aria-hidden="true"></i>
    //       </Link>
    //       <Link to="/previous-orders" className="prev-orders-link">
    //         <i className="fa fa-clock-o fa-2x"></i>
    //       </Link>
    //       <Link to="favorite-orders" className="fav-orders-link">
    //         <i className="fa fa-heart fa-2x"></i>
    //       </Link>
    //       <div className="side-nav-divider"></div>
    //       <Link to="/" className='router-link'><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></Link>
    //     </nav>
    //   </div>
    // );
  }
});

module.exports = Navbar;
