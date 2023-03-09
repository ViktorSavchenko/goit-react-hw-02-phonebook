import React from "react"
import ContactPerson from '../ContactPerson/ContactPerson'
import './ContactList.css'

function ContactList({contacts, onClickDelite }) {
  return (
      <ul className="Contact-list">
        {contacts.map(({ id, name, number }, index) => (
          <li className="Contact-item" key = {id}>
            <ContactPerson id={id} count={index} contact={name} number={number} onClickDelite={ onClickDelite} />
          </li>
        ))}        
      </ul>
  )
};

export default ContactList;