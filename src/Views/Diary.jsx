import React, { useEffect, useState } from "react"
import Bar from "../Components/Bar"
import { notificationStore } from "../state/store"
import { getMealsService } from "../Services/storeMealsService"
import Dropdown from "../Components/Dropdown"
import Footer from "../Components/Footer"

const Diary = () => {
  const [meals, setMeals] = useState([])

  const setNotification = notificationStore((state) => state.setNotifications)

  useEffect(() => {
    const token = window.localStorage.getItem("loggedUser")
    const find = async (token) => {
      const response = await getMealsService(token)

      if (response.status !== 200) {
        setNotification({ error: response.message })
        return setNotification({ error: response.response.data.error })
      }
      setMeals(response.data)
    }
    find(token)
  }, [])

  return (
    <>
      <Bar />
      {meals === undefined || meals.length === 0
        ? ""
        : meals.map((meal) => (
            <>
              <Dropdown data={meal} />
            </>
          ))}
      <Footer />
    </>
  )
}

export default Diary
