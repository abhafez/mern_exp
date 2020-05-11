import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ProductsTable from '../index';
import { translationMessages } from '../../../i18n';

describe('<ProductsTable />', () => {
  it('Should be able to update page number', () => {
    const tableHeaders = ['name', 'price', 'code', 'department'];
    const productList = [{ id: 321, name: 'Firefox', price: 30 }];
    const handleItemsPerPageSpy = jest.fn();
    const setPageSpy = jest.fn();
    render(
      <IntlProvider locale="en" messages={translationMessages['en']}>
        <ProductsTable
          tableHeaders={tableHeaders}
          productList={productList}
          itemsPerPage={10}
          maxLength={10}
          handlItemsPerPage={handleItemsPerPageSpy}
          setPageNumber={setPageSpy}
          pageNumber={2}
        />
      </IntlProvider>,
    );
    expect(handleItemsPerPageSpy).not.toHaveBeenCalled();
    expect(setPageSpy).toHaveBeenCalled();
  });
});
