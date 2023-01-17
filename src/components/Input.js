const {useState} = require("react");

const Input = function(props) {
  const [text, setText] = useState("");

  const textChanged = function(event) {
    setText(event.target.value);
  };

  const save = function(event) {
    event.preventDefault();
    props.onSave(text);
    setText("");
  };

  return (
    <div className='input-form'>
      <form onSubmit={save}>
        <input value={text} onChange={textChanged} name="name" placeholder="Enter Name" data-testid="name-input" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Input;