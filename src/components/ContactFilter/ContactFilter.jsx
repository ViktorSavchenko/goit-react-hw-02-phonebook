import React from "react";
import './ContactFilter.css';

function ContactFilter({ value, onContactFilter }) { 
  return (
    <label className="Search-label">
      Find contact by name:
      <input
        className="Search-input"
        type="text"
        name="filter"
        placeholder="Rosie Simpson"
        value={value}
        onChange={onContactFilter }
        />
    </label>
  )
};

export default ContactFilter;