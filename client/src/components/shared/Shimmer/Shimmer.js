import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react';

export function Shimmer({ fluid, type }) {
  return type === 'profile' ? (
    <Placeholder fluid={fluid || false}>
      {Lines(2)}
      {Lines(4)}
    </Placeholder>
  ) : (
    <Placeholder fluid={fluid || false}>
      {Lines(4)}
      {Lines(3)}
    </Placeholder>
  );
}

export const Lines = (n) => (
  <Placeholder.Paragraph>
    {[...Array(n)].map((i) => (
      <Placeholder.Line key={i} />
    ))}
  </Placeholder.Paragraph>
);

Shimmer.propTypes = {
  fluid: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
