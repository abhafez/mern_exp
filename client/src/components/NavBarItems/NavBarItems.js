import React, { useContext } from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { SideBarContext } from 'providers/SideBarProvider';

function NavBarItems() {
  const { toggleSideBar } = useContext(SideBarContext);

  return (
    <Container fluid>
      <Menu.Item id="toggle_sidebar" onClick={toggleSideBar}>
        <Icon id="toggle_sidebar-icon" name="sidebar" />
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/testing">Testing</Link>
      </Menu.Item>
      <Menu.Menu position="right"></Menu.Menu>
    </Container>
  );
}

export default NavBarItems;
