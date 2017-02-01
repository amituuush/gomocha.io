import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './components/App/App';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AdminLoginView from './components/AdminLoginView/AdminLoginView';
import BusinessAdminView from './components/BusinessAdminView/BusinessAdminView/BusinessAdminView';
import OrderHistoryView from './components/OrdersHistoryView/OrderHistoryView/OrderHistoryView';
import LogoutView from './components/LogoutView/LogoutView';
import SignupView from './components/SignupView/SignupView';

var Routes = <Route path="/admin-login" component={App}>
                <IndexRoute component={AdminLoginView} />
                <Route path="/admin-dash" component={RequireAuth(BusinessAdminView)} />
                <Route path="/order-history" component={RequireAuth(OrderHistoryView)} />
                <Route path="/admin-logout" component={LogoutView} />
                <Route path="/admin-signup" component={SignupView} />
             </Route>

module.exports = Routes;
