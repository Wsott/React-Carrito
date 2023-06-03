import { useState } from "react";
import { Producto } from "../AddForm/AddForm";
import ProductCard from "../ProductCard/ProductCard";
import estilo from "./ProductList.module.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

type listInput = {
    data: Array<Producto>;
}

function ProductList (input: listInput) {
    const [finalPrice, setFinalPrice] = useState(0);

    function updateFinalPrice (amount: number) {
        setFinalPrice(Number((finalPrice + amount).toFixed(2)));
    }

    return (
        <div className={estilo.container}>
            <div className={estilo.row}>
                <h1>Lista de productos</h1>
                <ShoppingCart amount={finalPrice}></ShoppingCart>
            </div>
            <div className={estilo.grilla}>
                {
                    input.data.map((current) => (
                        <ProductCard product={current} updateFinalPrice={updateFinalPrice}></ProductCard>
                    ))
                }
            </div>
            {/* <ul>
                {input.data.map((current) => (
                    <li>
                        <ProductCard product={current}></ProductCard>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default ProductList;