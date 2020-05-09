import React, { useContext } from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';
import { SideBarContext } from 'providers/SideBarProvider';
import SideBarItems from 'components/SideBarMenuItems';

function SideBarMenu() {
  const { sideBar } = useContext(SideBarContext);

  return (
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      visible={sideBar}
      width="wide"
      id="sidebar"
    >
      <SideBarItems />
    </Sidebar>
  );
}

export default SideBarMenu;
