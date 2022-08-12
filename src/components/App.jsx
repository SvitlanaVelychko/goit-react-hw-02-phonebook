import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";
import { Formik } from "formik";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box as="main">
        <GlobalStyle />
        <h1>Phonebook</h1>
        <Formik>
          <form>
            <label>Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Formik>
        <Box as="section">
          <h2>Contacts</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Box>
      </Box>
    );
  }
};
