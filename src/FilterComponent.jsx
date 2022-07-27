import React, { Fragment } from 'react'

const FilterComponent = ({handelChange}) => {
  return (
    <Fragment>
      <input type="text"  placeholder='filter by name' onChange={handelChange} />
    </Fragment>
  )
}

export default FilterComponent