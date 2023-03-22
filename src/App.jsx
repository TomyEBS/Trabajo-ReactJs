import NavBar from "./Componentes/NavBar";
import Flex from "./Componentes/Flex";
import Item from "./Componentes/Item"
function App(){
    return(
    <div>
        <header className="App-header">
            <NavBar/>
        </header>
    </div>
    );
}
<Flex>
    <Item>
        title="Remera Negra"
        price="20"
        description="Remera de algodon negra"
        img="/imgs/remera.jpg"
    </Item>
    <Item>
        title="Jean Cargo"
        price="100"
        description="Jean azul cargo"
        img="/imgs/cargo.jpg"
    </Item>
    <Item>
        title="Converse"
        price="50"
        description="Zapatilla converse negra"
        img="/imgs/converse.jpg"
    </Item>
</Flex>
export default App;