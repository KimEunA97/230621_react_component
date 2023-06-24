import React, { useState } from 'react';

function PyMenu() {

  return (
    <div >
      <div >
        <div style={styles.menuItem}>1</div>
        <div style={styles.menuItem}>2</div>
        <div style={styles.menuItem}>3</div>
        <div style={styles.menuItem}>4</div>
      </div>
    </div>
  );
}

export default PyMenu;


const styles = {
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    margin: "10px",
    cursor: "pointer",
  }
}