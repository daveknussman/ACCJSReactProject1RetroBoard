import React , {useState } from "react";

{/* https://github.com/AlbanyCanCodeCourses/JavaScriptFrameworks2020/tree/master/projects/1-retro-board */}

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
            {items.map((itm, idx) => {
                if (itm.type === 'well') {
                    return (
                        <div class="item well">
                            <input class="well" type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
                            <div class="div-actions">
                                <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
                                <button  onClick={() => moveItem(idx, 'R')}>Right</button>
                                <button onClick={() => addLike(idx)}>Like</button>
                                <input type="text" readonly class="output-value" value={items[idx].likes}/>
                                <button onClick={() => addDislike(idx)}>Dislike</button>
                                <input type="text" readonly class="output-value" value={items[idx].dislikes}/>
                            </div>
                        </div>
                    );
                }   
            })}
        </div>
        <div class="item-column">
            <h2>Needs Improvement</h2>
            <button onClick={() => addItem('improve')}>Add Item</button>
            {items.map((itm, idx) => {
                if (itm.type === 'improve') {
                    return (
                        <div class="item improve">
                            <input class="improve" type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
                            <div class="div-actions">
                                <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
                                <button  onClick={() => moveItem(idx, 'L')}>Left</button>
                                <button  onClick={() => moveItem(idx, 'R')}>Right</button>
                                <button onClick={() => addLike(idx)}>Like</button>
                                <input type="text" readonly class="output-value" value={items[idx].likes}/>
                                <button onClick={() => addDislike(idx)}>Dislike</button>
                                <input type="text" readonly class="output-value" value={items[idx].dislikes}/>
                            </div>
                        </div>
                    );
                }   
            })}
        </div>
        <div class="item-column">
            <h2>Action Items</h2>
            <button onClick={() => addItem('action')}>Add Item</button>
            {items.map((itm, idx) => {
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
            })}
        </div>
        {/* Extra column to get it working as component  */}
        <div class="item-column">
            <h2>Extra Column</h2>
            <button onClick={() => addItem('extra')}>Add Item</button>
            {items.map((itm, idx) => {
                if (itm.type === 'extra') {
                    return (
                        <div class="item extra">
                            <input class="extra" type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
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
            })}
        </div>
    </div>
    </>

        // {/* Went well */}
        // <div>
        //     <h2>Went Well</h2>
        //     <button onClick={() => addItem('well')}>Add Item</button>
        //     {items.map((itm, idx) => {
        //         if (itm.type === 'well') {
        //             return (
        //                 <div>
        //                     <input type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
        //                     <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
        //                     <button  onClick={() => moveItem(idx, 'R')}>Right</button>
        //                     <button onClick={() => addLike(idx)}>Like</button>
        //                     <input type="input" value={items[idx].likes}/>
        //                     <button onClick={() => addDislike(idx)}>Dislike</button>
        //                     <input type="input" value={items[idx].dislikes}/>
        //                 </div>
        //             );
        //         }   
        //     })}        
        // </div>
        // {/* To Improve   */}
        // <div>
        //     <h2>To Improve</h2>
        //     <button onClick={() => addItem('improve')}>Add Item</button>
        //     {items.map((itm, idx) => {
        //         if (itm.type === 'improve') {
        //             return (
        //                 <div>
        //                     <input type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
        //                     <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
        //                     {/* when moving to BoardItem, need to condition buttons based on where they are */}
        //                     <button onClick={() => moveItem(idx, 'L')}>Left</button>
        //                     <button  onClick={() => moveItem(idx, 'R')}>Right</button>
        //                     <button onClick={() => addLike(idx)}>Like</button>
        //                     <input type="input" value={items[idx].likes}/>
        //                     <button onClick={() => addDislike(idx)}>Dislike</button>
        //                     <input type="input" value={items[idx].dislikes}/>
        //                 </div>
        //             );
        //         }   
        //     })}
        // </div>
        // {/* Action Items             */}
        // <div>
        //     <h2>Action Items</h2>
        //     <button onClick={() => addItem('action')}>Add Item</button>
        //     {items.map((itm, idx) => {
        //         if (itm.type === 'action') {
        //             return (
        //                 <div>
        //                     <input type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => updateItem(idx, e.target.value)}/>
        //                     <button className="btn btn-success" onClick={() => deleteItem(idx)}>Delete Item</button>
        //                     <button onClick={() => moveItem(idx, 'L')}>Left</button>
        //                     <button onClick={() => addLike(idx)}>Like</button>
        //                     <input type="input" value={items[idx].likes}/>
        //                     <button onClick={() => addDislike(idx)}>Dislike</button>
        //                     <input type="input" value={items[idx].dislikes}/>
        //                 </div>
        //             );
        //         }   
        //     })}        
        // </div>
        // </>
    );
}

export default Board;