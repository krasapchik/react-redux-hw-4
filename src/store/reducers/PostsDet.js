import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    post: [],
    postsError: "",
    postsLoading: false
}

const postsDetSlice= createSlice({
    name: "post",
    initialState,
    reducers: {
        setLoadingDet: (state,actoin) => {
            state.postsError = ""
            state.postsLoading = actoin.payload
        },
        setPostsDet: (state, action) => {
            state.postsLoading = false
            state.postsError = ""
            state.post = action.payload
            
        },
        setErrorDet: (state, action) =>{
            state.postsError = action.payload
            state.post = []
            state.postsLoading = false
        }
    }
})

const postsDetReducer = postsDetSlice.reducer

export const {setLoadingDet, setPostsDet, setErrorDet} = postsDetSlice.actions

export default postsDetReducer