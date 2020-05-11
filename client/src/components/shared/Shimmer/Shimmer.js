import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react';

export function Shimmer({ fluid, type }) {
  return type === 'profile' ? (
    <Placeholder fluid={fluid || false}>{Lines(6)}</Placeholder>
  ) : (
    <Placeholder fluid={fluid || false}>{Lines(7)}</Placeholder>
  );
}

export const Lines = (n) => (
  <Placeholder.Paragraph key={n + 1}>
    {[...Array(n)].map((n, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Placeholder.Line key={i} />
    ))}
  </Placeholder.Paragraph>
);

Shimmer.propTypes = {
  fluid: PropTypes.bool,
  type: PropTypes.string,
};
