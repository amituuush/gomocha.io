import React, { Component } from 'react';
import MenuSection from '../MenuSection/MenuSection';
import sass from './menu-form-container.scss';

export default class MenuFormContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuSectionShowing: ''
    };

    this.handleMenuSectionShow = this.handleMenuSectionShow.bind(this);
  }

  handleMenuSectionShow(menuSection) {
    this.setState({
      menuSectionShowing: menuSection
    });
  }

  render() {

    const menuSections = this.props.data.shops[0].menu.map((menuSection) => {
      return (
        <MenuSection
          menuSection={menuSection}
          slug={menuSection.slug}
          key={menuSection.slug}
          menuSectionShowing={this.state.menuSectionShowing}
          handleMenuSectionShow={this.handleMenuSectionShow}
          handleAddItemToOrder={this.props.handleAddItemToOrder}
          toggleAddNotification={this.props.toggleAddNotification}
          toggleErrorNotification={this.props.toggleErrorNotification} />
      );
    });

    return (
      <form>
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
