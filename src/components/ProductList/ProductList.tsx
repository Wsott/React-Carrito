import { Producto } from "../AddForm/AddForm";
import ProductCard from "../ProductCard/ProductCard";
import estilo from "./ProductList.module.css";

type listInput = {
    data: Array<Producto>;
}

function ProductList (input: listInput) {
    return (
        <div className={estilo.container}>
            {
                input.data.map((current) => (
                    <ProductCard product={current}></ProductCard>
                ))
            }
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