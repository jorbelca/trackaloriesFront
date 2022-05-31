import axios from "axios"
import { BACKEND_API_URL } from "../config/envConfig"
const baseUrl = `${BACKEND_API_URL}/meals`

const storeMealService = async (data) => {
  let currentDate = new Date()
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1
  let year = currentDate.getFullYear()
  let completeDate = (day + "/" + month + "/" + year)


  const diaryEntry = {
    date: Date(completeDate),
    data: [...data]
  }

  try {
    const response = await axios.post(baseUrl, diaryEntry)

    return response
  } catch (e) {
    console.error(e)
    return e.response
  }
}

export default storeMealService
