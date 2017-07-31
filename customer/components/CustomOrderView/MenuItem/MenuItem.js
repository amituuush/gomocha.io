import React, {Component} from 'react';
import AddToOrderButton from '../Options/AddToOrderButton';
import MilkType from '../Options/MilkType';
import Size from '../Options/Size';
import Quantity from '../Options/Quantity';
import Decaf from '../Options/Decaf';
import HotOrCold from '../Options/HotOrCold';
import './menu-item.scss';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);

    this.handleMenuShow = this.handleMenuShow.bind(this);
  }

  checkFormComplete() {
      var requiredOptions = this.props.options.filter(function(option){
          return option !== 'decaf';
      })
      var optionsCheck = requiredOptions.map(function(option) {
          return this.state.hasOwnProperty(option);
      }, this);
      return optionsCheck.reduce(function(prev, current) {
          return prev && current;
      }, true);
  }

  handleMilkTypeChange(event) {
      this.setState({
          milkType: event.target.value,
      });
  }

  handleSizeChange(event) {
      this.setState({
          size: event.target.value,
      });
  }

  handleQuantityChange(event) {
      this.setState({
          quantity: event.target.value,
      });
  }

  handleDecafChange(event) {
      this.setState({
          decaf: !this.state.decaf,
      });
  }

  handleHotOrColdChange(event) {
      this.setState({
          hotOrCold: event.target.value,
      });
  }

  handleAddItemToOrder(itemDetails) {
      this.props.handleAddItemToOrder(itemDetails);
      this.replaceState({});
  }


  renderOption(option, index) {
      switch (option) {
          case 'milkType':
              return <MilkType
                          handleChange={this.handleMilkTypeChange}
                          key={index}
                          value={this.state.milkType || 'default'} />
          case 'size':
              return <Size
                          handleChange={this.handleSizeChange}
                          key={index}
                          value={this.state.size || 'default'} />
          case 'quantity':
              return <Quantity
                          handleChange={this.handleQuantityChange}
                          value={this.state.quantity || 'default'}
                          key={index} />
      }
  }

  renderOption2(option, index) {
      switch (option) {
          case 'decaf':
              return <Decaf
                          handleChange={this.handleDecafChange}
                          key={index}
                          value={this.state.decaf || false} />
          case 'hotOrCold':
              return <HotOrCold
                          handleChange={this.handleHotOrColdChange}
                          key={index}
                          value={this.state.hotOrCold || false} />
      }
  }

  handleMenuShow() {
    console.log(this.props.itemId);
    this.props.handleMenuShow('test');
  }


  render() {
    let itemModal;

    // hide options
    // if this.props.menuShowing === this.props.id => show option
    if (this.props.menuShowing === this.props.id) {
      itemModal = (<div className="item-modal">
                <div className="item-top-row">

                    <div className="item-options">

                        {/* MilkType - Size - Quantity */}
                        {this.props.options.map(this.renderOption)}
                    </div>
                </div>

                {/* Decaf - HotOrCold */}
                <div className="item-other-options">
                {this.props.options.map(this.renderOption2)}
                    <AddToOrderButton
                        handleAddItemToOrder={this.handleAddItemToOrder}
                        handleItemFormComplete={this.handleItemFormComplete}
                        toggleAddNotification={this.props.toggleAddNotification}
                        toggleErrorNotification={this.props.toggleErrorNotification}
                        checkFormComplete={this.checkFormComplete}
                        itemName={this.props.itemName}
                        price={this.props.price}
                        itemDetails={this.state} />
                </div>
              </div>);
    }

      return (
          <div>
            <div onClick={this.handleMenuShow} className="drink-item">

                <div className="item-name-wrap">
                    <div className="item-name">
                    <label htmlFor="hot-drink">{this.props.itemName}</label>
                    </div>

                    <div className="item-price">
                        ${this.props.price.toFixed(2)}
                    </div>
                </div>
            </div>
            <div>
                {itemModal}
            </div>
          </div>
      );
  }
};

MenuItem.propTypes = {
    itemName: React.PropTypes.string,
    price: React.PropTypes.number,
    options: React.PropTypes.arrayOf(React.PropTypes.string),
    itemId: React.PropTypes.string,
    key: React.PropTypes.string,
    handleMenuShow: React.PropTypes.func,
    handleAddItemToOrder: React.PropTypes.func,
    calculateTotalAndTax: React.PropTypes.func,
    toggleAddNotification: React.PropTypes.func,
    toggleErrorNotification: React.PropTypes.func
};
