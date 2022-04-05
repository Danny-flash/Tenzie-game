import React from 'react'

const Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "#1f1f38" : "white",
        color: props.isHeld ? "white" : "black"
    }
  return (

  
<div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
             <h2 className="die-num">{props.value}</h2>
            </div>
  )
}

export default Die