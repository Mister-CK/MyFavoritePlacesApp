import PlacesList from '../components/places/PlacesList';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

const AllPlaces = ({route}) => {
  const isFocused = useIsFocused()
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(()=>{
    if (isFocused && route.params) {
      setLoadedPlaces(curPlaces => [...curPlaces, route.params.place])
    }
  }, [isFocused, route])

  return <PlacesList places={loadedPlaces}/>
}

export default AllPlaces;
