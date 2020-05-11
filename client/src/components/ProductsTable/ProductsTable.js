import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Dropdown, Segment, Table } from 'semantic-ui-react';
import Pagination from 'components/Pagination';
import { options } from 'constants/PaginationOptions';

function ProductsTable(props) {
  const {
    tableHeaders,
    productList,
    itemsPerPage,
    handlItemsPerPage,
    maxLength,
    pageNumber,
    setPageNumber,
  } = props;

  return (
    <Table celled textAlign="center">
      <Table.Header>
        <Table.Row>
          {tableHeaders.map((title) => (
            <Table.HeaderCell key={title}>
              <FormattedMessage id={`product.${title}`} />
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {productList.map((product) => (
          <Table.Row key={product.id}>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>{product.newPrice ? product.newPrice : product.price}</Table.Cell>
            <Table.Cell>{product.code}</Table.Cell>
            <Table.Cell>{product.department}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Segment basic floated="left">
              <Dropdown
                options={options}
                selection
                value={itemsPerPage}
                onChange={handlItemsPerPage}
              />
            </Segment>
            <Segment basic floated="right">
              <Pagination
                numberOfItems={maxLength}
                itemsPerPage={itemsPerPage}
                pageNumber={pageNumber}
                onChangePage={(pageNum) => {
                  setPageNumber(pageNum);
                }}
              />
            </Segment>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

ProductsTable.propTypes = {
  tableHeaders: PropTypes.object,
  productList: PropTypes.object,
  itemsPerPage: PropTypes.number,
  handlItemsPerPage: PropTypes.func,
  maxLength: PropTypes.number,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
};

export default ProductsTable;
