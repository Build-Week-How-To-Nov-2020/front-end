import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHowTos } from '../redux/howtos/actions';

const HowToList = () => {
  // //set up useState
//   const [howTos, setHowTos] = useState([]);
  // //will hold how toos
  const dispatch = useDispatch();
  const howTos = useSelector(state => state.howTosState.howTos);
  const isLoading = useSelector(state => state.howTosState.isLoading);

  useEffect(() => {
    dispatch(fetchHowTos());
  }, [howTos]);

  // useEffect(() => {
  //   const fetchHowTos = async () => {
  //     setHowTos(await howToService.fetchHowTos())
  //   };
  //   fetchHowTos();
  // }, [])//set howtos inside this hook

  if (isLoading) {
    return <div>Loading...</div>;
  }

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