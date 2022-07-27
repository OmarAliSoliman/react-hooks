import React, { Fragment } from 'react'

import styles from './css/card.module.css'



const CardComponents = ({names, type, bgcolor, deleteItem}) => {
  // const { names, hil } = props;
  // const hi = hi;
  const cards = names.map((el, index) => (
    <div className={styles.card_wrapper} key={index} style={{backgroundColor: el.type == "men" ? "green" : "pink"}} >
      <h4>Name: {el.name} </h4>
      <h4>Age: {el.age} </h4>
      <h4>Adress: {el.adress} </h4>
      <h4>Phone: {el.phone} </h4>
      {/* <button className={styles.delete_btn} onClick={()=>deleteItem(index)}> x </button> */}
      <button className={styles.delete_btn} onClick={()=>deleteItem(index)}> x </button>

    </div>
  ))
  return (
    <Fragment>
      {cards}
    </Fragment>

  )
}

export default CardComponents