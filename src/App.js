import "./App.css";
//----------------------------------------------Importar Componentes
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import Favorites from "./Components/Favorites/Favorites";
import Back from "./Components/Back/Back";
import React from "react";
import { Route } from "react-router-dom";
import Froms from "./Components/Froms/From";

function App() {
  

  return (
    <div className="App">
      <Route exact path="/" component={Froms} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail}></Route>
      <Route exact path="/favorites" component={Favorites}></Route>
      <Back />
    </div>
  );
}
export default App;
