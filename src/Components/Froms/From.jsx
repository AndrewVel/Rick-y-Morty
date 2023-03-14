import React from "react";
import { validate } from "./Validation";
import styles from "./From.Module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/image/rym.png";

export default function Froms() {
  const username = "a@in.com";
  const password = "andres1";
  const history = useHistory();

  const [access, setAccess] = useState(false);

  function login(from) {
    if (from.pass === password && from.user === username) {
      setAccess(true);
      history.push("/home");
      console.log("si");
    }

    //navigate("/error");
    console.log("no");
  }

  useEffect(() => {
    !access && history.push("/");
  }, [access, history]);

  const [from, setFrom] = useState({
    user: "",
    pass: "",
  });

  const [erros, setErros] = useState({
    user: "",
    pass: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const valueF = event.target.value;
    setFrom({
      ...from,
      [property]: valueF,
    });
    setErros(
      validate({
        ...from,
        [property]: valueF,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let arrayErrores = Object.values(erros);

    if (arrayErrores.length === 0) {
      alert("Datos completos");
      return login(from);
    } else {
      alert("Debes corregir los errores");

      setFrom({
        user: "",
        pass: "",
      });

      setErros({
        user: "",
        pass: "",
      });
      return login(from);
    }
  };

  return (
    <div className={styles.todo}>
      <img src={logo} alt="Logo App" className={styles.logo} />
      <form onSubmit={handleSubmit} className={styles.from}>
        <h3 className={styles.loginText}>Login Here</h3>
        <div>
          <label className={styles.labelText} htmlFor="user">
            Usuario
          </label>
          <br></br>
          <input
            className={erros.user ? styles.warning : styles.inputLogin}
            type="text"
            placeholder="usuario..."
            value={from.user}
            name="user"
            onChange={handleInputChange}
          ></input>
          <p className={styles.danger}>{erros.user}</p>
        </div>

        <div>
          <label className={styles.labelText} htmlFor="pass">
            Contraseña
          </label>
          <br></br>
          <input
            className={erros.pass ? styles.warning : styles.inputLogin}
            type="text"
            placeholder="contraseña..."
            value={from.pass}
            name="pass"
            onChange={handleInputChange}
          ></input>
          <p className={styles.danger}>{erros.pass}</p>
        </div>

        <button className={styles.buttonLogin} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}
