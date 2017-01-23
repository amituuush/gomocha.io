import React from 'react'
import { Link } from 'react-router'
import './app.scss'

var App = React.createClass({

    render: function() {
        return (
            <div>
                <div className="nav-container">
                    <div className="nav-icons">
                        <Link to="/admin"><i className="fa fa-tachometer fa-2x" aria-hidden="true"></i></Link>
                        <Link to="/order-history"><i className="fa fa-history fa-2x" aria-hidden="true"></i></Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
})

module.exports = App;
