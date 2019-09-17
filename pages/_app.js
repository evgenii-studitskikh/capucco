import React from 'react';
import { Provider } from "react-redux";
import App, { Container } from 'next/app';
import { appWithTranslation } from '../server/i18n.mjs';

import { store } from "../store";

class Capucco extends App {
  render() {
    const { 
      Component, 
      pageProps 
    } = this.props
    return (
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}

export default appWithTranslation(Capucco)
