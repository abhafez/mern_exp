import { render, screen, waitFor } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { departments } from 'constants/filters';
import FilterDropdown from '../FilterDropdown';
import { translationMessages } from '../../../i18n';

describe('<FilterDropdown />', () => {
  it('Should Contain Options Data', () => {
    const onFilterSpy = jest.fn();
    const value = 'some value';
    const EN = 'en';
    const { container } = render(
      <IntlProvider locale={EN} messages={translationMessages[EN]}>
        <FilterDropdown value={value} options={departments} onFilter={onFilterSpy} />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(onFilterSpy).not.toHaveBeenCalled();
    waitFor(() => expect(screen.getByTestId('dropdown')).toContain('Gaming'));
  });
});
