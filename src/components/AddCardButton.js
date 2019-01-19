import React, { Component } from 'react';
import AddCardForm from './AddCardForm';


class AddCardButton extends Component {
    state = {
        addingCard: false
    }

    onAddCardButtonClick = (e) => {

        this.setState({
            addingCard: true
        })
    }

    onSaveButtonClicked = (e) => {
        this.setState({
            addingCard: false
        })
    }

    render() {
        let { addingCard } = this.state;
        let { addToItem, index } = this.props;
        let { onAddCardButtonClick, onSaveButtonClicked } = this;
        return (
            <div>
            {
                addingCard ? 
                (
                    <AddCardForm index={index} onSaveButtonClicked={onSaveButtonClicked} addToItem={addToItem}/>
                ) :
                (
                    <div className="card-button" onClick={onAddCardButtonClick}>
                        + Add Card...
                    </div>
                )
            }
                
            </div>
        );
    }
}

export default AddCardButton;