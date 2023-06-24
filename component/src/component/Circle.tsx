import React from "react";


function Circle() {

  return (
    <div style={styles.container}></div>
  )
}

export default Circle;

const styles = {

  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderRadius: 100,
  }

}