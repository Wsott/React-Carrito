

function AddForm () {
    return (
        <div>
            <form action="">
                <h1>Cargar producto</h1>
                <label htmlFor="name">Nombre del producto</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="description">Descripcion del producto (Opcional)</label>
                <input type="text" name="description" id="description" />
                <label htmlFor="price">Precio</label>
                <input type="number" name="price" id="price" min={0} />
                <button disabled={"disabled"}>Agregar</button>
            </form>
        </div>
    )
}

export default AddForm;