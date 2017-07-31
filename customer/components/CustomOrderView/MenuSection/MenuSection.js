import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import _ from 'lodash';
import './menu-section.scss';

export default class MenuSection extends Component {

    render() {
      let menuItems;
      const {menuSection} = this.props;
      let sectionTitle;

      if (this.props.menuShowing) {
        if (this.props.menuShowing === this.props.id) {
          sectionTitle = menuSection.sectionTitle;
        }
      } else {
        sectionTitle = menuSection.sectionTitle;
      }

      if (this.props.menuShowing === this.props.id) {
        menuItems = menuSection.items.map((item, index) => {
          return (
            <MenuItem
              itemName={item.name}
              price={item.price}
              options={item.options}
              id={item.id}
              key={item.id}
              itemOptionsShowing={this.props.itemOptionsShowing}
              handleItemOptionsShow={this.props.handleItemOptionsShow}
              handleHideItemOptions={this.props.handleHideItemOptions}
              handleAddItemToOrder={this.props.handleAddItemToOrder}
              calculateTotalAndTax={this.props.calculateTotalAndTax}
              toggleAddNotification={this.props.toggleAddNotification}
              toggleErrorNotification={this.props.toggleErrorNotification} />
          );
      });
      }

        return (
            <section onClick={() => {this.props.handleMenuShow(this.props.id)}} className="menu-section">
                <h2>
                  {sectionTitle}
                </h2>
                <div>
                  {menuItems}
                </div>
            </section>
        );
    }
};

MenuSection.propTypes = {
    menuSection: React.PropTypes.object,
    id: React.PropTypes.string,
    menuShowing: React.PropTypes.string,
    itemOptionsShowing: React.PropTypes.string,
    handleMenuShow: React.PropTypes.func,
    handleItemOptionsShow: React.PropTypes.func,
    handleHideItemOptions: React.PropTypes.func,
    handleAddItemToOrder: React.PropTypes.func,
    toggleAddNotification: React.PropTypes.func,
    toggleErrorNotification: React.PropTypes.func
};
