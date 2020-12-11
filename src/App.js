import './App.css';
import { Component } from 'react';
import Form from './Components/Form';
import ContactList from './Components/ContactList';

// import FeedbackCounter from './Components/Feedbacks/FeedbackCounter';


class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  onSubmitHandle = (name, id) => {
   let newContacts = this.state.contacts;
   newContacts.push({name: name, id: id})
   this.setState({['contacts']: newContacts})
  }


  render() {
    


    return (  
      <div>
        <Form onSubmitHandle={this.onSubmitHandle}></Form>
        <ContactList contacts={this.state.contacts}></ContactList>
      </div>
    );
  }
}

export default App;