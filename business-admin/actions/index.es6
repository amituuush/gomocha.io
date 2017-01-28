import axios from 'axios';
import { FETCH_ORDERS_ERROR, FETCH_ORDERS_SUCCESS, COMPLETE_ORDER } from './types';

export const fetchOrders = () => {
  return function(dispatch) {
    axios.get('/api/orders')
      .then((res) => {
        dispatch({
            type: FETCH_ORDERS_SUCCESS,
            orders: res
        })
      })
      .catch((err) => {
        dispatch({
            type: FETCH_ORDERS_ERROR,
            payload: err
        })
      })
  }
};

export const completeOrder = (orderId) => {
    return function(dispatch) {
        axios.patch('/api/orders/' + orderId)
            .then((res) => {
                dispatch({
                    type: COMPLETE_ORDER,
                    orderId: orderId
                })
            })
    }
};
