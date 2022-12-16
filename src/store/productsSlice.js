import { createSlice } from "@reduxjs/toolkit";
import allProducts from '../data';

const initialState = {
    list: [],
    loading: false
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        startFetch(state) {
            state.loading = true
        },
        save(state, action) {
            const { payload } = action
            state.loading = false
            state.list = payload
        }
    }
})

export const { startFetch, save } = productsSlice.actions

export const getProducts = () => async (dispatch) => {
    dispatch(save([]))
    dispatch(startFetch())

    const products = await allProducts
   
    dispatch(save(products))
} 

const productsReducer = productsSlice.reducer

export default productsReducer