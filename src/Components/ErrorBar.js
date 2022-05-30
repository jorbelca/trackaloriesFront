import React from 'react'
import { useStore } from '../state/store'

const ErrorBar = () => {
  const { errors, setErrors } = useStore()
  if (errors.length > 0) setTimeout(() => setErrors(''), 3000)
  return (
    <>
      <div class="notification is-danger">
        {errors}
      </div>
    </>
  )
}

export default ErrorBar