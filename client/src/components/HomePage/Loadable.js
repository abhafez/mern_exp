import React from 'react';
import loadable from 'utils/loadable';
import { LoaderExampleText } from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoaderExampleText />,
});
