import NavBar from "./Componentes/NavBar";
import Flex from "./Componentes/Flex";
import Item from "./Componentes/Item";
import "./App.css";
import ItemListContainer from "./Componentes/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

/*------------------------------------------------------------->*/
function App(){
    return(
    <div>
        <header className="App-header">
            <NavBar/>
        </header>
        <ItemListContainer/>
    </div>
    );
}

export default App;