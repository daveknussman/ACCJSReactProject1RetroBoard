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
            <button className="add-button" onClick={() => addItem('well')}>Add Item</button>
            <TypeItems items={items} type="well" del={deleteItem} move={moveItem} update={updateItem} like={addLike} dislike={addDislike}/>
        </div>
        <div class="item-column">
            <h2>Needs Improvement</h2>
            <button className="add-button" onClick={() => addItem('improve')}>Add Item</button>
            <TypeItems items={items} type="improve" del={deleteItem} move={moveItem} update={updateItem} like={addLike} dislike={addDislike}/>
        </div>
        <div class="item-column">
            <h2>Action Items</h2>
            <button className="add-button" onClick={() => addItem('action')}>Add Item</button>
            <TypeItems items={items} type="action" del={deleteItem} move={moveItem} update={updateItem} like={addLike} dislike={addDislike}/>
        </div>
    </div>
    </>
    );
}

export default Board;