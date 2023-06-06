import { useState, useEffect } from 'react'
import AddForm, { Producto } from './components/AddForm/AddForm';
import ProductList from './components/ProductList/ProductList';
import estilo from './App.module.css';

function App () {
  const [itemList, setItemList] = useState<Producto[]>([])
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(true); 

  useEffect(() => {
    // Función que verifica si el dispositivo es móvil
    const checkIsMobile = () => {
      const isMobile = window.matchMedia('(max-width: 950px)').matches;
      setIsMobile(isMobile);
    };

    // Verificar el estado inicial del dispositivo
    checkIsMobile();

    // Agregar un listener para actualizar el estado cuando se cambie el tamaño de la ventana
    window.addEventListener('resize', checkIsMobile);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const changeComponent = () => {
    setShowForm(!showForm);
  }

  
  const addItemToTheList = (item: Producto) => {
    setItemList([...itemList, item]);
  };

  return (
    <div className={estilo.container}>
      {
        (isMobile)
        ?
          <div className={estilo.buttonRow}>
            {
              (showForm)
              ?
              <button onClick={changeComponent}>Mostrar listado</button>
              :
              <button onClick={changeComponent}>Mostrar formulario</button>
            }
          </div>
        :
        null
      }
      {
        (isMobile)
        ?
          (showForm)
          ?
          <AddForm updateFunction={addItemToTheList}></AddForm>
          :
          <ProductList data={itemList} displayMode={isMobile}></ProductList>
        :
        <>
          <AddForm updateFunction={addItemToTheList}></AddForm>
          <ProductList data={itemList} displayMode={isMobile}></ProductList>
        </>
      }
    </div>
  );
}

export default App
