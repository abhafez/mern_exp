import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Container, Header, Divider } from 'semantic-ui-react';
import useRequest, { get } from 'hooks/useRequest';
import { Shimmer } from 'components/shared/Shimmer';

function HomePage() {
  const [data, setData] = useState();
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
        {JSON.stringify(data)}
      </Container>
    </>
  );
}

export default HomePage;
