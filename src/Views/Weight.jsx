import React, { useState, useEffect } from "react"
import Bar from "../Components/Bar"
import Chart from "../Components/Chart"
import getCompleteDate from "../Services/completeDate"
import { useStore } from "../state/store"
import {
  getPermanentWeights,
  setPermanentWeights,
} from "../Services/weightService"

const Weight = () => {
  const [formWeight, setFormWeight] = useState()
  const [weights, setWeights] = useState([])

  const { setErrors } = useStore()
  const token = window.localStorage.getItem("loggedUser")

  useEffect(() => {
    const find = async (token) => {
      const response = await getPermanentWeights(token)
      if (response.status !== 200) {
        return setErrors(response.statusText)
      }
      setWeights(response.data)
    }
    find(token)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await setPermanentWeights(+formWeight, token)
    if (response.status !== 200) {
      return setErrors(response.response.data.error)
    }
  }

  return (
    <>
      <Bar />
      <div>Weight</div>
      <Chart data={weights} />
      <div className="container is-three-quarters m-5">
        <form onSubmit={handleSubmit}>
          <div className="field is-grouped">
            <div className="control ">
              <label className="label">Weight (kg)</label>
              <input
                className="input"
                type="number"
                placeholder="kg"
                value={formWeight}
                onChange={(e) => setFormWeight(e.target.value)}
              ></input>
              <div className="control">
                <button className="button is-link " type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Weight
