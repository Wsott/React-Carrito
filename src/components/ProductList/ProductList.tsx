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
                {
                    (input.displayMode)
                    ?
                    null
                    :
                    <ShoppingCart amount={finalPrice}></ShoppingCart>
                }
            </div>
            <div className={estilo.grilla}>
                {
                    (input.displayMode)
                    ?
                    // Version mobile
                    <>
                        <div className={estilo.rowSection}>
                            {
                            input.data.map((current) => (
                                <ProductRow product={current} updateFinalPrice={updateFinalPrice}></ProductRow>
                            ))
                            }
                        </div>
                    </>
                    :
                    // Version desktop
                    input.data.map((current) => (
                        <ProductCard product={current} updateFinalPrice={updateFinalPrice}></ProductCard>
                    ))
                }
            </div>
            {
                (input.displayMode)
                ?
                <ShoppingCart amount={finalPrice}></ShoppingCart>
                :
                null
            }
        </div>
    );
}

export default ProductList;