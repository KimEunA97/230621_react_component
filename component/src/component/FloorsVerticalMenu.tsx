import React, { useState } from "react";
import CreateVerticalFloors from "./CreateVerticalFloors";

function FloorsVerticalMenu() {
  const [selectedFloor, setSelectedFloor] = useState(0);

  function handleFloorUp() {
    setSelectedFloor(prevFloor => (prevFloor > 0 ? prevFloor - 1 : prevFloor));
  }

  function handleFloorDown() {
    setSelectedFloor(prevFloor => (prevFloor < floors.length - 1 ? prevFloor + 1 : prevFloor));
  }

  const handleFloorClick = (index: number) => {
    setSelectedFloor(index);
  };

  const floors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const floorsList = floors.map((floor, index) => (
    <CreateVerticalFloors
      key={index}
      floors={floor}
      isSelected={index === selectedFloor}
      onClick={() => handleFloorClick(index)}
    />
  ));

  return (
    <div style={styles.container}>
      <button style={styles.upFloorBtn} onClick={handleFloorUp}></button>
      <p style={styles.defaultFloor}>{floorsList}</p>
      <button style={styles.downFloorBtn} onClick={handleFloorDown}></button>
    </div>
  );
}

export default FloorsVerticalMenu;

const styles = {

  container: {
    display: "inline-flex",
    flexDirection: "column" as const,
    margin: 0,
  },
  upFloorBtn: {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "white",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",

    borderBottomLeftRadius: "1px",
    borderBottomRightRadius: "1px",
  },
  downFloorBtn: {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "white",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",

    borderTopLeftRadius: "1px",
    borderTopRightRadius: "1px",

  },

  defaultFloor: {
    display: "inline-block",
    backgroundColor: "white",
    padding: "10px",
    margin: 0,

    borderWidth: "1px",
    borderStyle: 'solid',

  },


}