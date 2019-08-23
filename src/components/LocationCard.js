import React from 'react'

export default function LocationCard (props) {
    
    const {name, type, dimension, residents} = props;

    return (
        <div>
        <div>
          <div>{name}</div>
          
          <div> {type} {dimension} </div>
          <button>
            {residents}
          </button>
        </div>
  </div>

  )
}