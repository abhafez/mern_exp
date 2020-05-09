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
    {[...Array(n)].map((i) => (
      <Placeholder.Line key={i} />
    ))}
  </Placeholder.Paragraph>
);

Shimmer.propTypes = {
  fluid: PropTypes.bool,
  type: PropTypes.string,
};
