import React from 'react';
import {string, array} from 'prop-types';
import AddCardButton from './AddCardButton';

const ListBox = (props) => {
    let { addToItem, listName, listItems, deleteList, deleteItem, index } = props;
    console.log("List Items", listItems);
    return (
        <div className="list-box">
            <div className="list-content">
                <div className="list-title">
                    <div className="list-text">
                        {listName}
                        </div>
                        <div className="list-text" onClick={() => deleteList(index)}>
                            x
                        </div>
                </div>
                <div>  
                    {listItems && listItems.map((item, itemIndex) => {
                        return(
                            <div key={itemIndex} className="card">
                            <div>
                                {item}
                            </div>
                            <div onClick={() => deleteItem(index, itemIndex)}>
                                x
                            </div>
                            </div>
                        )
                    })}
                    <AddCardButton addToItem={addToItem} index={index}/>
                </div>
            </div>
        </div>
    );
};

ListBox.propTypes = {
    ListTitle: string,
    CardNames: array
};

export default ListBox;