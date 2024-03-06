import style from "./PostList.module.css";


const PostList = ({ getPosts }) => {
  return (
    <div className={style.wrapper}>
   
      {getPosts.map((getPost) => (
        <div className={style.item} key={getPost.id}>
          <h2>{getPost.title}</h2>
          <p>{getPost.content}</p>
      
        </div>
      ))}
  
    </div>

  );
}

export default PostList;