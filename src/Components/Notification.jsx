import React from "react"
import { useStore } from "../state/store"

const Notification = () => {
  const { errors, removeErrors, messages, removeMessages } = useStore()
  console.log(messages)

  if (errors.length > 0) setTimeout(() => removeErrors(), 3000)
  if (messages.length > 0) setTimeout(() => removeMessages(), 3000)

  return (
    <>
      {errors.length > 0 ? (
        <div className="notification is-danger p-3 has-text-weight-bold">
          {errors}
        </div>
      ) : (
        <div></div>
      )}
      {messages.length > 0 ? (
        <div className="notification is-success p-3 has-text-weight-bold">
          {messages}
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Notification
