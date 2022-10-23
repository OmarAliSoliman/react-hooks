import React, { useEffect } from 'react'
// import  from 'react'

function UseEffectCom() {

  useEffect(()=>{
    console.log("first run")
  }, [])

  return (
    <>
      hi
    </>
  )
}

export default UseEffectCom