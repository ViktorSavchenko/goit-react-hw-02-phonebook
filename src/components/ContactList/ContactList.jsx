import React from "react"
import ContactPerson from '../ContactPerson/ContactPerson'
import './ContactList.css'

function ContactList({contacts, onClickDelite }) {
  return (
      <ul className="Contact-list">
        {contacts.map(({ id, name, number }, index) => (     
            <ContactPerson key={id} count={index} contact={name} number={number} onClickDelite={ onClickDelite} id={id}/>
        ))}        
      </ul>
  )
};

export default ContactList;