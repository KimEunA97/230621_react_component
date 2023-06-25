import React, { useState } from "react";
import CreateVerticalFloors from "./CreateVerticalFloors";

function FloorsVerticalMenu() {


  function handleFloorUp() {

  }


  //층수 추가
  const floors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  //층 생성
  const floorsList = floors.map((floorsNumber) => (<CreateVerticalFloors floors={floorsNumber}/>))

  return (
    <div style={styles.btnStyle}>
      <div
        onClick={handleFloorUp}
        style={styles.defaultFloor}
      ></div>
      <p style={styles.defaultFloor}>{floorsList}</p>
      <div></div>
    </div>
  )

}

export default FloorsVerticalMenu;

const styles = {

  defaultFloor: {
    display: "inline-block",
    backgroundColor: "white",
    padding: "10px",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",
  },
  onClickFloor: {
    display: "inline-block",
    backgroundColor: "#2A72EF",
    padding: "10px",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",
  },

  btnStyle: {
    display: "inline-flex", 
    flexDirection: "column"
  }
}