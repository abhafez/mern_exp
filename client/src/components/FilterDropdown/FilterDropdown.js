import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const FilterDropdown = ({ value, options, onFilter }) => (
  <Dropdown
    options={options}
    search
    value={value}
    selection
    onChange={onFilter}
    testid="dropdown"
  />
);

FilterDropdown.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  onFilter: PropTypes.func,
};

export default FilterDropdown;
