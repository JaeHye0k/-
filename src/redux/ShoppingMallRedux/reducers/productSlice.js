import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  product: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (selectQuery, thunkApi) => {
    try {
      const url = `https://my-json-server.typicode.com/JaeHye0k/React-study/products?q=${selectQuery}`;
      const response = await fetch(url);
      return await response.json(); // promise 리턴
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProductAll(state, action) {
    //   state.productList = action.payload.data;
    // },
    getProductDetail(state, action) {
      state.product = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
// reducer (Object): 동기적으로 state만 바꿀경우, redux 자체에서 처리 가능한 경우
// extraReducer (function): 외부 라이브러리 등의 도움을 받아 처리하는 경우, 주로 비동기 처리

export const productActions = productSlice.actions;
export default productSlice.reducer;

// function productReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCTS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL":
//       return { ...state, product: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;
