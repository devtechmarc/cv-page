import { Helmet } from 'react-helmet';

// Pon este componente en pages.jsx
const Seo = ({ wantSeo = true, title, description, keywords, image, url }) => {
  return (
    <>
      {wantSeo ? (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content="Marc Fernández" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content={title} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content="Marc Fernández" />
          <meta name="robots" content="noindex, follow"/>
        </Helmet>
      )}
    </>
  );
};

export default Seo;
