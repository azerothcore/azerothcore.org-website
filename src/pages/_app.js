import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {pageProps.statusCode !== 404 && <Header />}
      <Component {...pageProps} />
      {pageProps.statusCode !== 404 && <Footer />}
    </>
  );
}

export default MyApp;
