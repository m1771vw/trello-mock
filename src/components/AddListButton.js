import React, { Component } from 'react';
import AddListForm from './AddListForm';


class ListButton extends Component {
    state = {
        addingList: false
    }

    onListButtonClick = () => {
        this.setState({
            addingList: true
        })
    }

    onSaveButtonClicked = () => {
        this.setState({
            addingList: false
        })
    }

    render() {
        let { addingList } = this.state;
        let { addToList } = this.props;
        let { onListButtonClick, onSaveButtonClicked } = this;
        return (
            <div>
            {
                addingList ? 
                (
                    <AddListForm onSaveButtonClicked={onSaveButtonClicked} addToList={addToList} />
                ) :
                (
                    <div className="list-button" onClick={onListButtonClick}>
                        + Add another List
                    </div>
                )
            }
                
            </div>
        );
    }
}

export default ListButton;