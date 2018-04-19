import Head from 'next/head';
import seo from './seo.config';

const SeoDefaultHead = () => (
  <Head>
    <title key="title">{seo.title}</title>
    <meta key="robots" name="robots" content="index,follow" />
    <meta key="googlebot" name="googlebot" content="index,follow" />
    <meta key="description" name="description" content={seo.description} />
    <meta
      key="twitter:card"
      name="twitter:card"
      content={seo.social.twitter.cardType}
    />
    <meta
      key="twitter:site"
      name="twitter:site"
      content={seo.social.twitter.handle}
    />
    <meta key="og:url" property="og:url" content={seo.openGraph.url} />
    <meta key="og:type" property="og:type" content={seo.openGraph.type} />
    <meta key="og:title" property="og:title" content={seo.openGraph.title} />
    <meta
      key="og:description"
      property="og:description"
      content={seo.openGraph.description}
    />
    <meta key="og:image" property="og:image" content={seo.openGraph.image} />
    <meta
      key="og:image:width"
      property="og:image:width"
      content={seo.openGraph.imageWidth}
    />
    <meta
      key="og:image:height"
      property="og:image:height"
      content={seo.openGraph.imageHeight}
    />
    <meta key="og:locale" property="og:locale" content={seo.openGraph.locale} />
  </Head>
);

export default SeoDefaultHead;
