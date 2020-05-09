import React from 'react';
import { Container } from 'semantic-ui-react';
import MainLayout from 'containers/MainLayout';

/**
 * @description Wraps component with Main Layout (Pusher and pushable)
 * @param {Element} component
 * @returns {jsx}
 */
export const wrapWithMainLayout = (component) => (
  <MainLayout>
    <Container style={{ marginTop: '6em' }}>{component}</Container>
  </MainLayout>
);
