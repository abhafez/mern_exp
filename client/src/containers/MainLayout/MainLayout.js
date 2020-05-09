import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Sidebar } from 'semantic-ui-react';
import SideBarMenu from 'layout/SideBarMenu';
import NavBar from 'layout/NavBar';
import Footer from 'layout/Footer';

const MainLayout = ({ children }) => (
  <Sidebar.Pushable>
    <SideBarMenu />
    <NavBar />
    <Sidebar.Pusher id="pusher" dimmed={false}>
      <div id="main-content">
        <Segment basic>{children}</Segment>
      </div>
      <Footer />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
