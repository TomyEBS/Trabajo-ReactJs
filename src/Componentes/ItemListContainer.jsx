import React from "react";
import Item from "./Item";
import Flex from "./Flex";
import products from "./products";


function ItemListContainer(){
    /* Let products = []; */
    const [products, setProducts] = useState([])

    getItems().then((respuesta) => {
        console.log("promesa cumplida" , respuesta);
        setProducts(respuesta)
    });

    return(
     <Flex>
    {products.map((producto) => (
        <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
        />
    ))}
     </Flex>
);
}

export default ItemListContainer;