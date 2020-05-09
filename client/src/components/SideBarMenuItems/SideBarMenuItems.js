import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

function SideBar() {
  return (
    <>
      <Menu.Item as="a">
        <Icon name="home" as="i" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </>
  );
}

export default SideBar;
