import React from 'react'
import CardResults from './CardResults';

const Results = (data) => {
  console.log(data);
  let food
  data.data.map(n => { food = n })

  return (
    <>
      <div>Results</div>
      <div>
        {food
          ? <CardResults food={food} />
          : ''}

      </div>
    </>
  )
}

export default Results