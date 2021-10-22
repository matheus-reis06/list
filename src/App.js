import React, { useState } from 'react';
import './App.css';



function App() {
const [item, setItem] = useState(''); //O item é o estado em si. Enquanto o setItem é a função que permite modificar o item. Semelhante ao setState
const [itemList, setItemList] = useState([]);

const addItem = () => {
  setItemList([item].concat(itemList))
  setItem('')
}
  return (
    <div className="App">
      <h1>Nexus Group</h1>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} />
      <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {itemList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
);
}

export default App;