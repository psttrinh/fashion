import type { AppProps } from "next/app";

import Layouts from "@components/layouts/Layouts";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const ComponentAsAny: any = Component;

  return (
    <Layouts>
      <ComponentAsAny {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
