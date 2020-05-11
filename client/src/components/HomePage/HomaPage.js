import React, { useEffect, useState } from 'react';
import { Message } from 'semantic-ui-react';
import useRequest, { get } from 'hooks/useRequest';
import { Shimmer } from 'components/shared/Shimmer';
import ProductsTable from 'components/ProductsTable';

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
        </Message>
      )}
      {productList && (
        <ProductsTable
          tableHeaders={tableHeaders}
          productList={productList}
          itemsPerPage={itemsPerPage}
          handlItemsPerPage={handlItemsPerPage}
          maxLength={maxLength}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </>
  );
}

export default HomePage;
