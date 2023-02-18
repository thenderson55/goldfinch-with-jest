import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import React, { ReactElement, ReactNode, useEffect } from 'react';
// import Layout from '../components/Layout/Layout';
import Navbar from '../components/Layout/Navbar';
import '../sass/global.scss';
// import "../components/Layout/Navbar.css";

const queryClient = new QueryClient();

// This default export is required in a new `pages/_app.js` file.
type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Head>
            <title>Thomas Henderson</title>
            <meta name='description' content='inventory management' />
          </Head>
          {/* <Navbar /> */}
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </SessionProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// function Auth({ children }) {
//   const { data: session, status } = useSession();
//   const isUser = !!session?.user;
//   React.useEffect(() => {
//     if (status === "loading") return; // Do nothing while loading
//     // if (!isUser) signIn(); // If not authenticated, force log in
//   }, [isUser, status]);

//   if (isUser) {
//     return children;
//   }

//   // Session is being fetched, or no user.
//   // If no user, useEffect() will redirect.
//   return <div>Loading...</div>;
// }
