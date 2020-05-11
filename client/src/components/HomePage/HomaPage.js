import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Table, Message, Dropdown, Segment } from 'semantic-ui-react';
import useRequest, { get } from 'hooks/useRequest';
import { Shimmer } from 'components/shared/Shimmer';
import Pagination from 'components/Pagination';

function HomePage() {
  const [productList, setProductList] = useState(null);
  const [maxLength, setMaxLength] = useState(null);
  const [itemsPerPage, setItemPerPage] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  const { response, setRequest, error } = useRequest(
    get,
    `products?page=${pageNumber}&count=${itemsPerPage}`,
  );
  useEffect(() => {
    setRequest(true);
  }, []);

  useEffect(() => {
    if (pageNumber || itemsPerPage) {
      setRequest(true);
    }
  }, [pageNumber, itemsPerPage]);

  const handlItemsPerPage = (e, data) => {
    setItemPerPage(data.value);
    setPageNumber(1);
  };

  const options = [
    { key: 1, text: '5 Items', value: 5 },
    { key: 2, text: '8 Items', value: 8 },
    { key: 3, text: '12 Items', value: 12 },
  ];

  useEffect(() => {
    if (response && response.data) {
      setProductList(response.data.list);
      setMaxLength(response.data.totalLengh);
    }
  }, [response]);
  const tableHeaders = ['name', 'price', 'code', 'department'];

  return (
    <>
      {!productList && <Shimmer />}
      {error && (
        <Message negative>
          <Message.Header>Something went wrong</Message.Header>
          <p></p>
        </Message>
      )}
      {productList && (
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
                <Table.Cell>
                  {product.newPrice ? product.newPrice : product.price}
                </Table.Cell>
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
      )}
    </>
  );
}

export default HomePage;
