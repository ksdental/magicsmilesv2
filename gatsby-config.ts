import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  trailingSlash: 'always',
  siteMetadata: {
    title: 'Magic Smile Dental | Implant Dentistry | Linden, NJ',
    author: 'moderndocmedia.com',
    siteUrl: `https://www.lindennjdentist.com`,
    description:
      'Welcome to Magic Smile Dental, home of the premier dentists in Linden, NJ. Offering comprehensive dental care for the entire family. Contact us today!',
    keywords: 'Magic Smiles Dental, Dentist Linden, Linden NJ Dentist, lindennjdentist',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./assets/images/`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-emotion`,

    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 90,
          breakpoints: [380, 430, 750, 1080, 1366, 1920, 2000],
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magic Smile Dental`,
        short_name: `Magic Smile`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#f5f5f5`,
        display: `minimal-ui`,
        icon: `assets/icons/favicon.png`,
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.lindennjdentist.com`,
      },
    },

    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MPQ958LV',
        includeInDevelopment: true,
      },
    },
  ],
};

export default config;
