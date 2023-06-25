import React, { useState } from "react";
import CreateVerticalFloors from "./CreateVerticalFloors";

function FloorsVerticalMenu() {


  function handleFloorUp() {

  }
  function handleFloorDown() {

  }


  //층수 추가
  const floors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  //층 생성
  const floorsList = floors.map((floorsNumber) => (<CreateVerticalFloors floors={floorsNumber} />))

  return (
    <div style={styles.container}>
      <div style={styles.upFloorBtn} onClick={handleFloorUp}></div>
      <p style={styles.defaultFloor}>{floorsList}</p>
      <div style={styles.downFloorBtn} onClick={handleFloorDown} ></div>
    </div>
  )

}

export default FloorsVerticalMenu;

const styles = {

  container: {
    display: "inline-flex",
    flexDirection: "column" as const,
    margin: 0,
  },
  upFloorBtn: {
    padding: "10px",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",

    borderBottomLeftRadius: "1px", // 수정된 부분
    borderBottomRightRadius: "1px", // 수정된 부분
  },

  downFloorBtn: {
    padding: "10px",

    borderWidth: "1px",
    borderStyle: 'solid',
    borderRadius: "5px",

    borderTopLeftRadius: "1px", // 수정된 부분
    borderTopRightRadius: "1px", // 수정된 부분
  },

  defaultFloor: {
    display: "inline-block",
    backgroundColor: "white",
    padding: "10px",
    margin: 0,

    borderWidth: "1px",
    borderStyle: 'solid',

  },
  onClickFloor: {
    display: "inline-block",
    backgroundColor: "#2A72EF",
    padding: "10px",
    margin: 0,

    borderWidth: "1px",
    borderStyle: 'solid',
  },


}