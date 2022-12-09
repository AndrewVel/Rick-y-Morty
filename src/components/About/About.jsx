import React from "react";
import styles from "./About.module.css";
import { useLocation } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.contTotal}>
      <div>
        <h1>Mi Perfil</h1>
      </div>
      <div>
        <img src="https://photos.app.goo.gl/hKMQxkjQpwqSyfYGA"></img>
        <h2>Nombres</h2>
        <h2>Apellidos</h2>
        <h2>Nacionalidad</h2>
        <h2>Mi Perfil</h2>
      </div>
    </div>
  );
}
