import { useState } from "react";
import { Producto } from "../AddForm/AddForm";
import ProductCard from "../ProductCard/ProductCard";
import estilo from "./ProductList.module.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductRow from "../ProductRow/ProductRow";

type listInput = {
    data: Array<Producto>;
    displayMode: boolean;
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
                    (input.displayMode)
                    ?
                    // Version mobile
                    input.data.map((current) => (
                        <ProductRow product={current} updateFinalPrice={updateFinalPrice}></ProductRow>
                    ))
                    :
                    // Version desktop
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