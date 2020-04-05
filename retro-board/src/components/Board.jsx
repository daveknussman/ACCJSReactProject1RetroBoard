import React , {useState } from "react";
import TypeItems from "./TypeItems";

// https://github.com/AlbanyCanCodeCourses/JavaScriptFrameworks2020/tree/master/projects/1-retro-board *

function Board () {

    const [items, setItems] = useState([]);
    
    const addItem = itemType => {
        switch (itemType) {
            case 'well':
                setItems([...items, {type:itemType, name:'', likes:0, dislikes:0}]);        
                break;
            case 'improve':
                setItems([...items, {type:itemType, name:'', likes:0, dislikes:0}]);        
                break;
            case 'action':
                setItems([...items, {type:itemType, name:'', likes:0, dislikes:0}]);        
                break;
            case 'extra':
                setItems([...items, {type:itemType, name:'', likes:0, dislikes:0}]);        
                break;
            default: alert('illegal type');
        };
    }

    const deleteItem = delIndex => {
        setItems(items.filter((itm, currentIndex) => currentIndex !== delIndex));
    }

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
    setItems([...items]);
   } 

   const addLike = (idx) => {
       items[idx].likes += 1;
       setItems([...items]);
    }

   const addDislike = (idx) => {
    items[idx].dislikes += 1;
    setItems([...items]);
 }

    return (
    <>
    <div class="container">  
        <div class="item-column">
            <h2>Went Well</h2>
            <button onClick={() => addItem('well')}>Add Item</button>
            <TypeItems items={items} type="well" del={deleteItem} move={moveItem} update={updateItem} like={addLike} dislike={addDislike}/>
        </div>
        <div class="item-column">
            <h2>Needs Improvement</h2>
            <button onClick={() => addItem('improve')}>Add Item</button>
            <TypeItems items={items} type="improve" del={deleteItem} move={moveItem} update={updateItem} like={addLike} dislike={addDislike}/>
        </div>
        <div class="item-column">
            <h2>Action Items</h2>
            <button onClick={() => addItem('action')}>Add Item</button>
            <TypeItems items={items} type="action" del={deleteItem} move={moveItem} update={updateItem} like={addLike} dislike={addDislike}/>
            {/* {items.map((itm, idx) => {
                if (itm.type === 'action') {
                    return (
                        <div class="item action">
                            <input class="action" type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
                            <div class="div-actions">
                                <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
                                <button  onClick={() => moveItem(idx, 'L')}>Left</button>
                                <button onClick={() => addLike(idx)}>Like</button>
                                <input type="text" readonly class="output-value" value={items[idx].likes}/>
                                <button onClick={() => addDislike(idx)}>Dislike</button>
                                <input type="text" readonly class="output-value" value={items[idx].dislikes}/>
                            </div>
                        </div>
                    );
                }   
            })} */}
        </div>
    </div>
    </>
    );
}

export default Board;