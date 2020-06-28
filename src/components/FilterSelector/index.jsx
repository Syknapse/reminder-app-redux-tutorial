import React from 'react'

const FilterSelector = ({ group, label, type, selected }) => (
  <>
    <label htmlFor={type}>{label}</label>
    <input id={type} type="radio" name={group} value={type} defaultChecked={selected === type} />
  </>
)

export default FilterSelector
