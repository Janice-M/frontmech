import { getProducts } from './apiAction'

export const headerUpdateAction = (dispatch, info) => {
  return dispatch({
    type: 'UPDATE_HEADER',
    header: info})
}

export const fetchProducts = async (dispatch) => {
  try {
    dispatch({type: 'FETCH_PRODUCTS'})
    const response = await getProducts()
    return dispatch({type: 'FETCH_PRODUCTS_SUCCESS', response})
  } catch (e) {
    return dispatch({type: 'FETCH_PRODUCTS_FAILURE'});
  }
}
