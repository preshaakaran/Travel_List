import './App.css';
import './Components/Header'
import Header from './Components/Header';
import Form from './Components/Form';
import { useState } from 'react';
import PackingList from './Components/PackingList';
import Stats from './Components/Stats';


function App() {
  const [items,setItems] = useState([]);

  function handleAddItems(item){
    setItems((items)=>[...items,item]);

  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(){
    const confirmed=window.confirm(
      "Are you sure you want to clear all items?"
    );

    if (confirmed) setItems([]);
  }



  
  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}/>
      <Stats items={items}/>
      
    </div>
  );
}

export default App;
