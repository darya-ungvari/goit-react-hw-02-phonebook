import './App.css';
import { Component } from 'react';
import Form from './Components/Form';
import ContactList from './Components/ContactList';

// import FeedbackCounter from './Components/Feedbacks/FeedbackCounter';


class App extends Component {
  state = {
    contacts: [{'name': 'Darya'}, {'name': "Mango"}],
    name: ''
  }

  onSubmitHandle = (name) => {
   console.log(666);
   let contacts = this.state.contacts;
   contacts.push({name: name})
   this.setState({['contacts']: contacts})
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