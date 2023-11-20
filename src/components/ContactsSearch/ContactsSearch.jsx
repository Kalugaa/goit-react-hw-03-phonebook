const ContactsSearch = ({ value, change }) => {
  return (
    <div>
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '15px',
          gap: '5px',
        }}
      >
        Find contact by name
        <input
          name="filter"
          value={value}
          onChange={change}
          style={{ maxWidth: '200px' }}
        ></input>
      </p>
    </div>
  );
};

export default ContactsSearch;
