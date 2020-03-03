import { getProducts } from './apiAction'
import constants from './actionConstants'

export const headerUpdateAction = (dispatch, info) => {
  return dispatch({
    type: constants.UPDATE_HEADER,
    header: info})
}

export const fetchProducts = async (dispatch) => {
  try {
    dispatch({type: constants.FETCH_PRODUCTS})
    const response = await getProducts()

    const  { data } = response
    return dispatch({type: constants.FETCH_PRODUCTS_SUCCESS, data})
  } catch (e) {
    return dispatch({type: constants.FETCH_PRODUCTS_FAILURE});
  }
}
