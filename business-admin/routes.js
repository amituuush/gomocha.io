import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './components/App/App'
import BusinessAdminView from './components/BusinessAdminView/BusinessAdminView/BusinessAdminView'
import OrderHistoryView from './components/OrdersHistoryView/OrderHistoryView/OrderHistoryView'

var Routes = <Route path="/admin" component={App}>
                <IndexRoute component={BusinessAdminView} />
                <Route path="/order-history" component={OrderHistoryView} />
             </Route>

module.exports = Routes;
