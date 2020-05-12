import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

function SideBar() {
  return (
    <>
      <Menu.Item as="a">
        <Icon name="home" as="i" />
        Home Page
      </Menu.Item>
    </>
  );
}

export default SideBar;
