export const initialState = {
  cart: [],
  subTotal: (0),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = [...state.cart, action.payload];
      return { ...state, cart: newItem };
    case "UPDATE_CART":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: action.payload.newQty, total: action.payload.newTotal };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: filteredCart };
    case "UPDATE_SUBTOTAL_SUB":
      const newSubTotal = (state.subTotal += action.payload);
      return { ...state, subTotal: newSubTotal };
    case "UPDATE_SUBTOTAL_MIN": {
      const newSubTotal = (state.subTotal -= action.payload);
      return { ...state, subTotal: newSubTotal };
    }
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
export default cartReducer;
