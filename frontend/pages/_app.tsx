import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "styles/GlobalStyle";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle>
        <Head>
          <title>Craverse</title>
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </RecoilRoot>
  );
}
