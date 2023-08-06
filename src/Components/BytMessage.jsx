import React, { useEffect, useContext } from 'react';
import { BytContext } from '../Context/BytContext';

export default function BytMessage({byt}) {
  const {rerenderFlag} = useContext(BytContext)

  useEffect(() => {}, [rerenderFlag]); 

  return ( //the repeating structure of the displayed messages list
    <div className='individualByt'>
      <label>
        <div className='boxBoy'>
          <div className='userName'>{byt.userName}</div>
          <div className='note'>{byt.content}</div>
          <p className='date'>{byt.date}</p>
        </div>
      </label>
    </div>
  );
}
