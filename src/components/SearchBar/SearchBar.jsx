import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.divNav}>
         <input type='search' />
         <button>Agregar</button> 
      </div>
   );
}
