import React from 'react'
import { Link } from 'react-router'
import './app.scss'

var App = React.createClass({

    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})

module.exports = App;
