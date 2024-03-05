import style from "./PostList.module.css";


const PostList = ({ getPosts }) => {
  return (
    <div className={style.wrapper}>
      {getPosts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;