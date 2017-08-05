import React from 'react';
import PropTypes from 'prop-types';

import Button from 'blocks/Button';

function FilterButton({ active, onClick, ...rest }) {
  return <Button disabled={active} onClick={onClick} {...rest} />;
}

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;
