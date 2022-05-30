import React from 'react'
import Bar from '../Components/Bar'
import { useStore } from '../state/store'

const Personal = () => {
  const { user } = useStore()
  console.log(user);
  return (
    <>
      <Bar />
      <div>Personal</div>
      <h1>{user._id}</h1>
    </>
  )
}

export default Personal