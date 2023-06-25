import React from "react";




function CreateVerticalFloors({ floors }: { floors: any }) {

  return (

    <div>
      <p style={styles.container}>{floors}</p>
    </div>

  )
}

export default CreateVerticalFloors;

const styles = {

  container: {
    color: "white",
  }

}