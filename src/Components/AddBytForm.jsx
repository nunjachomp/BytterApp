import React, { useState, useRef } from 'react';

export default function AddBytForm({ addByt }) {
  const bytNameRef = useRef(); //Connects my textarea//
  const [textAreaCount, setTextAreaCount] = useState(0);

  async function handleAddByt(e) { //executes on button press//
    e.preventDefault();
    const bytMessage = bytNameRef.current.value; //takes the textarea inputs and sends them to addByt in App.jsx//
    if (bytMessage === '' || textAreaCount > 140) return;
    setTextAreaCount(0);
    addByt(bytMessage)
    bytNameRef.current.value = '';
  }

  function onTextAreaChange(e) {
    setTextAreaCount(e.target.value.length);
  }

  return ( //the message input and submit UI//
    <form> 
      <textarea placeholder="Talk to me, Byt by Byt" ref={bytNameRef} onChange={onTextAreaChange} />
      {textAreaCount > 140 && <p className='exceededCharError'>You have exceeded the maximum character count of 140</p>}
      <p className="charRemaining">Characters Used: {textAreaCount}/140</p>
      <button className="buttonAdd" onClick={handleAddByt} disabled={textAreaCount > 140}>Add Your Byt</button>
    </form>
  );
}
