import React from 'react';
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer';
import OrderTotal from '../OrderTotal/OrderTotal';
import AddItemNotification from '../AddItemNotification/AddItemNotification';
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions';
import Footer from '../../DashboardView/Footer/Footer';
import { Link } from 'react-router';
import sass from '../../App/app.scss';
import sass2 from './custom-order-view.scss';

var CustomOrderView = React.createClass({

    propTypes: {
        notification: React.PropTypes.shape({
            add: React.PropTypes.bool,
            delete: React.PropTypes.bool,
            error: React.PropTypes.bool
        }),
        data: React.PropTypes.object,
        items: React.PropTypes.array,
        handleSpecialInstructions: React.PropTypes.func,
        handleAddItemToOrder: React.PropTypes.func,
        handleDeleteItemFromOrder: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        toggleDeleteNotification: React.PropTypes.func,
        toggleErrorNotification: React.PropTypes.func,
        toggleFormNotification: React.PropTypes.func,
        shoppingCarShow: React.PropTypes.bool,
        handlShoppingCartToggle: React.PropTypes.func
    },

    render: function() {
        var nextButton;
        if (this.props.items.length > 0) {
            nextButton = <Link to="/additional-info">
                            <button className="next-button">
                                Checkout
                                <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                            </button>
                        </Link>
        } else {
            nextButton = <button
                            onClick={this.props.toggleFormNotification}
                            className="next-button">
                            Checkout
                            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                        </button>
        }

        return (
            <div className="custom-order-container">
                <div className="title-cover">
                    <h1>Restaurant Name/Logo</h1>
                    <p>Hours of Operation</p>
                    <p>123 Union Street</p>
                </div>
                <div className="custom-order-view-wrap">
                    <AddItemNotification
                    notification={this.props.notification} />
                    <div className="menu-form-container">
                            <MenuFormContainer
                                data={this.props.data}
                                handleSpecialInstructions={this.props.handleSpecialInstructions}
                                handleAddItemToOrder={this.props.handleAddItemToOrder}
                                toggleAddNotification={this.props.toggleAddNotification}
                                toggleErrorNotification={this.props.toggleErrorNotification} />

                    </div>
                    <div className={this.props.shoppingCartShow ? "order-total-container" : "order-total-container order-total-container-active"}>
                         <OrderTotal
                             orderItems={this.props.items}
                             handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
                             toggleDeleteNotification={this.props.toggleDeleteNotification} />
                             <SpecialInstructions
                                handleSpecialInstructions={this.props.handleSpecialInstructions} />
                            {nextButton}
                    </div>
                 </div>
                 <Footer />
                 <div className={this.props.items.length > 0 && !this.props.shoppingCartShow ? "checkout-modal" : "checkout-modal-hide"}>
                    <Link to="/additional-info">
                      <button className="next-button">
                          Checkout
                          <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                      </button>
                    </Link>
                 </div>
             </div>
        )
    }
});

module.exports = CustomOrderView;
