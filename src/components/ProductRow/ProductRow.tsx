import { updateData } from "../ProductCard/ProductCard";
import estilo from "./ProductRow.module.css";


function ProductRow ({product, updateFinalPrice, removeElement}: updateData) {
    function substract () {
        if (product.amount != 0) {
            product.amount--;
            updateFinalPrice(-product.price);
        }        
    }

    function add () {
        product.amount++;
        updateFinalPrice(product.price)
    }

    function handleRemove () {
        updateFinalPrice(-(product.amount * product.price)); 
        removeElement(product);
    }

    return (
        <div className={estilo.rowContainer}>
            <h2 className={estilo.title}>{product.name}</h2>         
            <h2 className={estilo.price}>${product.price}</h2>
            <div className={estilo.row}>
                <button className={estilo.botonIzquierdo} onClick={substract}>-</button>
                <p className={estilo.amount}>{product.amount}</p>
                <button onClick={add}>+</button>
            </div>
            <button className={estilo.botonEliminar} onClick={handleRemove}>
                Quitar producto <i className={"fa fa-trash"}></i>
            </button>
        </div>
    );
}

export default ProductRow;