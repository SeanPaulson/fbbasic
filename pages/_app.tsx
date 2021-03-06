import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
