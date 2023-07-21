import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "../../pages/Header/Header"
import { About, Main, Posts, PostsDetails } from "../../pages"


const App = () => {
  return (
 <Router>
  <Routes>
  <Route path="/" element = {<Header/>}>
  <Route path="/posts" element = {<Posts/>}/>
  <Route path="/about" element = {<About/>}/>
  <Route path="/main" element = {<Main/>}/>
 <Route path="/posts/:id" element= {<PostsDetails/>}/>
 <Route path="*" element = {<div>Not found 404</div>}/>
  </Route>
  </Routes>
 </Router>
  )
}

export default App