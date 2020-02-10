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
