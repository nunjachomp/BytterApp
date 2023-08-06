import React, {useContext} from 'react'
import BytMessage from './BytMessage'
import { BytContext } from '../Context/BytContext';

export default function BytList() {
  const { tweets } = useContext(BytContext);
  return ( //tweets is the state from the App.jsx fetch GET request that will be displayed
    <div>
      {tweets.map((byt, id) => (
        <BytMessage key={id} byt={byt} />
      ))}
    </div>
  );
}
