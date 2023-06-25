import React from "react";

function CreateVerticalFloors({ floors, selectedFloor, onSelect }:any)  {
  const handleClick = () => {
    onSelect(floors);
  };

  const isSelected = selectedFloor === floors;

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isSelected ? "#2A72EF" : "white",
      }}
      onClick={handleClick}
    >
      <p style={styles.fontStyle}>{floors}</p>
    </div>
  );
}

export default CreateVerticalFloors;

// styles 객체는 동일하게 유지됩니다.


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