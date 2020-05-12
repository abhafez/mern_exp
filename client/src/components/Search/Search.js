import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: inline;
  margin-right: 1em;
`;

function Search({ value, getName, searchByName, loading }) {
  return (
    <>
      <Input
        onChange={getName}
        value={value}
        id="name-search"
        placeholder="Product Name"
      />
      <Button
        id="search-btn"
        type="submit"
        data-testid="btn"
        onClick={searchByName}
        loading={loading}
      >
        Search by Name
      </Button>
    </>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  getName: PropTypes.func,
  searchByName: PropTypes.func,
  loading: PropTypes.bool,
};
export default Search;
