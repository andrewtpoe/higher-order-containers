import PropTypes from 'prop-types';
import React from 'react';

import Card from 'blocks/Card';

import FilterButton from './FilterButton';

const filters = [
  { value: 'SHOW_ALL', label: 'All' },
  { value: 'SHOW_ACTIVE', label: 'Active' },
  { value: 'SHOW_COMPLETED', label: 'Completed' },
];

function Footer({ filter, onFilterClick }) {
  function buildFilterButtons(filters, handleFilterClick) {
    return filters.map(f =>
      <FilterButton
        key={f.value}
        active={f.value === filter}
        onClick={event => handleFilterClick(event, f.value)}
      >
        {f.label}
      </FilterButton>,
    );
  }

  function handleFilterClick(event, filter) {
    event.preventDefault();
    onFilterClick(filter);
  }

  return (
    <Card.Item>
      Filter:
      {buildFilterButtons(filters, handleFilterClick)}
    </Card.Item>
  );
}

Footer.propTypes = {
  filter: PropTypes.string,
  onFilterClick: PropTypes.func.isRequired,
};

export default Footer;
