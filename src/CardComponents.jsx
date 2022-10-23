import React, { Fragment } from 'react'

import styles from './css/card.module.css'



const CardComponents = ({ names, type, bgcolor, deleteItem }) => {
  // const { names, hil } = props;
  // const hi = hi;
  const cards = names.map(({ name, age, adress, phone, type }, index) => (
    <div className={styles.card_wrapper} key={index} style={{
      backgroundColor:type == "men" ? "green" : "pink"
    }} >
      <h4>Name: {name} </h4>
      <h4>Age: {age} </h4>
      <h4>Adress: {adress} </h4>
      <h4>Phone: {phone} </h4>
      {/* <button className={styles.delete_btn} onClick={()=>deleteItem(index)}> x </button> */}
      <button className={styles.delete_btn} onClick={() => deleteItem(index)}> x </button>

    </div>
  ))
  return (
    <Fragment>
      {cards}
    </Fragment>

  )
}

export default CardComponents