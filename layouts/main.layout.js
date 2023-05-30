import Head from "next/head";

export default function main({ children }) {
  return (
    <>
      <Head>
        <title>Merkle Tree Gift List (Alchemy)</title>
        <meta
          name="description"
          content="Alchemy university's Ethereum Developer Bootcamp Merkle Tree Gift List project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>{children}</>
    </>
  );
}
