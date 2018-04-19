/**
 * _document is only rendered on the server side and not on the client
 * side so event handlers like onClick can't be added to this file
 */
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyles from '../helpers/GlobalStylesHelper';
import SeoDefaultHead from '../components/Seo';

GlobalStyles();

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" key="charSet" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" key="httpEquiv" />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <SeoDefaultHead />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab:700"
            rel="stylesheet"
            key="googlefonts"
          />
          <link rel="icon" href="/static/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
