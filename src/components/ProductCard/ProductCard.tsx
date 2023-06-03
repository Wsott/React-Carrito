import { useState } from 'react';
import { Producto } from "../AddForm/AddForm";
import estilo from "./ProductCard.module.css";

type productInput = {
    product: Producto;
}

export interface updateData {
    product: Producto;
    updateFinalPrice: (amount: number) => void;
}

function ProductCard ({product, updateFinalPrice}: updateData) {//(data: productInput, {updateFinalPrice}: updateData) {
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
        <div className={estilo.card}>
            <h3 className={estilo.title}>{product.name}</h3>
            {/* {
            (data.description.length != 0)?
            <h5>{data.description}</h5>
            :
            <div>No posee descripcion</div>
            } */}
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