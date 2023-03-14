import "./AboutModule.css";
import { Link } from "react-router-dom";
import andrew from "../../assets/image/andrew2.png";
import cv from "./Andres Velata CV.pdf";
const Me = () => {
  return (
    <div className="about-wrapper">
      <Link to="/home" className="backHome">
        <span>BACK HOME</span>
      </Link>
      <div className="about-left">
        <div className="shadow">
          <div className="about-img">
            <a href="https://www.linkedin.com/in/andres-velata/">
              <img src={andrew} alt="Andrew" />
            </a>
          </div>

          <h1>Andres Velata</h1>
          <h3>Engineer of TIC's</h3>
          <section className="buttons"></section>
        </div>
      </div>
      <div className="about-right">
        <h1>
          Andrew Developer<span>!</span>
        </h1>
        <h2>Here's who I am & what I do</h2>
        <div className="about-btns">
          <a href={cv} download>
            <button type="button" className="btn btn-pink">
              resume / CV
            </button>
          </a>
          <a href="https://github.com/AndrewVel">
            <button type="button" className="btn btn-white">
              Git hub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/andres-velata/">
            <button type="button" className="btn btn-pink">
              Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Me;
