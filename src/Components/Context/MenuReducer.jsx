const menuReducer = (state, action) => {
  switch (action.type) {
    case "GET_MENUS":
      return {
        ...state,
        prods: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
