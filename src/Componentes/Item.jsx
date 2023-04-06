 import {useState} from "react";
 import "./item.css";

export default function Item(props){
    return(
        <div className="container">
            <div id={props.id} className="item-card">
              <div className="item-card_header">
                <h3>{props.title}</h3>
              </div>
              <img src={props.img} className="item-card_img" alt="imagen" />
              <h4>$ {props.price}</h4>
              <small>{props.category}</small>
            </div>
          </div>

    );
}
 