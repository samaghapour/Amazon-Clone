import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../component/navbar/Navbar';
import DeliveryModule from '../component/DeliveryModule';
import Footer from '../component/footer/Footer';
import SideMenuContainer from '../component/sideMenu/SideMenuContainer';
import { Auth0Provider } from '@auth0/auth0-react';
import NextNprogress from 'nextjs-progressbar';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { AllReducers } from '../redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  blacklist: ['FilteredProduct'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const Store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(Store);

const domainId = process.env.NEXT_PUBLIC_DOMAIN_ID;
const clientNumber = process.env.NEXT_PUBLIC_CLIENT_ID;

function MyApp({ Component, pageProps }) {
  const win = typeof window !== 'undefined';

  return (
    <Auth0Provider
      domain={domainId}
      clientId={clientNumber}
      redirectUri={win && window.location.origin}>
      {Component.name === 'signup' ? (
        <Component {...pageProps} />
      ) : (
        <Provider store={Store}>
          <PersistGate loading={null} persistor={persistor}>
            <Head>
              <link rel='icon' type='image/png' href='/assets/amazonFav.ico' />
              <link rel='preconnect' href='https://fonts.googleapis.com' />
              <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossorigin
              />
              <link
                href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
                rel='stylesheet'
              />
            </Head>
            <Navbar />
            <DeliveryModule />
            <SideMenuContainer />
            <NextNprogress
              color='#ffa41c'
              startPosition={0.3}
              stopDelayMs={50}
              height={3}
            />
            <Component {...pageProps} />

            <Footer />
          </PersistGate>
        </Provider>
      )}
    </Auth0Provider>
  );
}

export default MyApp;
