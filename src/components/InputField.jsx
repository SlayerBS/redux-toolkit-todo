const InputField = ({ value, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        value={value}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputField;
