import React from "react";
import CreateVerticalFloors from "./CreateVerticalFloors";

function FloorsVerticalMenu() {

  const floors = ["1", "2", "3", "4", "5", "6"]
  const floorsList = floors.map((floorsNumber) => (<CreateVerticalFloors floors={floorsNumber} />))

  return (
    <div>
      <p style={styles.container}>{floorsList}</p>
    </div>
  )

}

export default FloorsVerticalMenu;

const styles = {

  container: {
    display: "inline-block",
    backgroundColor: "blue",
    margin: "0px",
    padding: "10px",

  }

}