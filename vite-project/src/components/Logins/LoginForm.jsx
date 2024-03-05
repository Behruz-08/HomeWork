
import style from "./LoginForm.module.css"


const LoginForm = ({ onSubmit }) => {

 
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
  
      onSubmit(data);
    };

  
  
    return (
      <div className={style.wraper}>
      <form onSubmit={handleSubmit} className={style.form}>
     
       
          <input type="text" name="name" placeholder="Name" required />
      
       
         
          <input type="email" name="email" placeholder="Email" required />
    
      
        
          <input type="password" name="password" placeholder="Password" required />
       
        <button type="submit">Register</button>
      </form>
      </div>
    );
 

    }

export default LoginForm


