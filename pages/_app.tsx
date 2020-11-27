// import App from "next/app";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Pusher from "pusher-js";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Enable pusher logging - don't include this in production
  //Pusher.logToConsole = true;

  var pusher = new Pusher("9dfae5ce4b0f269dded0", {
    cluster: "mt1",
  });

  var channel = pusher.subscribe("twitch-tools");

  return <Component {...pageProps} channel={channel} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
