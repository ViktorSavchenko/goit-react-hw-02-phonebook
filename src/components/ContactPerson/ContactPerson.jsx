import React from "react";
import './ContactPerson.css'

function ContactPerson({ count, contact, number, id, onClickDelite }) {
  const countContact = count + 1;
  
  return (
    <li className="Contact-item">
      <div>{countContact}.</div>
      
      <div className="Contact-name">{contact}</div>
      
      <a href="tel:+380961111111" className="Contact-number">tel: {number}</a>
      
      <button className="Contact-delbtn" type="button" onClick = {()=>{onClickDelite(id)}}>X</button>
      
    </li>
  )
}

export default ContactPerson;