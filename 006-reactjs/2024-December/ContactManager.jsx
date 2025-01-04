"use client"

import React, { useState } from 'react';

const ContactManager = () => {
  // State to hold the list of contacts
  const [contacts, setContacts] = useState([]);
  
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Add contact handler
  const addContact = () => {
    if (name && email && phone) {
      const newContact = {
        id: Date.now(), // Unique ID based on timestamp
        name,
        email,
        phone,
      };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Please fill in all fields');
    }
  };

  // Delete contact handler
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Contact Manager
        </h2>

        {/* Form to add a new contact */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={addContact}
            className="w-full bg-blue-500 text-white p-3 rounded-lg"
          >
            Add Contact
          </button>
        </div>

        {/* List of contacts */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Your Contacts
          </h3>
          {contacts.length > 0 ? (
            <ul className="space-y-4">
              {contacts.map(contact => (
                <li
                  key={contact.id}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
                >
                  <div>
                    <p className="font-bold text-gray-700">{contact.name}</p>
                    <p className="text-gray-500">{contact.email}</p>
                    <p className="text-gray-500">{contact.phone}</p>
                  </div>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="bg-red-500 text-white p-2 rounded-lg"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No contacts found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactManager;





