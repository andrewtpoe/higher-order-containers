import React from 'react';

const styles = {
  padding: '4px 8px',
  margin: '0 0 0 8px',
};

function Button(props) {
  return <button style={styles} {...props} />;
}

export default Button;
