import s from './PhoneBook.module.css';
import { Component } from 'react';

import { v1 as uuidv1 } from 'uuid';




class Form extends Component {
    state = {
        name: '',
        number: ''
      }

    // ф-ция - обраатывает сабмит по форме 
    onSubmit = (e) => {
        e.preventDefault();
        // вызывает функцию addNewContact с новым параметром из формы
        // addNewContact - ф-ция должна быть в Апп, где стейт
        let newContact = { name: this.state.name, id: uuidv1(), number: this.state.number }
        this.props.addNewContact(newContact)
        this.reset();
    }

    // ф-ция, срабатывает на вводе name в инпут
    nameInputHandler = (e) => {
        // описывает текущее значение ввода
        const { name, value } = e.currentTarget;
        // записывает новое значение в нейм
        this.setState({ [name]: value })
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };


    render() {
        return (
        <div className={s.container}> 
{/* присабмите формы вызывается ф-ия .onSubmit */}
            <form onSubmit={this.onSubmit}>
                <h2>Name</h2>
                <label>
                    <input 
 /* изменении инпута вызывается ф-ия inputHandler */
                        onChange={this.nameInputHandler}
                        className={s.input}
                        type="text"
                        value={this.state.name}
                        name="name" >
                    </input>
                </label>
                <h2>Number</h2>
                <label>
                    <input 
 /* изменении инпута вызывается ф-ия inputHandler */
                        onChange={this.nameInputHandler}
                        className={s.input}
                        type="text"
                        value={this.state.number}
                        name="number" >
                    </input>
                </label>
                <button className={s.button}>Add contact</button>
            </form>
        </div>
        )
    }
}


    
export default Form;