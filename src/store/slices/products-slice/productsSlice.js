import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// const fetchProductsByCategory = createAsyncThunk(
// 'products/fetchProductsByCategoryStatus',
// async (categoryName, { getState, requestId }) => {
//   const { currentRequestId, loading } = getState().users
//   if (loading !== 'pending' || requestId !== currentRequestId) {
//     return
//   }
//   const response = await
//   return response.data
// }
// )

export const fetchAllProductsByCategory = createAsyncThunk(
  "products/fetchAllProductsByCategory",
  async (category) => {
    try {
      const products = await fetch("/mecca/db.json")
        .then((res) => res.json())
        .catch((error) => console.log(error))

      return { data: products[category], category }
    } catch (error) {
      console.log(error)
    }
  }
)
export const fetchProductInfo = createAsyncThunk(
  "products/fetchProductInfo",
  async (id) => {
    try {
      const products = await fetch("/mecca/dbArray.json")
        .then((res) => res.json())
        .catch((error) => console.log(error))
      const p = products.find((x) => (x.id = id))
      console.log(p)
      return p
    } catch (error) {
      console.log(error)
    }
  }
)
const initialState = {
  productsList: {},
  products: [],
  currentProductCategory: null,
  currentProductItem: null,
  status: {
    loading: "idle",
    currentRequestId: undefined,
    error: null,
  },
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsByCategory.fulfilled, (state, action) => {
        state.products = state.products.concat(action.payload.data)
        state.productsList[action.payload.category] = action.payload.data
      })
      .addCase(fetchProductInfo.fulfilled, (state, action) => {
        state.currentProductItem = action.payload
      })
    // .addCase(fetchAllProducts.fulfilled, (state, action) => {
    //   const { requestId } = action.meta
    //   if (
    //     state.status.loading === "pending" &&
    //     state.status.currentRequestId === requestId
    //   ) {
    //     state.status.loading = "idle"
    //     state.products = action.payload
    //     state.status.currentRequestId = undefined
    //   }
    // })
    // .addCase(fetchAllProducts.rejected, (state, action) => {
    //   const { requestId } = action.meta
    //   if (
    //     state.status.loading === "pending" &&
    //     state.status.currentRequestId === requestId
    //   ) {
    //     state.status.loading = "idle"
    //     state.status.error = action.error
    //     state.status.currentRequestId = undefined
    //   }
    // })
  },
})

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions

export default productsSlice.reducer
