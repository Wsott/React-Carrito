import { useState } from 'react';
import estilo from './AddForm.module.css';

/*
Tipo de dato que representa el producto
*/
export type Producto = {
    id: string;
    name: string;
    description: string;
    price: number;
    amount: number;
}

interface submitData {
  updateFunction: (item: Producto) => void;
}

function AddForm ( {updateFunction}: submitData ) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    /*
    Manejo del formulario, llamo a la funcion addItemToTheList y le paso el nuevo producto
    como parametro para que lo agregue.
    */
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem: Producto = {
            id: Date.now().toString(),
            name: name, 
            description: description, 
            price: price,
            amount: 0
        };
        updateFunction(newItem);
        setName('');
        setDescription('');
        setPrice(0);
    }

    return (
        <div className={estilo.container}>
            <form onSubmit={handleForm} className={estilo.form}>
                <h1>Cargar producto</h1>
                <div className={estilo.cell}>
                    <label htmlFor="name" className={estilo.cell}>Nombre del producto</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(event) => setName(event.target.value)}
                    value={name} className={estilo.cell}
                    />
                </div>

                <div className={estilo.cell}>
                    <label htmlFor="description" className={estilo.cell}>Descripcion (Opcional)</label>
                    <input 
                    type='text'
                    name="description" 
                    id="description" 
                    onChange={(event) => setDescription(event.target.value)} 
                    value={description} className={estilo.cell}
                    />
                </div>

                <div className={estilo.cell}>
                    <label htmlFor="price" className={estilo.cell}>Precio</label>
                    <input 
                    type="number" 
                    name="price" 
                    id="price" 
                    min={0} 
                    step={0.1}
                    onChange={(event) => setPrice(Number(event.target.value))} 
                    value={price} className={estilo.cell}
                />
                </div>
                <button className={estilo.cell} disabled={
                    (name != "" && price != 0)? false : true
                } type={"submit"}>Agregar</button>
            </form>
        </div>
    )
}

export default AddForm;