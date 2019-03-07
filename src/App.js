import React, { useState } from 'react';

function App({ length }) {
  const [formValues, setFormValues] = useState(() => {
    let value = 0;
    for (let i = 0, len = length; i < len; i++) {
      value++;
    }

    return {
      input1: 'input1' + value,
      input2: 'input2',
    };
  });
  console.log(formValues);
  return (
    <div>
      <input
        name="input1"
        type="text"
        onChange={e => {
          const value = e.target.value;
          setFormValues(prevState => ({
            ...prevState,
            input1: value,
          }));
        }}
        value={formValues.input1}
      />
      <input
        name="input2"
        type="text"
        onChange={e => {
          const value = e.target.value;
          setFormValues(prevState => ({
            ...prevState,
            input2: value,
          }));
        }}
        value={formValues.input2}
      />
    </div>
  );
}

export default App;
