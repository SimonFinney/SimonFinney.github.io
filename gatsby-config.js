/**
 * @file Gatsby configuration.
 * @copyright Simon Finney 2019 - 2020
 */

const { resolve } = require('path');
const { description } = require('./package.json');

module.exports = {
  siteMetadata: {
    name: description,
    contact: [
      {
        content: 'hello@simonﬁnney.dev',
        href: 'mailto:hello@simonfinney.dev',
      },
      {
        content: 'LinkedIn',
        href: 'https://www.linkedin.com/in/simonfinney',
      },
      {
        content: 'GitHub',
        href: 'https://github.com/simonfinney',
      },
    ],
    role: 'Creative Technologist',
    siteUrl: 'https://simonfinney.dev',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-35182446-4',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        display: 'swap',
        fonts: ['Fira Code', 'Fira Sans'],
      },
    },
    'gatsby-plugin-manifest',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: resolve('src/layout'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              elements: ['h3'],
              icon: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener noreferrer',
              target: '_blank',
            },
          },
          'gatsby-remark-images',
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
