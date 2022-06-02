import React, { useEffect, useState } from 'react'
import Bar from '../Components/Bar'
import { useStore } from '../state/store'
import { getMealsService } from '../Services/storeMealsService'
import Dropdown from '../Components/Dropdown'


const Diary = () => {
  const [meals, setMeals] = useState([])
  const { setErrors } = useStore()
  const token = window.localStorage.getItem("loggedUser")

  useEffect(() => {
    const find = async (token) => {
      const response = await getMealsService(token)
      
      if (response.status !== 200) {
        return setErrors(response.response.data.error)
      }
      setMeals(response.data)
    }
    find(token)
  }, [])

  return (
    <>
      <Bar />
      {meals === undefined || meals.length === 0
        ? ''
        : meals.map(meal =>
          <>
            <Dropdown key={meal.date} data={meal} />
          </>
        )}
    </>

  )
}

export default Diary