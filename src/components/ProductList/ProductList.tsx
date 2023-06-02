import { Producto } from "../AddForm/AddForm";
import estilo from "./ProductList.module.css";

type listInput = {
    data: Array<Producto>;
}

function ProductList (input: listInput) {
    return (
        <div className={estilo.container}>
            <ul>
                {input.data.map((item) => (
                    <li>{item.name} - {item.description} - {item.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;