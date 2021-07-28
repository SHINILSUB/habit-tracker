import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef()
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value= '';
    }
    render() {
        return (
            <form action="" className="add-form" onSubmit={this.onSubmit}>
                <input 
                ref = {this.inputRef}
                type="text" className="add-input" placeholder="habit" />
                <button className="add-button">add</button>
            </form>
        );
    }
}

export default HabitAddForm;