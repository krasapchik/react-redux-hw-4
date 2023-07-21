import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  setError,
  setErrorDet,
  setLoading,
  setLoadingDet,
  setPostsDet,
} from "../../store/reducers/PostsDet";

const PostsDetails = () => {
  const { post, postsLoading, postsError } = useSelector(
    (state) => state.postsDetReducer
  );
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingDet(true));
    fetch(`http://localhost:5000/posts/${id}` )
      .then((res) => res.json())
      .then((data) => dispatch(setPostsDet(data)))
      .catch((error) => setErrorDet(error))
      .finally(() => {
        dispatch(setLoadingDet(false));
        
      });
  }, []);
return (
    <div>
      {postsLoading || !post ? (
        "Loading..."
      ) : (
        <div style={{ padding: "100px" }}>
          {" "}
          <button onClick={() => navigate("/posts")}>Back</button>
          <br />
          <b>
            {post.id} <br />
            {post.title}
          </b>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
