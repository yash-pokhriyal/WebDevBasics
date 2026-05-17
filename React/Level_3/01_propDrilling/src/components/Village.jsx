import React from 'react'
import People from './People'

const Village = ({money}) => {
  return (
    <>
    <h1>Village Gov Component</h1>
    <People money={money}/>
    </>
  )
}

export default Village