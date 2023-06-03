import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AddForm, { Producto } from './components/AddForm/AddForm';
import ItemList from './components/ProductList/ProductList';
import ProductList from './components/ProductList/ProductList';
import estilo from './App.module.css';
import ProductCard from './components/ProductCard/ProductCard';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App () {
  // const items: Array<Item> = [];
  const [itemList, setItemList] = useState<Producto[]>([])
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // function checkIsMobile () {
  //   setIsMobile (window.matchMedia("(max-width: 450px)").matches);
  // }

  // checkIsMobile();
  // window.addEventListener("resize", checkIsMobile);


  useEffect(() => {
    // Función que verifica si el dispositivo es móvil
    const checkIsMobile = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
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
    // console.log(itemList);
  };

  // console.log(itemList);

  // const arroz: Producto = {
  //   name: "Bolsa de arroz",
  //   description: "",
  //   price: 10
  // };

  // const lataTomate: Producto = {
  //   name: "Lata de tomate",
  //   description: "Una lata de tomate generica",
  //   price: 70
  // };

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
      {/* <ProductCard product={arroz}></ProductCard>
      <ProductCard product={lataTomate}></ProductCard> */}
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
      
      {/* <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item.name} - {item.description} - {item.price}</li>
          ))}
        </ul> */}
    </div>
  );
}

export default App
