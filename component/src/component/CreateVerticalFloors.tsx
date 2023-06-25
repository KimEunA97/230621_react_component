import React from "react";




function CreateVerticalFloors({ floors }: { floors: any }) {

  return (

    <div style={styles.container}>
      <p style={styles.fontStyle}>{floors}</p>
    </div>

  )
}

export default CreateVerticalFloors;

const styles = {

  //층수 박스
  container: {
    display: "flex",
    justifyContent : "center",
  },

  fontStyle: {
    color: "black",

  }

}