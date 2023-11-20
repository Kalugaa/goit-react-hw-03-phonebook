const Section = ({ title, children }) => {
  return (
    <>
      <h2
        style={{
          margin: '10px 0 10px 0',
          fontSize: '25px',
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </>
  );
};

export default Section;
