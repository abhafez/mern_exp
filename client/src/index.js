import 'core-js';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import LanguageProvider from './providers/LanguageProvider';
import SideBarProvider from './providers/SideBarProvider';
import { translationMessages } from './i18n';

import './App.scss';

const MOUNT_NODE = document.getElementById('root');

const render = (messages) => {
  ReactDOM.render(
    <LanguageProvider messages={messages}>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </LanguageProvider>,
    MOUNT_NODE,
  );
};

render(translationMessages);
