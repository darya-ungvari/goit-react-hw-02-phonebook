import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  localSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    setTimeout(() => {
      this.setState({ name: '', number: '' });
    }, 2000);
  };

  render() {
    return (
      <>
        <form onSubmit={this.localSubmit}>
          <p>Name</p>
          <input
            onChange={this.onNameChange}
            value={this.state.name}
            className=""
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <br></br>
          <p>Phone</p>

          <input
            onChange={this.onNumberChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <br></br>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
