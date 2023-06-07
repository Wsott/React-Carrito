import { useState } from 'react';
import { Producto } from "../AddForm/AddForm";
import estilo from "./ProductCard.module.css";

export interface updateData {
    product: Producto;
    updateFinalPrice: (amount: number) => void;
    removeElement: (target: Producto) => void;
}

function ProductCard ({product, updateFinalPrice, removeElement}: updateData) {
    //const [amount, setAmount] = useState(0);


    function substract () {
        if (/*amount != 0*/product.amount != 0) {
            //setAmount(amount - 0);
            product.amount--;
            updateFinalPrice(-product.price);
        }        
    }

    function add () {
        product.amount++;
        //setAmount(amount + 1)
        updateFinalPrice(product.price)
    }

    function handleRemove () {
        updateFinalPrice(-(product.amount * product.price)); 
        removeElement(product);
    }

    return (
        <div className={estilo.card}>
            <button className={estilo.botonEliminar} onClick={/*() => removeElement(product) */ handleRemove}>
                Quitar producto <i className={"fa fa-trash"}></i>
            </button>
            <h3 className={estilo.title}>{product.name}</h3>
            <h5 className={estilo.description}>
                {
                    (product.description.length != 0)
                    ? 
                    product.description 
                    : 
                    "Este producto no posee descripcion"
                }
                </h5>            
            <h4 className={estilo.price}>${product.price}</h4>
            <div className={estilo.row}>
                <button onClick={substract}>-</button>
                <p className={estilo.price}>{product.amount}</p>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}

export default ProductCard;