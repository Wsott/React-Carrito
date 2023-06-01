import { useState } from 'react';

type Item = {
    name: string;
    description: string;
    price: number;
}

function AddForm (  ) {
    // const [item, setItem] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    // const setName = (value: string) => {
    //     name = value;
    // }
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem: Item = {name: name, description: description, price: price}

        console.log(newItem);
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