import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Header, Divider } from 'semantic-ui-react';
import useRequest, { get } from 'hooks/useRequest';
import { Shimmer } from 'components/shared/Shimmer';
import Pagination from 'components/Pagination';

function HomePage() {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const { messages } = useIntl();
  const { response, setRequest } = useRequest(get, 'departments');
  useEffect(() => {
    setRequest(true);
  }, []);

  useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response]);

  return (
    <>
      <Helmet>
        <title>{messages['title.homePage']}</title>
      </Helmet>
      <Container>
        <Header as="h1">{messages.loremIpsumHeader}</Header>
        <p>{messages.loremIpsumShort}</p>
        <Divider hidden />
        <Shimmer />
        {pageNumber}
        {JSON.stringify(data)}

        <Pagination
          numberOfItems={22}
          itemsPerPage={7}
          pageNumber={pageNumber}
          onChangePage={(pageNum) => {
            setPageNumber(pageNum);
          }}
        />
      </Container>
    </>
  );
}

export default HomePage;
