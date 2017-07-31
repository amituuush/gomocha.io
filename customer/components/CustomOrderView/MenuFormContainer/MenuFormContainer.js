import React, { Component } from 'react';
import MenuSection from '../MenuSection/MenuSection';
import './menu-form-container.scss';

export default class MenuFormContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuShowing: '',
      itemOptionsShowing: ''
    };

    this.handleMenuShow = this.handleMenuShow.bind(this);
    this.handleItemOptionsShow = this.handleItemOptionsShow.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleHideItemOptions = this.handleHideItemOptions.bind(this);
  }

  handleMenuShow(id) {
    this.setState({
      menuShowing: id
    });
  }

  handleItemOptionsShow(id) {
    this.setState({
      itemOptionsShowing: id
    });
  }

  handleBackButton() {
    this.setState({
      menuShowing: ''
    });
  }

  handleHideItemOptions() {
    this.setState({
      itemOptionsShowing: ''
    });
  }

  render() {

    const menuSections = this.props.data.shops[0].menu.map((menuSection) => {
      return (
        <MenuSection
          menuSection={menuSection}
          id={menuSection.id}
          key={menuSection.id}
          menuShowing={this.state.menuShowing}
          itemOptionsShowing={this.state.itemOptionsShowing}
          handleMenuShow={this.handleMenuShow}
          handleItemOptionsShow={this.handleItemOptionsShow}
          handleHideItemOptions={this.handleHideItemOptions}
          handleAddItemToOrder={this.props.handleAddItemToOrder}
          toggleAddNotification={this.props.toggleAddNotification}
          toggleErrorNotification={this.props.toggleErrorNotification} />
      );
    });

    return (
      <form>
        <i onClick={this.handleBackButton} className={this.state.menuShowing ? "fa fa-arrow-left" : "fa-arrow-hide"} aria-hidden="true"></i>
        {menuSections}
      </form>
    );
  }
};

MenuFormContainer.propTypes = {
    data: React.PropTypes.object,
    handleAddItemToOrder: React.PropTypes.func,
    toggleAddNotification: React.PropTypes.func,
    toggleErrorNotification: React.PropTypes.func,
    handleSpecialInstructions: React.PropTypes.func
};
