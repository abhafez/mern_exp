import React, { useEffect, useState } from 'react';
import { Message, Segment, Divider, Button, Icon } from 'semantic-ui-react';
import useRequest, { get } from 'hooks/useRequest';
import { Shimmer } from 'components/shared/Shimmer';
import ProductsTable from 'components/ProductsTable';
import FilterDropdown from 'components/FilterDropdown/FilterDropdown';
import Search from 'components/Search';
import { promos, departments } from 'constants/filters';
import { DepartmentFilterstyled, PromoFilterstyled } from './styles';

function HomePage() {
  const [productList, setProductList] = useState(null);
  const [maxLength, setMaxLength] = useState(null);
  const [itemsPerPage, setItemPerPage] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  const [departmentSelection, setDepartmentSelection] = useState();
  const [promoSelection, setPromoSelection] = useState();
  const [productName, setProductName] = useState('');
  const [submitName, setSubmitName] = useState(false);

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
  const handleNameInput = (e) => setProductName(e.target.value);
  const searchByName = () => setSubmitName(true);
  const clear = () => {
    setDepartmentSelection(null);
    setProductName('');
    setPromoSelection(null);
  };

  useEffect(() => {
    setRequest(true);
  }, []);

  useEffect(() => {
    if (submitName) {
      setRequest(true);
      setSubmitName(false);
    }
  }, [submitName]);

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
      setMaxLength(response.data.filteredLength);
    }
  }, [response]);
  const tableHeaders = ['name', 'price', 'code', 'department'];

  return (
    <>
      <Segment basic>
        <PromoFilterstyled>
          Filters:{' '}
          <FilterDropdown
            value={promoSelection}
            options={promos}
            onFilter={promoFilter}
          />
        </PromoFilterstyled>
        <DepartmentFilterstyled>
          <FilterDropdown
            options={departments}
            value={departmentSelection}
            onFilter={departmentFilter}
          />
        </DepartmentFilterstyled>

        <Divider hidden />
        <Search
          getName={handleNameInput}
          searchByName={searchByName}
          value={productName}
        />
        <Button animated="vertical" onClick={clear}>
          <Button.Content hidden>Clear</Button.Content>
          <Button.Content visible>
            <Icon name="trash" />
          </Button.Content>
        </Button>
      </Segment>
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
