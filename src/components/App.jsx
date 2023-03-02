import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, SubTitle } from './App.styled';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(state => [
      ...state,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const removeContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleFormSubmit} />

      <SubTitle>Contacts</SubTitle>
      <Filter callback={setFilter} />
      <ContactList data={filteredContacts} removeCallback={removeContact} />
    </Container>
  );
}
