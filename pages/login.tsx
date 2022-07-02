import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import styles from "../styles/Login.module.css";



const Login: NextPage = () => {

  const [input, setInput] = useState({
    name: "",
    password: ""
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    const value : string = target.value;
    const name : string = target.name;
    
    setInput(prev => ({
        ...prev, [target.name]: target.value,
      }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setInput({
        name: "",
        password: ""
    });
  };

  return (
    <form
      className={styles.form}
      action="/api/login"
      method="post"
      onSubmit={handleSubmit}
    >
      <button className={styles.form__button} type="submit">
        Login
      </button>
      <input
        className={styles.form__input}
        required
        placeholder="Name:"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={input.name}
      />
      <input
        className={styles.form__input}
        required
        placeholder="Password:"
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={input.password}
      />
    </form>
  );
};

export default Login;
