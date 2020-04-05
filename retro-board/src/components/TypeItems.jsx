import React from 'react';

const TypeItems = ({items, type, del, move, update, like, dislike}) => {
    console.log(items);

    return (
        <>
            <div class="item extra">
            {items.map((itm, idx) => {
                if (itm.type === type) {
                    return (
                        <div class={"item " + type}>
                            <input class={type} type="textarea" placeholder='new item' value={items[idx].name} onChange={(e) => update(idx, e.target.value)}/>
                            <div class="div-actions">
                                <button className="btn btn-success" onClick={() => del(idx)}>Delete Item</button>
                                {(type !== 'well') ? <button  onClick={() => move(idx, 'L')}>Left</button> : null}
                                {(type !== 'action') ? <button  onClick={() => move(idx, 'R')}>Right</button> : null}
                                <button onClick={() => like(idx)}>Like</button>
                                <input type="text" readonly class="output-value" value={items[idx].likes}/>
                                <button onClick={() => dislike(idx)}>Dislike</button>
                                <input type="text" readonly class="output-value" value={items[idx].dislikes}/>
                            </div>
                        </div>
                    );
                }   
            })}
            </div>
        </>
         );
}

export default TypeItems;