import axios from "axios"
import { BACKEND_API_URL } from "../config/envConfig"
import { setHeader } from "./setHeaderToken"
const baseUrl = `${BACKEND_API_URL}/personal`

const getPersonalInfo = async (token) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: setHeader(token),
    })

    return response
  } catch (error) {
    console.error(error)
    return error
  }
}

const setPersonalInfo = async (info,token) => {
  try {
    const response = await axios.put(baseUrl, {
      headers: setHeader(token),
    })

    return response
  } catch (error) {
    console.error(error)
    return error
  }
}



export  { getPersonalInfo, setPersonalInfo }