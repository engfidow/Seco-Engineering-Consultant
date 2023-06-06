import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea rows="4" cols="50" value={text} onChange={handleTextChange} />
      <p>Number of characters: {text.length}</p>
    </div>
  );
}
 