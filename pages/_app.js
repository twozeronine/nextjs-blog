// 글로벌 CSS file 적용은 오직  pages/_app.js에서만 할수있다.
// _app.js은 최상위 구성요소이다.

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
