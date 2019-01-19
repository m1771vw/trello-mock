import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddCardForm extends Component {
    state = {
        itemName: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSaveButtonClicked = () => {
        let { itemName } = this.state;
        let { addToItem, onSaveButtonClicked, index } = this.props;
        addToItem(itemName, index);
        onSaveButtonClicked();
    }

    render() {
        let { onInputChange, onSaveButtonClicked } = this;
        let { itemName } = this.state;
        return (
            <div className="form">
                <input className="input" type="text" name='itemName' value={itemName} onChange={onInputChange} placeholder={"Enter a title for this card..."}/>
                <button className="save-button" onClick={onSaveButtonClicked}>Save</button>
            </div>
        );
    }
}

// AddCardForm.propTypes = {

// };

export default AddCardForm;