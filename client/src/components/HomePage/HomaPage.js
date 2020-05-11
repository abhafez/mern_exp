import React, { useEffect, useState } from 'react';
import { Message } from 'semantic-ui-react';
import useRequest, { get } from 'hooks/useRequest';
import { Shimmer } from 'components/shared/Shimmer';
import ProductsTable from 'components/ProductsTable';
import FilterDropdown from 'components/FilterDropdown/FilterDropdown';
import { promos, departments } from 'constants/filters';

function HomePage() {
  const [productList, setProductList] = useState(null);
  const [maxLength, setMaxLength] = useState(null);
  const [itemsPerPage, setItemPerPage] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  const [departmentSelection, setDepartmentSelection] = useState();
  const [promoSelection, setPromoSelection] = useState();
  const [productName, setProductName] = useState('');

  const { response, setRequest, error } = useRequest(
    get,
    `products?page=${pageNumber}&count=${itemsPerPage}${
      promoSelection ? `&promo=${promoSelection}` : ''
    }${departmentSelection ? `&department=${departmentSelection}` : ''}${
      productName ? `&name=${productName}` : ''
    }`,
  );

  const promoFilter = (e, { value }) => setPromoSelection(value);
  const departmentFilter = (e, { value }) => setDepartmentSelection(value);

  useEffect(() => {
    setRequest(true);
  }, []);

  useEffect(() => {
    if (pageNumber || itemsPerPage || departmentSelection || promoSelection) {
      setRequest(true);
    }
  }, [pageNumber, itemsPerPage, departmentSelection, promoSelection]);

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
      <FilterDropdown options={promos} onFilter={promoFilter} />
      <FilterDropdown options={departments} onFilter={departmentFilter} />
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
