import { Provider } from "react-redux";
import { store } from "../app/store";

import { SessionProvider } from "next-auth/react";

import { Header } from "../components";

import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
