const initialState = {
  productList: [],
  product: null,
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, productList: payload.data };
    case "GET_PRODUCT_DETAIL":
      return { ...state, product: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;
