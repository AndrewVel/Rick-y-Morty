import styles from "../Nav/Nav";
import { useState } from "react";
export default function SearchBar(props) {
  const [nomPersonaje, setNomPersonaje] = useState();
  const handlePersonaje = (event) => {
    setNomPersonaje(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        className={styles.barra}
        value={props.name}
        onChange={handlePersonaje}
      />
      <button
        onClick={() => props.onSearch(nomPersonaje)}
        className={styles.botonAgregar}
      >
        Agregar
      </button>
    </div>
  );
}
