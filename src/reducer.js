export const intialState = {
  cart: [],
  user: null,
};

export const getcartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "ADD_TO_CART":
      //Logic for adding itmes to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      //Logic for removing items from cart
      let newcart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        //Item exists in cart, remove it ...
        newcart.splice(index, 1);
      } else {
        console.warn(
          `Can not remove product(id: ${action.id} as it is not in the cart`
        );
      }
      return {...state, cart: newcart};
      break;
    default:
      return state;
  }
};

export default reducer;
