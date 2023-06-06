import { useState } from 'react';
import { Producto } from "../AddForm/AddForm";
import estilo from "./ProductCard.module.css";

export interface updateData {
    product: Producto;
    updateFinalPrice: (amount: number) => void;
    removeElement: (target: Producto) => void;
}

function ProductCard ({product, updateFinalPrice, removeElement}: updateData) {
    const [amount, setAmount] = useState(1);


    function substract () {
        if (amount != 1) {
            setAmount(amount - 1);
            updateFinalPrice(-product.price);
        }        
    }

    function add () {
        setAmount(amount + 1)
        updateFinalPrice(product.price)
    }

    return (
        <div className={estilo.card}>
            <h3 className={estilo.title}>{product.name}</h3>
            <button onClick={() => removeElement(product)}>X</button>
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
                <p className={estilo.price}>{amount}</p>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}

export default ProductCard;