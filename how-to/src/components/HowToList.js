import React, {useEffect, useState} from 'react';
import * as howToService from '../services/howto-service';


const HowToList = () => {
  //set up useState
  const [howTos, setHowTos] = useState([]);
  //will hold how toos

  useEffect(() => {
    const fetchHowTos = async () => {
      setHowTos(await howToService.fetchHowTos())
    };
    fetchHowTos();
  }, [])//set howtos inside this hook

  return (//howtos mapping
    <div>
     <ul>
      {howTos.map((howTo) => {
        return <li key={howTo.AuthorId}>{howTo.title}</li>
      })}
     </ul>
    </div>

  )
}

export default HowToList;