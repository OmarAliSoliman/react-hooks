import React, { useRef, useState } from "react";
import CardComponents from "./CardComponents";
import FilterComponent from "./FilterComponent";
import './css/style.css'
import Form from "./Form";
import UseEffectCom from "./UseEffectCom";
import { useEffect } from "react";



function App() {

  // distructiong
  const inputElement = useRef(null);
  const [showName, setShow] = useState(true);
  const [filterName, setfilterName] = useState("");
  const [boyes, setBoyes] = useState([
    {
      id: 1,
      name: 'ahmed',
      age: '28',
      adress: 'assuit',
      phone: '01098586783',
      type: 'men',
    },
    {
      id: 2,
      name: 'mena',
      age: '24',
      adress: 'cairo',
      phone: '01018386283',
      type: 'girl',
    },
    {
      id: 3,
      name: 'ail',
      age: '51',
      adress: 'sohag',
      phone: '0109358686',
      type: 'men',
    },
    {
      id: 4,
      name: 'omnya',
      age: '51',
      adress: 'sohag',
      phone: '0109358686',
      type: 'girl',
    }
  ]);

  const deleteItem = (index) => {

    // by splice.
    // life cycle (make copy - delete item - replace)

    // 1-make copy
    // const newBoyes = [...boyes];
    // // 2-delete item
    // newBoyes.splice(index, 1);
    // // 3-replace
    // setBoyes(newBoyes);

    // by filter
    // const newBoyes = boyes.filter((item, itemindex) => itemindex != index)
    // setBoyes(newBoyes);

    // عشان كدا غالبا الستيت بترد عليك مش باخر قيمه بترد عليك بالداتا القديمه عشان كدا بنستخدم ال
    // setState as function

    setBoyes((prevState) => {
      return prevState.filter((item, itemIndex) => itemIndex !== index);
    })


    // if we here make console.log(boyes) we find the state is async thqt means we don't know if the state can answer us by the last update 
    // we find the state answer us by the previos state not the newst or the updated
    // the solution is useEffect 

  }

  const showBoxNames = () => {
    // setShow((prevState) => {
    //   return !showName
    // });

    setShow(!showName);
  }



  // useRef
  // most used in inputs but not all inputs is likely that .. best use in input type file to cach the file

  // useRef uncontroled component (we don't use state with it) like getElementById... etc 

  // const handelChange = () => {
  //   console.log(inputElement.current.value)
  // }

  // const handelClick = () => {
  //   inputElement.current.focus();
  // }

  const handelChange = (e)=>{
    const val = e.target.value
    console.log(val)
    setfilterName(val);
    // const newBoyes = [...boyes];
    // newBoyes.filter((item)=> item.name.includes(val))
    // setBoyes(newBoyes);
    // setBoyes((prevState)=>{
    //   return 
    // })
  }

  const showItems = () =>{
    console.log(filterName);
    if(filterName.length !== 0){
      return boyes.filter((item)=> item.name.includes(filterName));
    }
    return boyes;
  }


  // run after render 
  useEffect(()=>{
    console.log("first render")
  }, [])



  // {name, age, adress, phone} => distructing 

  return (
    <div className="App">
      <h1>Cards 1</h1>
      <button className="showBtn" onClick={showBoxNames}>
        {showName ? "Hide Names" : "Show Names"}
      </button>

      {/* useRef */}
      {/* <input type="text" placeholder="test" ref={inputElement} onChange={handelChange} />
      <button onClick={handelClick}>Click me</button> */}

      {/* solution 1 */}

      {/* <FilterComponent handelChange={handelChange} />
      <div className={showName ? null : "hidebox"}>
        <CardComponents names={showItems()} deleteItem={deleteItem} />
      </div> */}

      {/* <Form /> */}
      

      <UseEffectCom />




      {/* solution 2 */}
      {/* {showName ? (
        <CardComponents names={boyes} type="men" bgcolor="red" deleteItem={deleteItem} />
      ) : null} */}
    </div>
  );
}

export default App;
