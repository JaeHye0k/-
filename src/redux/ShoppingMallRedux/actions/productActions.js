function getProducts(selectQuery) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/JaeHye0k/React-study/products?q=${selectQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: { data },
    });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    const url = `https://my-json-server.typicode.com/JaeHye0k/React-study/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: "GET_PRODUCT_DETAIL",
      payload: { data },
    });
  };
}
export const productActions = { getProducts, getProductDetail };
