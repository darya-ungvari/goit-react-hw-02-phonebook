import s from './PhoneBook.module.css';
import { Component } from 'react';





class Form extends Component {
    state = {
        name: ''
      }

    
    onSubmit = (e) => {
        e.preventDefault();
        console.log('hhhh');
        this.props.onSubmitHandle(this.state.name)
        console.log(this.state.name);
    }

    inputHandler = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    }


    render() {
        return (
        <div className={s.container}> 
            <h2>PhoneBook</h2>
            <form onSubmit={this.onSubmit}>
                <label 
                // htmlFor={this.nameId }
                >
                    <input 

                        onChange={this.inputHandler}
                        className={s.input}
                        type="text"
                        value={this.state.name}
                        name="name" >
                    </input>
                </label>
                <button className={s.button}>Add contact</button>
            </form>
        </div>
        )
    }
}

// const Form = (props) => (
//     <div className={s.container}> 
//         <h2>PhoneBook</h2>
//     <form onSubmit={props.handleSubmit}>
//         <label>
//             <input 
//             className={s.input}
//             type="text" ></input>
//         </label>
//         <button className={s.button}>Add contact</button>
//     </form>



//     </div>
// )
    
export default Form;