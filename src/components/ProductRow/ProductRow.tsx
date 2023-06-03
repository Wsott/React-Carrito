import { useState } from "react";
import { updateData } from "../ProductCard/ProductCard";
import estilo from "./ProductRow.module.css";


function ProductRow ({product, updateFinalPrice}: updateData) {//(data: productInput, {updateFinalPrice}: updateData) {
    const [amount, setAmount] = useState(0);

    function substract () {
        if (amount != 0) {
            setAmount(amount - 1);
            updateFinalPrice(-product.price);
        }        
    }

    function add () {
        setAmount(amount + 1)
        updateFinalPrice(product.price)
    }

    return (
        <div className={estilo.rowContainer}>
            <h2 className={estilo.title}>{product.name}</h2>         
            <h2 className={estilo.price}>${product.price}</h2>
            <div className={estilo.row}>
                <button className={estilo.botonIzquierdo} onClick={substract}>-</button>
                <p className={estilo.amount}>{amount}</p>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}

export default ProductRow;