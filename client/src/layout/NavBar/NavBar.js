import React from 'react';
import { Menu } from 'semantic-ui-react';
import NavBarItems from 'components/NavBarItems';

function NavBar() {
  return (
    <Menu fixed="top" inverted id="nav-bar">
      <NavBarItems />
    </Menu>
  );
}

export default NavBar;
