import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="google-site-verification" content="BE1E1WedLySO32waPep7Iw7VgIe7kYZiZJRQoX661G0" />
      <meta name="yandex-verification" content="370531bcef5bc805" />
    </Head>
  );
}
