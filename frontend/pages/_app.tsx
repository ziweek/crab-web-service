import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "styles/GlobalStyle";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <GlobalStyle>
          <Head>
            <title>Craverse</title>
          </Head>
          <Component {...pageProps} />
        </GlobalStyle>
      </RecoilRoot>
    </CookiesProvider>
  );
}
