import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Menu = () => {
  const [Brand,SetBrand] = useState()
  const navigate = useNavigate()
  const handleChange= e =>{
    SetBrand(e.target.value)
  }
 
  return (
    <>
        <h1>Menu Page</h1>
        <input type="text" value={Brand} onChange={handleChange}></input>
        <button onClick={()=> navigate(`/product/${Brand}`)}>브랜드 페이지로 이동</button>
    </>
  );
}

export default Menu;

//useNavigate - 특정 이벤트 실행 시 페이지 동작 넣는 기능