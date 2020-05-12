import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../Search';

test('Loads when clicked', () => {
  const searchSpy = jest.fn();
  const getNameSpy = jest.fn();
  const { getByText, container } = render(
    <Search
      value="name"
      loading={!!true}
      searchByName={searchSpy}
      getName={getNameSpy}
    />,
  );
  expect(getByText('Search by Name')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
  // Passing loading={true}
  expect(screen.getByTestId('btn').classList).toContain('loading');

  // Clicking search button
  expect(searchSpy).toBeCalledTimes(0);
  fireEvent.click(getByText(/Search by Name/));
  expect(searchSpy).toBeCalledTimes(1);
});

test('No loading by default', () => {
  const searchSpy = jest.fn();
  const getNameSpy = jest.fn();

  render(
    <Search value="name" loading={false} searchByName={searchSpy} getName={getNameSpy} />,
  );
  expect(screen.getByTestId('btn').classList).not.toContain('loading');
});
