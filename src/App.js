import React, { useState } from 'react';
import { uuid  } from 'uuidv4';

import TodoList from './components/TodoList';
import Button from './components/Button';

const App = () => {

  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Homework',
      done: false,
    },
    {
      id: uuid(),
      text: 'Cleaning',
      done: false,
    }
  ]);
  const [newItem , setNewItem] = useState('');
  const onItemClick = (item, e) => {

    if(item.done)
      e.stopPropagation();
    else {
      const itemIndex = items.findIndex(data => data.id === item.id);
      const newItems = [...items];
      if(itemIndex !== -1){
        newItems[itemIndex].done = true;
        setItems(newItems);
      }
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();

    if(newItem && (newItem !== '' &&  newItem.toString().trim() !== '')) {
      const item = {
        id: uuid(),
        text: newItem,
        done: false
      }
      setItems(current => [item,...current]);
      setNewItem('');
    }
  }

  return (
    <>
      <h2 
        style={{ 
          textAlign: 'center',
          backgroundColor: '#0b6bf2',
          margin: 0,
          padding: '10px 5px',
          color: '#fff',
        }}
      >SIMPLE TODO LIST</h2>
      <div style={{ width: '100%', maxWidth: 700, margin: '30px auto' }}>
        <form onSubmit={e => onSubmitForm(e)}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '10px 5px',
            }}
            placeholder="INPUT NEW TODO"
            autoFocus
          />
        </form>
        <TodoList
          items={items}
          onItemClick={onItemClick}
        />
        {/* button */}
        <div style={{ marginTop: 100 }}>
          <h3>Button Components</h3>
          <Button style={{ margin: '0 5px 0 5px' }}>Normal Button</Button>
          <Button style={{ margin: '0 5px 0 5px' }} disabled>Disabled Button</Button>
        </div>
      </div>
    </>
  );
}

export default App;
