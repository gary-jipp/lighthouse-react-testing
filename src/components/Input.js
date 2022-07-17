const { useState } = require("react");

const Input = function(props) {
  const [text, setText] = useState("");

  const textChanged = function(event) {
    setText(event.target.value);
  };

  const save = function() {
    props.onSave(text);
    setText("");
  };

  return (
    <div className='input-form'>
      <input value={text} onChange={textChanged} placeholder="Enter Name" data-testid="name-input"/>
      <button onClick={save}>Add Item</button>
    </div>
  );
};

export default Input;