import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { validate } from "./Validation";
import styles from "./From.module.css";

export default function Froms(props) {
  const location = useLocation();

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
      return props.login(from);
      alert("Datos completos");
    } else {
      return props.login(from);
      alert("Debes corregir los errores");

      setFrom({
        user: "",
        pass: "",
      });

      setErros({
        user: "",
        pass: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Usuario</label>
          <input
            className={erros.user && styles.warning}
            type="text"
            placeholder="usuario..."
            value={from.user}
            name="user"
            onChange={handleInputChange}
          ></input>
          <p className={styles.danger}>{erros.user}</p>
        </div>

        <div>
          <label htmlFor="pass">Contraseña</label>
          <input
            className={erros.pass && styles.warning}
            type="text"
            placeholder="contraseña..."
            value={from.pass}
            name="pass"
            onChange={handleInputChange}
          ></input>
          <p className={styles.danger}>{erros.pass}</p>
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
