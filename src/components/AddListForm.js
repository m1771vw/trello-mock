import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddListForm extends Component {
    state = {
        listName: ''
    }
    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSaveButtonClicked = () => {
        let { listName } = this.state;
        let { addToList, onSaveButtonClicked } = this.props;
        addToList(listName);
        onSaveButtonClicked();
    }
    render() {
        let { onInputChange, onSaveButtonClicked } = this;
        let { listName } = this.state;
        return (
            <div className="form list">
                <input className="input" type="text" name='listName' value={listName} onChange={onInputChange} placeholder={"Enter a list name..."}/>
                <button className="save-button" onClick={onSaveButtonClicked}>Save</button>
            </div>
        );
    }
}

// AddListForm.propTypes = {

// };

export default AddListForm;