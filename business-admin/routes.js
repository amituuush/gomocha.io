import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './components/App/App'
import AdminLoginView from './components/AdminLoginView/AdminLoginView'
import BusinessAdminView from './components/BusinessAdminView/BusinessAdminView/BusinessAdminView'
import OrderHistoryView from './components/OrdersHistoryView/OrderHistoryView/OrderHistoryView'

var Routes = <Route path="/admin-login" component={App}>
                <IndexRoute component={AdminLoginView} />
                <Route path="/admin-dash" component={BusinessAdminView} />

                <Route path="/order-history" component={OrderHistoryView} />
             </Route>

module.exports = Routes;
