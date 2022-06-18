export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, elem) => elem.item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action],
      };
    default:
      return state;
  }
};

export default reducer;
