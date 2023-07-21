import { setError, setLoading, setPosts } from "../reducers/PostsSlice"


const fetchAllPosts = () => async (dispatch) => {
 try {
    dispatch(setLoading())
   const response = await fetch('http://localhost:5000/posts')
   if(!response.ok){
    throw new Error('sory')
}
   const data = await response.json()
   dispatch(setPosts(data))
 } catch (err) {
    dispatch(setError("Opps sorry something has gone wrong"))
 }

} 

export default fetchAllPosts