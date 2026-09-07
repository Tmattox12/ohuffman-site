import Head from 'next/head'

const SITE_NAME = 'The O‑Huffman Group, LLC'

export default function Seo({ title, description }){
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#071028" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
  )
}
