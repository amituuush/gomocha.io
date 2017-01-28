var React = require('react');
var { Link } = require('react-router');

var Navbar = React.createClass({

  render: function() {

    return (
      <nav className="top-nav">
        <ul>
          <Link to="/admin-login"><li>Log in</li></Link>
        </ul>
      </nav>
    );

    // <div className="nav-container">
                //     <div className="nav-icons">
                //         <Link to="/admin"><i className="fa fa-tachometer fa-2x" aria-hidden="true"></i></Link>
                //         <Link to="/order-history"><i className="fa fa-history fa-2x" aria-hidden="true"></i></Link>
                //     </div>
                // </div>
  }
});

module.exports = Navbar;
