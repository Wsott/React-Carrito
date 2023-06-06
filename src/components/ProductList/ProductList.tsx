import { useState } from "react";
import { Producto } from "../AddForm/AddForm";
import ProductCard from "../ProductCard/ProductCard";
import estilo from "./ProductList.module.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ProductRow from "../ProductRow/ProductRow";

interface listInput {
    data: Array<Producto>;
    displayMode: boolean;
    removeElement: (target: Producto) => void;
}

function ProductList ({data, displayMode, removeElement}: listInput) {
    const [finalPrice, setFinalPrice] = useState(0);

    function updateFinalPrice (amount: number) {
        setFinalPrice(Number((finalPrice + amount).toFixed(2)));
    }

    return (
        <div className={estilo.container}>
            <div className={estilo.row}>
                <h1>Lista de productos</h1>
                {
                    (displayMode)
                    ?
                    null
                    :
                    <ShoppingCart amount={finalPrice}></ShoppingCart>
                }
            </div>
            <div className={estilo.grilla}>
                {
                    (displayMode)
                    ?
                    // Version mobile
                    <>
                        <div className={estilo.rowSection}>
                            {
                            data.map((current) => (
                                <ProductRow product={current} updateFinalPrice={updateFinalPrice} removeElement={removeElement}></ProductRow>
                            ))
                            }
                        </div>
                    </>
                    :
                    // Version desktop
                    data.map((current) => (
                        <ProductCard product={current} updateFinalPrice={updateFinalPrice} removeElement={removeElement}></ProductCard>
                    ))
                }
            </div>
            {
                (displayMode)
                ?
                <ShoppingCart amount={finalPrice}></ShoppingCart>
                :
                null
            }
        </div>
    );
}

export default ProductList;