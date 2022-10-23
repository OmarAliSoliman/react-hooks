import React from 'react'
import { useState } from 'react';
import style from './css/form.module.css';

const Form = () => {

  const [input, setInput] = useState({
    name: "",
    phone: "",
    address: "",
    age: "",
  })

  const inputHandeelr = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setInput((prevState) => {
      // console.log(prevState) ;
      return { ...prevState, [key]: value }
      // setInput(...prevState, [key]:value)
    })

  }

  const submitForm = (e) =>{
    e.preventDefault();
    console.log(input)
  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <input className={style.form_control} type="text" value={input.name} onChange={inputHandeelr} placeholder='name' name='name' />
        <input className={style.form_control} type="number" value={input.phone} onChange={inputHandeelr} placeholder='phone' name='phone' />
        <input className={style.form_control} type="text" value={input.address} onChange={inputHandeelr} placeholder='address' name='address' />
        <input className={style.form_control} type="text" value={input.age} onChange={inputHandeelr} placeholder='age' name='age' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form;
