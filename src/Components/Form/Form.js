import React from "react";
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component {

    state = {
        name: ''
    }
    
    onCreateNewName = e => {
        this.setState({ name: e.target.value });
        console.log(e.target.value);
      }

    localSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit({ id: uuidv4(), name: this.state.name })
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.localSubmit}>
                    <p>Name</p>
                    <input
                        onChange={this.onCreateNewName}
                        className=''
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                    <button type="submit" >Add contact</button>
                </form>
            </>
        )
    }
    
}

export default Form;