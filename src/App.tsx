import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AddForm, { Producto } from './components/AddForm/AddForm';
import ItemList from './components/ProductList/ProductList';
import ProductList from './components/ProductList/ProductList';
import estilo from './App.module.css';

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
  
  const addItemToTheList = (item: Producto) => {
    setItemList([...itemList, item]);
    // console.log(itemList);
  };

  // console.log(itemList);

  return (
    <div className={estilo.container}>
      {/* <AddForm updateFunction={addItemToTheList} ></AddForm>
      <ProductList data={itemList}></ProductList> */}
      {/* <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item.name} - {item.description} - {item.price}</li>
          ))}
        </ul> */}
    </div>
  );
}

export default App
