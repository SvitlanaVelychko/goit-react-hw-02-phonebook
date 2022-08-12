import { Component } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Section from "./Section";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";

const PageTitle = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.text};
`;

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const matcheContactName = this.state.contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase());
    const newContact = { id: nanoid(), name, number };

    if (matcheContactName) {
      return alert(`Sorry, ${name} is already in your contacts`);
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))

    e.target.reset();
  };
  
  handleFilterSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleFilterContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter));
    
    return filteredContacts;
  };

  handleDeleteContact = id => {
    const filteredContactsById = this.state.contacts.filter(contact =>
      contact.id !== id);
    this.setState({ contacts: filteredContactsById });
  };
  
  render() {
    const { state, handleSubmit, handleFilterSearch, handleFilterContacts, handleDeleteContact } = this;
      return (
        <Box as="main"
          maxWidth="600px"
          m="32px auto"
          p={4}
          borderRadius="8px"
          boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
          backgroundColor="bgc"
        >
          <GlobalStyle />
          <PageTitle>Phonebook</PageTitle>
          <ContactForm onSubmit={handleSubmit} />
          <Section title="Contacts">
            <Filter filter={state.filter} handleChangeFilter={handleFilterSearch} />
            <ContactList contacts={handleFilterContacts()} handleClick={handleDeleteContact} />
          </Section>
        </Box>
      );
    };
  };