import  {configureStore,combineReducers} from "@reduxjs/toolkit"
import postsReducer from "./reducers/PostsSlice"
import postsDetReducer from "./reducers/PostsDet"
const rootReducer = combineReducers({
    postsReducer,
    postsDetReducer
})

const store = configureStore(
    {
        reducer: rootReducer
    }
)
export default store