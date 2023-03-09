import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import './App.css'


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  
  };
  
  formSubmitHandler = (data) => {
    console.log(data);
    const isDuplicateName = this.duplicateNameCheck(data.name);
    
     if (isDuplicateName) { 
      return alert(`${data.name} is already in contacts!`)
    }    
    this.setState(prevState => ({contacts: [data, ...prevState.contacts]}));
  };

  onContactFilter = (e) => {
    const value = e.currentTarget.value.trim();
    
      this.setState({ filter: value });
  };
  
  getFilteredContacts = () => { 
    const { contacts, filter } = this.state;
    
    return contacts.filter(({name}) => (name.toLowerCase().includes(filter.toLowerCase())));
  };
  
  onClickBtnDeliteContact = (contactId) => {
    this.setState(prevState => ({ 
      contacts: prevState.contacts.filter(({id}) => id !== contactId)
    }))
  };
  
  duplicateNameCheck = (name) => { 
    const normalizedAddedName = name.toLowerCase();
    
    return this.state.contacts.find(({ name }) => (
      name.toLowerCase() === normalizedAddedName
    ))
  };  


  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    
    return (
      <div className="Contacts-container">
        <h1 className="Title Hero-title">Phonebook</h1>
        <ContactForm submitHandler={this.formSubmitHandler} />
        
        <h2 className="Title Contact-title">Contacts:</h2>
      
        <ContactFilter value={filter} onContactFilter={ this.onContactFilter} />
        
        {this.state.contacts.length !== 0 ?
          <ContactList
            contacts={filteredContacts}
            onClickDelite={this.onClickBtnDeliteContact} /> :
          <h2 className="Title Nothing-title"> &#9785; you don`t have contacts!</h2>
        }
      </div>
    );
  };
}

export default App;
