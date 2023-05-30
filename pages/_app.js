import LayoutMain from "@/layouts/main.layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
}
