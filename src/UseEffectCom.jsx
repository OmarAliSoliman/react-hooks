import React, { useEffect } from 'react'
// import  from 'react'

function UseEffectCom() {

  const [elemtn, setElement] = useState("");


  // 

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