import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllPosts from "../../store/creatos/postsCreator";
import { useNavigate } from "react-router-dom";
import classes from "./Posts.module.css";
import { Link } from "react-router-dom";
const Posts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError } = useSelector(
    (state) => state.postsReducer
  );
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  return (
    <div className={classes.box}>
      {postsLoading || !posts.length
        ? "Loading..."
        : postsError
        ? postsError
        : posts?.map((el) => {
            return (
              <div key={el.id} className={classes.post}>
                <div className={classes.div}>
                  <button onClick={() => navigate(`/posts/${el.id}`)}>
                    Details
                  </button>
                </div>
                <b>{el.id}</b>
                <br />
                <b>{el.title} </b>
                <div className={classes.con}>
                  {" "}
                  <div className={classes.body}>{el.body}</div>
                  <Link to={`/posts/${el.id}`}> More... </Link>{" "}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Posts;
