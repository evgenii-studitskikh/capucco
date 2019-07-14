import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="icon" type="image/x-icon" href="/static/icons/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+Bold" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzBCVQTEbTeOC1BVen64lsdSZ2hartG6Q&v=3.exp&libraries=geometry,drawing,places" />
        </Head>
        <body style={{margin: 0, font: '12px Noto Sans, Arial, sans-serif'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}