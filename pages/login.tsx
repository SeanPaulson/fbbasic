import type { NextPage } from "next";
import { signIn, SignInResponse, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import styles from "../styles/Login.module.css";


const Login: NextPage = () => {

  const [error, setError] = useState(false);

  const [input, setInput] = useState({
    name: "",
    password: ""
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    
    setInput(prev => ({
        ...prev, [target.name]: target.value,
      }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const error = await signIn('credentials', {
      name: input.name,
      password: input.password,
      callbackUrl: '/',
      redirect: false,
    });

    if (error?.error) {
      console.log(error);
      setError(true);
    }
    setInput({
        name: "",
        password: ""
    });
  };
  return (
    <form
      className={styles.form}
      method="post"
      onSubmit={handleSubmit}
    >
      <button className={styles.form__button} type="submit" >
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
        value={input.name}      />
      <input
        className={error ? styles.form__input : styles.form__input__error}
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
