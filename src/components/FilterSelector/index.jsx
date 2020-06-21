import React from 'react'

const FilterSelector = ({ label, type }) => (
  <>
    <label htmlFor={type}>{label}</label>
    <input id={type} type="radio" name="filter" value={type} />
  </>
)

export default FilterSelector
