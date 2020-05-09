import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
const scope = 'components.footer';

function Footer() {
  const values = {
    year: new Date().getFullYear(),
  };

  return (
    <Segment inverted vertical id="footer">
      <Container fluid>
        <Header as="h5" inverted style={{ margin: '1em' }}>
          <FormattedMessage id={`${scope}.copyRights`} values={values} />
        </Header>
      </Container>
    </Segment>
  );
}

export default Footer;
