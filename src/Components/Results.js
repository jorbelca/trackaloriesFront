import React from 'react'
import CardResults from './CardResults';

const Results = (data) => {

  let food
  data.data.map(n => { food = n })

  return (
    <>

      <div className='mt-3'>
        {food
          ? <CardResults food={food} />
          : ''}

      </div>
    </>
  )
}

export default Results