import React, { Component } from 'react';
import MenuSection from '../MenuSection/MenuSection';
import './menu-form-container.scss';

export default class MenuFormContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuShowing: ''
    };

    this.handleMenuShow = this.handleMenuShow.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleMenuShow(menuSection) {
    this.setState({
      menuShowing: menuSection
    });
  }

  handleBackButton() {
    this.setState({
      menuShowing: ''
    });
  }

  render() {

    const menuSections = this.props.data.shops[0].menu.map((menuSection) => {
      return (
        <MenuSection
          menuSection={menuSection}
          slug={menuSection.slug}
          key={menuSection.slug}
          menuShowing={this.state.menuShowing}
          handleMenuShow={this.handleMenuShow}
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
