import Head from 'next/head'

const SITE_NAME = 'The O‑Huffman Group, LLC'
const SITE_URL = 'https://www.o-huffmangroup.com'
const OG_IMAGE = `${SITE_URL}/brand/ohg-social-card.png`

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
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — building products, empowering people`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
