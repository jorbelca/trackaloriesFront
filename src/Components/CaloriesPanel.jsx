import React from "react"
import { userStore } from "../state/store"

const CaloriesPanel = () => {
  const user = userStore((state) => state.user)
  //   Mifflin-St Jeor Equation:
  // For men:
  // BMR = 10W + 6.25H - 5A + 5   W body weight      H height    A age
  // For women:
  // BMR = 10W + 6.25H - 5A - 161

  // The value obtained from these equations is the estimated number of calories a person can consume in a day to maintain their body-weight, assuming they remain at rest. This value is multiplied by an activity factor (generally 1.2-1.95), dependent on a person's typical levels of exercise, in order to obtain a more realistic value for maintaining body-weight (since people are less likely to be at rest throughout the course of an entire day). 1 pound, or approximately 0.45 kg, equates to about 3,500 calories. As such, in order to lose 1 pound per week, it is recommended that 500 calories be shaved off the estimate of calories necessary for weight maintenance per day. For example, if a person has an estimated allotment of 2,500 calories per day to maintain body-weight, consuming 2,000 calories per day for one week would theoretically result in 3,500 calories (or 1 pound) lost during the period.
  // console.log(user)

  return <div>CaloriesPanel</div>
}

export default CaloriesPanel
