import "../styles/globals.css";
import { AppProvider } from "../context/context";

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default MyApp;
