import React, { Component } from 'react';
import ListBox from './ListBox';
import AddListButton from './AddListButton';
class Dashboard extends Component {
    state = {
        lists: ["Garden", "Food"],
        items: [["Carrot", "Potato"], ["Hamburger", "Pizza"]]
    }

    addToList = newListItem => {
        let newList = [
            ...this.state.lists, newListItem
        ]
        let newItems = [
            ...this.state.items, []
        ]
        this.setState({
            lists: newList,
            items: newItems
        });
    }

    addToItem = (newItem, index) => {
        let newSmallItemList = [
            ...this.state.items[index], newItem
        ];
        let newAllItemList = [
            ...this.state.items.slice(0, index), 
            newSmallItemList,
            ...this.state.items.slice(index + 1)
        ]
        this.setState({
            items: newAllItemList
        });
    }

    deleteList = (index) => {
        let newList = [
            ...this.state.lists.slice(0, index),
            ...this.state.lists.slice(index + 1)
        ]

        let newAllItemList = [
            ...this.state.items.slice(0, index),
            ...this.state.items.slice(index + 1)
        ]

        this.setState({
            lists: newList,
            items:newAllItemList
        })
    }

    deleteItem = (index, itemIndex) => {
        let newSmallItemList = [
            ...this.state.items[index].slice(0, itemIndex),
            ...this.state.items[index].slice(itemIndex + 1)
        ]
        let newAllItemList = [
            ...this.state.items.slice(0, index),
            newSmallItemList,
            ...this.state.items.slice(index + 1)
        ]
        this.setState({
            items: newAllItemList
        })
    }

    render() {
        let { lists, items } = this.state;
        let { addToItem, addToList, deleteList, deleteItem } = this;
        return (
            <div>
            <div className="dashboard-title">
                Demo Board
            </div>
            <div className="container cards">
            {
                lists.length > 0 && lists.map((x, index) => {
                    return (
                        <ListBox key={index} addToItem={addToItem} deleteList={deleteList} deleteItem={deleteItem} index={index} listName={x} listItems={items[index]} />
                    )
                })
                }
            <AddListButton addToList={addToList}/>
            </div>
            </div>
        );
    }
};

export default Dashboard;