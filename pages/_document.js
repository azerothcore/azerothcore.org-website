import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const globalStyles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
          <style type="text/css">{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
