import React, { useState, useEffect } from "react"
import Bar from "../Components/Bar"
import Chart from "../Components/Chart"
import { useStore } from "../state/store"
import {
  getPermanentWeights,
  setPermanentWeights,
} from "../Services/weightService"
import CaloriesPanel from "../Components/CaloriesPanel"

const Weight = () => {
  const [formWeight, setFormWeight] = useState()
  const [weights, setWeights] = useState([])
  const { setErrors, setMessages } = useStore()
  const token = window.localStorage.getItem("loggedUser")

  useEffect(() => {
    const find = async (token) => {
      const response = await getPermanentWeights(token)
      if (response.status !== 200) {
        setErrors(response.message)
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
      setErrors(response.message)
      return setErrors(response.response.data.error)
    }
    if (response.status === 200) {
      setFormWeight()
      return setMessages(response.statusText)
    }
  }

  return (
    <>
      <Bar />
      <div className="container is-three-quarters m-5">
        <div className="columns is-desktop is-flex-tablet">
          <div className="column">
            <form onSubmit={handleSubmit}>
              <label className="label">Add your Weight (kg)</label>
              <div className="field has-addons ">
                <div className="control ">
                  <input
                    className="input is-responsive"
                    type="number"
                    placeholder="kg"
                    value={formWeight}
                    onChange={(e) => setFormWeight(e.target.value)}
                    data-cy="add-weight"
                  ></input>
                </div>
                <div className="control">
                  <button className="button is-success ">Save</button>
                </div>
              </div>
            </form>
          </div>
          <div className="column">
            <CaloriesPanel />
          </div>{" "}
        </div>
      </div>
      <Chart data={weights} />
    </>
  )
}

export default Weight
