import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './components/App/App';
import DashboardView from './components/DashboardView/DashboardView/DashboardView';
import CustomOrderView from './components/CustomOrderView/CustomOrderView/CustomOrderView';
import SelectShopView from './components/SelectShopView/SelectShopView/SelectShopView';
import AdditionalInfoView from './components/AdditionalInfoView/AdditionalInfoView/AdditionalInfoView';
import OrderSummaryView from './components/OrderSummaryView/OrderSummaryView/OrderSummaryView';
import ConfirmationView from './components/ConfirmationView/ConfirmationView/ConfirmationView';
import PreviousOrdersView from './components/PreviousOrdersView/PreviousOrdersView/PreviousOrdersView';
import FavoriteOrdersView from './components/FavoriteOrdersView/FavoriteOrdersView/FavoriteOrdersView';
import UsernameView from './components/UsernameView/UsernameView/UsernameView';
import LoginView from './components/LoginView/LoginView';
import LogoutView from './components/LogoutView/LogoutView';

var Routes = <Route path="/" component={App}>
              <IndexRoute component={UsernameView} />
              <Route path="/login" component={LoginView} />
              <Route path="/dashboard" component={DashboardView} />
              <Route path="/select-shop" component={SelectShopView} />
              <Route path="/custom-order" component={CustomOrderView} />
              <Route path="/additional-info" component={AdditionalInfoView} />
              <Route path="/order-summary" component={OrderSummaryView} />
              <Route path="/confirmation" component={ConfirmationView} />
              <Route path="/previous-orders" component={PreviousOrdersView} />
              <Route path="/favorite-orders" component={FavoriteOrdersView} />
              <Route path="/logout" component={LogoutView} />
            </Route>

module.exports = Routes;
