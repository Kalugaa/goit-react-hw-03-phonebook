const ContactList = ({ contacts, onclick }) => {
  return (
    <>
      <ul
        style={{
          margin: '0',
          padding: '0',
        }}
      >
        {contacts.map(contact => (
          <li
            key={contact.id}
            style={{
              fontSize: '25px',
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
            }}
          >
            {contact.name} {contact.number}
            <button onClick={() => onclick(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
