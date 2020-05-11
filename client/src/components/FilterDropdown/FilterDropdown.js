import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const FilterDropdown = ({ options, onFilter }) => (
  <Dropdown clearable options={options} selection onChange={onFilter} />
);

FilterDropdown.propTypes = {
  options: PropTypes.array,
  onFilter: PropTypes.func,
};

export default FilterDropdown;
