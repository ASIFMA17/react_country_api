import React from 'react'

function Optixons({country}) {
  return (
    <option value={country.name}>{country.name}</option>
  )
}

export default Optixons
