export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_HEADER":
      return {
        ...state,
        headerRoute: action.header.headerRoute,
        header: action.header.header,
        showSearch: action.header.showSearch
      };
    default:

  }
}

export const productReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        data: action.response
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state
      };
    default:

  }
}
