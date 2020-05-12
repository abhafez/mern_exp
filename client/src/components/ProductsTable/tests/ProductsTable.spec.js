import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ProductsTable from '../index';
import { translationMessages } from '../../../i18n';

describe('<ProductsTable />', () => {
  it('Should be able to update page number', () => {
    const tableHeaders = ['name', 'price', 'code', 'department'];
    const productList = [{ id: 321, name: 'PC', price: 30000 }];
    const handleItemsPerPageSpy = jest.fn();
    const setPageSpy = jest.fn();
    const EN = 'en';
    const { container } = render(
      <IntlProvider locale={EN} messages={translationMessages[EN]}>
        <ProductsTable
          tableHeaders={tableHeaders}
          productList={productList}
          itemsPerPage={10}
          maxLength={10}
          handlItemsPerPage={handleItemsPerPageSpy}
          setPageNumber={setPageSpy}
          pageNumber={1}
        />
      </IntlProvider>,
    );
    expect(handleItemsPerPageSpy).not.toHaveBeenCalled();
    expect(setPageSpy).toHaveBeenCalled(); // by the pagination component

    expect(container.firstChild).toMatchSnapshot();

    // Pagination
    expect(screen.getByText('1').classList).toContain('active');
    expect(screen.getByText('⟩⟩').classList).toContain('disabled');
  });
});
