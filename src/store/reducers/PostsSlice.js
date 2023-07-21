import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    postsError: "",
    postsLoading: false
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.postsError = ""
            state.postsLoading = true
        },
        setPosts: (state, action) => {
            state.postsLoading = false
            state.postsError = ""
            state.posts = action.payload
            state.id = action.payload
        },
        setError: (state, action) =>{
            state.postsError = action.payload
            state.posts = []
            state.postsLoading = false
        }
    }
})

const postsReducer = postsSlice.reducer

export const {setLoading, setPosts, setError} = postsSlice.actions

export default postsReducer