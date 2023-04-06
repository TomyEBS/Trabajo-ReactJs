import react, {useState, useEffect} from "react";
import React from "react";
import Item from "./Item";
/*-----------------------------------------------*/
import productsDatabase from "./products";

function getItems(){
    const promesa = new Promise((resolve) => {
        setTimeout(()=> {
            resolve (productsDatabase);
        } , 2500);
        });

        return promesa;
    }



function ItemListContainer(){
    /* Let products = []; */
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
        getItems().then((respuesta) => {
            console.log("promesa cumplida" , respuesta);
            setProducts(respuesta);
        });
    },
    []
        )
    

    return(
         
    products.map((producto) => (
        <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
        />
    ))
  
);
}

export default ItemListContainer;