import constants from './actionConstants'

export const reducer = (state, action) => {
  switch (action.type) {
    case constants.UPDATE_HEADER:
      return {
        ...state,
        headerRoute: action.header.headerRoute,
        header: action.header.header,
        showSearch: action.header.showSearch
      };
    default:

  }
}

export const storeReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case constants.FETCH_PRODUCTS:
      return {
        ...state
      };
    case constants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data.products
      };
    case constants.FETCH_PRODUCTS_FAILURE:
      return {
        ...state
      };
    default:

  }
}
