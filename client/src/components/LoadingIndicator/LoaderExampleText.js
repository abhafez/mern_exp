import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { useIntl } from 'react-intl';

export const LoaderExampleText = () => {
  const { messages } = useIntl();
  return (
    <>
      <Segment basic>
        <Dimmer active inverted>
          <Loader inverted>{messages['loading.message']}</Loader>
        </Dimmer>
      </Segment>
    </>
  );
};
