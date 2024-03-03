import React, { useState } from "react";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from "react-confetti";
import styles from './card.module.css'
function Card() {
  // const { width, height } = useWindowSize()
  const [dim,setDim] =  useState({width:window.innerWidth,height:window.innerHeight})
  return (
    <>
      <Confetti width={dim.width} height={dim.height} numberOfPieces={300}/>
      <div className={styles.main}>
        <h1>hi man... <br /> ekkada emina card photo pettukovachu edi saripotnda <br />your's gangster</h1>
      </div>
    </>
  );
}

export default Card;
