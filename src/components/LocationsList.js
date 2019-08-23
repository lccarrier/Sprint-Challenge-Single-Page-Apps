import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard  from './LocationCard'

export default function LocationsList() {
 
    const [locations, setLocations] = useState([]);
  
    useEffect(() => {

      const getLocations = () => {
        axios
        .get('https://rickandmortyapi.com/api/location/')
       
        .then(response =>{
          console.log('The response data: ', response.data);
        
          setLocations(response.data.results);
        })
       
        .catch(erroe =>{
          console.log('Can\'t get locations data');
        })
      }
      getLocations();
    }, [])
  
    return <section>
   
      {locations.map((location, key) => (
  
        <LocationCard  key={key} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length}/>
    ))}
      </section>
  
  }
  