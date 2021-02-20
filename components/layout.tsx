import Head from "next/head";
import Header from "./header";

const siteName = "FlashCard Maker";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>{siteName}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
