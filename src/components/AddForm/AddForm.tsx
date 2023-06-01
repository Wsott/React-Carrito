import { useState } from 'react';

/*
Tipo de dato que representa el producto
*/
export type Producto = {
    name: string;
    description: string;
    price: number;
}

// type PreviousListData = {
//     items: Array<Item>;
// }

interface submitData {
  addItemToTheList: (item: Producto) => void;
}


function AddForm ( {addItemToTheList}: submitData ) {
    // const [item, setItem] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    // const setName = (value: string) => {
    //     name = value;
    // }
    /*
    Manejo del formulario, llamo a la funcion addItemToTheList y le paso el nuevo producto
    como parametro para que lo agregue.
    */
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem: Producto = {name: name, description: description, price: price};
        addItemToTheList(newItem);
        // const newItem: Item = {name: name, description: description, price: price}

        // data.items.push(newItem);
        // console.log(data.items)
        // setName('');
        // setDescription('');
        // setPrice(0);
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <h1>Cargar producto</h1>
                <label htmlFor="name">Nombre del producto</label>
                <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
                <label htmlFor="description">Descripcion del producto (Opcional)</label>
                <input type="text" name="description" id="description" onChange={(event) => setDescription(event.target.value)} />
                <label htmlFor="price">Precio</label>
                <input type="number" name="price" id="price" min={0} onChange={(event) => setPrice(Number(event.target.value))} />
                <button disabled={false} type={"submit"}>Agregar</button>
            </form>
        </div>
    )
}

export default AddForm;