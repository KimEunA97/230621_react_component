import React from 'react';

const PieMenu = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    pieMenuStyle: {
      position: 'relative',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      backgroundColor: '#f1f1f1',
      overflow: 'hidden',
    },

    sliceStyle: {
      position: 'absolute',
      width: '50%',
      height: '50%',
      transformOrigin: 'bottom right',
    },

    linkStyle: {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      backgroundColor: '#ccc',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '100px',
      textDecoration: 'none',
      color: '#fff',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.pieMenuStyle}>
      <div style={{ ...styles.sliceStyle, transform: 'rotate(45deg)' }}>
        <a href="#" style={styles.linkStyle}>1</a>
      </div>
      <div style={{ ...styles.sliceStyle, transform: 'rotate(135deg)' }}>
        <a href="#" style={styles.linkStyle}>2</a>
      </div>
      <div style={{ ...styles.sliceStyle, transform: 'rotate(225deg)' }}>
        <a href="#" style={styles.linkStyle}>3</a>
      </div>
      <div style={{ ...styles.sliceStyle, transform: 'rotate(315deg)' }}>
        <a href="#" style={styles.linkStyle}>4</a>
      </div>
    </div>
  );
};

export default PieMenu;
