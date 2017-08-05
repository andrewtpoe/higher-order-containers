import React from 'react';

const styles = {
  padding: '8px',
};

function Item(props) {
  return <div style={styles} {...props} />;
}

export default Item;
