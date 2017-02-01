import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './components/App/App';
import RequireAuth from './components/RequireAuth/RequireAuth';
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
import SignupView from './components/SignupView/SignupView';

var Routes = <Route path="/" component={App}>
              <IndexRoute component={UsernameView} />
              <Route path="/login" component={LoginView} />
              <Route path="/dashboard" component={RequireAuth(DashboardView)} />
              <Route path="/select-shop" component={RequireAuth(SelectShopView)} />
              <Route path="/custom-order" component={RequireAuth(CustomOrderView)} />
              <Route path="/additional-info" component={RequireAuth(AdditionalInfoView)} />
              <Route path="/order-summary" component={RequireAuth(OrderSummaryView)} />
              <Route path="/confirmation" component={RequireAuth(ConfirmationView)} />
              <Route path="/previous-orders" component={RequireAuth(PreviousOrdersView)} />
              <Route path="/favorite-orders" component={RequireAuth(FavoriteOrdersView)} />
              <Route path="/logout" component={LogoutView} />
              <Route path="/signup" component={SignupView} />
            </Route>

module.exports = Routes;
