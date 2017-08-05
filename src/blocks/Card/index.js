import React from 'react';

import Item from './Item';

const styles = {
  border: '1px solid grey',
  borderRadius: '2px',
  width: 'auto',
  boxShadow: '0 2px 2px 2px rgba(50, 50, 50, 0.4)',
};

function Card(props) {
  return <div style={styles} {...props} />;
}

Card.Item = Item;

export default Card;
