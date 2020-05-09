import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

export const LocaleContext = React.createContext();

const LanguageProvider = ({ messages, children }) => {
  const [locale, setLocale] = useState('en');

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
        {React.Children.only(children)}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
