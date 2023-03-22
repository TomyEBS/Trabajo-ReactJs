import Carrito from "./Carrito"
function NavBar(){
    
        const styleNavBar = {
            display: "flex",
            backgroundColor: "beige",
            color: "white",

        };
        /*Barra de navegación*/ 
        return(
            <div style={styleNavBar}>
            <ul>
                <h1>VintageStore</h1>
                <li><a href="">Inicio</a></li>
                <li><a href="">Prendas Superiores</a></li>
                <li><a href="">Prendas inferiores</a></li>
                <li><a href="">Calzado</a></li>
            </ul>
            <Carrito/>
            </div>
    )
    }
export default NavBar;