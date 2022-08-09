import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const inicialState = useInitialState();
  return (
    <AppContext.Provider value={inicialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
