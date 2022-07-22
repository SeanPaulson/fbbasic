import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;

    setInput((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const error = await signIn("credentials", {
      name: input.name,
      password: input.password,
      redirect: false,
      callbackUrl: '/',
    }).then(res => {
      if (res?.error) {
        setError(true)
      } else {
        setError(false);
        const url = res?.url as string;
        router.push(url);
      }
      return res;
    });

    setInput({
      name: "",
      password: "",
    });
  };
  return (
    <form className={styles.form} method="post" onSubmit={handleSubmit}>
      <button className={styles.form__button} type="submit">
        Login
      </button>
      <input
        className={styles.form__input}
        required
        placeholder="create your own username"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={input.name}
      />
      <input
        className={!error ? styles.form__input : styles.form__inputError}
        required
        placeholder="Password: is 'password'"
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
