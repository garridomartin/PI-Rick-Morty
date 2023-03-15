import { useState } from "react";
import style from "./Forms.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username:"",
    password:"",
  });
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value}, errors, setErrors);
  };

  const [errors, setErrors] = useState({
    username:"",
    password:"",
  }); 

  const submitHandler = (event)=> {
    event.preventDefault();/*evito que se suceda por defecto, el submit (no me recarga la  pag) */
    login(userData);
  }


  return (
    <div className={style.container}>
      <div className={style.imageContainer}></div>
      <div className={style.formContainer}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">USERNAME: </label>
            <input
              type="text"
              name="username"
              autocomplete="on"
              value={userData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD: </label>
            <input
              type="text"
              name="password"
              autocomplete="on"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <p>{errors.username}</p>
          <div className={style.button}>
            <button type= "submit">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;