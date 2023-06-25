import React from "react";
import CreateVerticalFloors from "./CreateVerticalFloors";

function FloorsVerticalMenu() {

  const floors = ["1", "2", "3", "4", "5", "6"]
  const floorsList = floors.map((floorsNumber) => (<CreateVerticalFloors floors={floorsNumber} />))

  return (
    <div>
      <div></div>
      <p style={styles.container}>{floorsList}</p>
      <div></div>
    </div>
  )

}

export default FloorsVerticalMenu;

const styles = {

  container: {
    display: "inline-block",
    backgroundColor: "#2A72EF",
    padding: "10px",

    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: "5px",
  }

}