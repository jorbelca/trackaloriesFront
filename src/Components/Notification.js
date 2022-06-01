import React from 'react'
import { useStore } from '../state/store'

const Notification = () => {
  const { errors, removeErrors, notifications, removeNotification } = useStore()

  if (errors.length > 0) setTimeout(() => removeErrors(), 3000)
  if (notifications.length > 0) setTimeout(() => removeNotification(), 3000)
  return (
    <>
      {errors.length > 0
        ? <div className="notification is-danger p-3 has-text-weight-bold">
          {errors}
        </div>
        : <div></div>
      }
      {notifications.length > 0
        ? <div className="notification is-success p-3 has-text-weight-bold">
          {notifications}
        </div>
        : <div></div>
      }

    </>
  )
}

export default Notification