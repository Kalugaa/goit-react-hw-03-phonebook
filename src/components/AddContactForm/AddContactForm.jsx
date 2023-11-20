const AddContactForm = ({ submit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    submit(e);
    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <>
      <h1
        style={{
          margin: '10px 0 10px 0',
          fontSize: '35px',
        }}
      >
        Phonebook
      </h1>
      <form
        style={{
          fontSize: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          border: 'black 1px solid',
          padding: '15px',
        }}
        onSubmit={handleSubmit}
      >
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          Name
          <input type="text" name="name" required />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          Number
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default AddContactForm;
