import "../styles/globals.css";
import { AppProvider } from "../context/context";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <AppProvider>
      {domLoaded && <Toaster />}
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
