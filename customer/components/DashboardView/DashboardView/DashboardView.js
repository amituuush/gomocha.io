import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import '../../App/app.scss';
import './dashboard-view.scss';

class DashboardView extends Component {

  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="title-cover">
        <h1>Hey {this.props.username}!</h1>
        <h1>Your coffee is just minutes away.</h1>
        </div>

        <div className="main-wrap">
            <Link to="/select-shop" className="start-button-wrap">
              <button
                onClick={this.props.handleClearItemsFromOrder}
                className="next-button start-button">
                <i className="fa fa-coffee" aria-hidden="true"></i>
                  Start
              </button></Link>
        </div>
        <div className="dash-landing-icon-wrap">
          <div className="dash-landing-icon dash-landing-icon-1">
            <img src="/img/landing-icon-1.png" />
            <h2>Select a shop</h2>
          </div>
          <div className="dash-landing-icon dash-landing-icon-2">
            <img src="/img/landing-icon-2.png" />
            <h2>Place your order</h2>
          </div>
          <div className="dash-landing-icon dash-landing-icon-3">
            <img src="/img/landing-icon-3.png" />
            <h2>Ready when you arrive!</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

DashboardView.propTypes = {
  username: React.PropTypes.string,
  handleClearItemsFromOrder: React.PropTypes.func
}

export default connect(null, actions)(DashboardView);
