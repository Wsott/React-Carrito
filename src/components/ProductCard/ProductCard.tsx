import { useState } from 'react';
import { Producto } from "../AddForm/AddForm";
import estilo from "./ProductCard.module.css";

type productInput = {
    product: Producto;
}

function ProductCard (data: productInput) {
    const [amount, setAmount] = useState(0);

    function substract () {
        setAmount((amount == 0)? 0: amount - 1);
    }

    function add () {
        setAmount(amount + 1)
    }

    return (
        <div className={estilo.card}>
            <h3 className={estilo.title}>{data.product.name}</h3>
            {/* {
            (data.description.length != 0)?
            <h5>{data.description}</h5>
            :
            <div>No posee descripcion</div>
            } */}
            <h5 className={estilo.description}>
                {
                    (data.product.description.length != 0)
                    ? 
                    data.product.description 
                    : 
                    "No posee descripcion"
                }
                </h5>            
            <h4 className={estilo.price}>${data.product.price}</h4>
            <div className={estilo.row}>
                <button onClick={substract}>-</button>
                <p className={estilo.price}>{amount}</p>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
}

export default ProductCard;