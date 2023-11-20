import { nanoid } from 'nanoid';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import ContactList from './ContactList/ContactList';
import Section from './Contacts/Contacts';
const { Component } = require('react');

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;

    const isNameUnique = this.state.contacts.every(
      contact => contact.name.toLowerCase() !== name.toLowerCase()
    );
    if (!isNameUnique) {
      alert("Це ім'я вже присутнє у вашій телефонній книзі!");
      return;
    }
    const number = form.elements.number.value;
    const id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, id, number }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterItems(arr, query) {
    return arr.filter(el => {
      return el.toString().toLowerCase().includes(query.toLowerCase());
    });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
          paddingLeft: '25px',
        }}
      >
        <AddContactForm submit={this.handleSubmit} />
        <Section title={'Contacts'}>
          <ContactsSearch value={filter} change={this.handleChange} />
          {!filter && (
            <ContactList contacts={contacts} onclick={this.deleteContact} />
          )}
          {filter && (
            <ContactList
              contacts={filteredContacts}
              onclick={this.deleteContact}
            />
          )}
        </Section>
      </div>
    );
  }
}
