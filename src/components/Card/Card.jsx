import React from 'react';
import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.divCard}>
         <div className={style.buttonDiv}>
            <button className={style.button}>X</button>
         </div>
         <div className='nameDiv'>
            <h2 className={style.nameTit}>Name: {props.name}</h2>
         </div>
         <div className='specieDiv'>
            <h2 className={style.specieTit}>Specie: {props.species}</h2>
         </div>
         <div className='genderDiv'>
            <h2 className={style.genderTit}>Gender: {props.gender}</h2>
         </div>
         <div className='imgDiv'>
            <img  src={props.image} alt="imagen del character" className={style.img}/>
         </div>
      </div>
   );
}
