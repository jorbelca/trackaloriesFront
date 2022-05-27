import axios from "axios"
import { BACKEND_API_URL } from "../config/envConfig"
const baseUrl = `${BACKEND_API_URL}/register`

const registerService = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials)

    return response.data
  } catch (e) {
    console.error(e)
  }
}

export default registerService
