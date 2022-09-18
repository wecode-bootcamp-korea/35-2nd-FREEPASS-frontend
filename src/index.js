import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import theme from './styles/theme';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </>
);
