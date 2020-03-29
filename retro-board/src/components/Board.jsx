import React , {useState } from "react";


function Board () {

    const [items, setItems] = useState([]);
    
    const addItem = itemType => {
        // console.log(newItem);
        // console.log(itemType);
        switch (itemType) {
            case 'well':
                setItems([...items, {type:itemType, name:newWellItem, like:' '}]);        
                break;
            case 'improve':
                setItems([...items, {type:itemType, name:improveItem, like:' '}]);        
                break;
            case 'action':
                setItems([...items, {type:itemType, name:newActionItem, like:' '}]);        
                break;
            default: alert('illegal type');
        };
    }

    const deleteItem = delIndex => {
        setItems(items.filter((itm, currentIndex) => currentIndex !== delIndex));
    }
    
    const [newWellItem, setNewWellItem] = useState('');
    const handleWellItemChange = e => setNewWellItem(e.target.value);
    
    const [improveItem, setImproveItem] = useState('');
    const handleImproveItemChange = e => setImproveItem(e.target.value);

    const [newActionItem, setNewActionItem] = useState('');
    const handleActionItemChange = e => setNewActionItem(e.target.value);

    const moveItem = (idx, dir) => {
        switch (dir) {
            case 'L':
                (items[idx].type === 'improve') ? items[idx].type = 'well' : items[idx].type = 'improve';       
                break;
            case 'R':
                (items[idx].type === 'well') ? items[idx].type = 'improve' : items[idx].type = 'action';       
                break;
            default: alert('illegal move');
        };
        setItems([...items]);
    }

   const updateItem = (idx, value) => {
    items[idx].name = value;
   } 

    return (
        <>
        {/* Went well */}
        <div>
            <h2>Went Well</h2>
            <input type="textarea" placeholder="Enter text here" onChange={handleWellItemChange} value={newWellItem}/>
            <button onClick={() => addItem('well')}>Add Item</button>
            <table className="table table-compact">
            <thead></thead>
                <tbody>
                    {items.map((itm, idx) => {
                        if (itm.type === 'well') {
                            return (
                                    <tr>
                                        <td>{itm.name}</td>
                                        {/* <td> */}
                                        <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
                                        <button onClick={() => moveItem(idx, 'R')}>Right</button>
                                        <button>Like</button>
                                        <button>Dislike</button>
                                        {/* </td> */}
                                    </tr>
                                );
                            }   
                        })}
                    </tbody>
            </table>
        </div>
        {/* To Improve   */}
        <div>
            <h2>To Improve</h2>
            {/* <input type="textarea" placeholder="Enter text here" onChange={handleImproveItemChange} value={newImproveItem}/> */}
            <button onClick={() => addItem('improve')}>Add Item</button>
            {items.map((itm, idx) => {
                if (itm.type === 'improve') {
                    return (
                        <div>
                            <input type="textarea" placeholder={itm.name} onChange={(e) => updateItem(idx, e.target.value)}/>
                            {/* <input type="textarea" value={itm.name}/> */}
                            <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
                            <button onClick={() => moveItem(idx, 'L')}>Left</button>
                            <button  onClick={() => moveItem(idx, 'R')}>Right</button>
                            <button>Like</button>
                            <button>Dislike</button>
                        </div>
                    );
                }   
            })}
        </div>
        {/* Action Items             */}
        <div>
            <h2>Action Items</h2>
            <input type="textarea" placeholder="Enter text here" onChange={handleActionItemChange} value={newActionItem}/>
            <button onClick={() => addItem('action')}>Add Item</button>
            {items.map((itm, idx) => {
                if (itm.type === 'action') {
                    return (
                        <div>
                            <input type="textarea" placeholder={itm.name} onChange={(e) => updateItem(idx, e.target.value)}/>
                            <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
                            <button onClick={() => moveItem(idx, 'L')}>Left</button>
                            <button>Like</button>
                            <button>Dislike</button>
                        </div>
                    );
                }   
            })}
        </div>
        </>
    );
}

export default Board;

