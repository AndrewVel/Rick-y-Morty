import Card from "../Card/Card";
import styles from "./Styles.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.contenedor}>
      {characters.map(({ name, species, gender, image, id }) => (
        <div style={{ textAlign: "center" }}>
          <Card
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={props.onClose}
          />{" "}
        </div>
      ))}
    </div>
  );
}
