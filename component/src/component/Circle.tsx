import exp from "constants";
import React from "react";


function Circle() {

  return (
    <div style={styles.align}>
      <div style={styles.circleContainer}>
      </div>
    </div>
  )

}


export default Circle;


const styles = {

  circleContainer: {

    width: "100px",
    height: "100px",

    border: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,

  },
  align: {

    justifyContent: "center",
    alignContent: "center",

  }

}