const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div id="form">
      <label>
        <input
          className="new_todo"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button className="add_todo" onClick={handleSubmit}>
          Add Todo
        </button>
      </label>
    </div>
  );
};

export { InputField };
