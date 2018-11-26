/**
 * @file Layout.
 * @copyright Simon Finney 2018
 */

import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Header from '../components/header';
import Aside from '../components/aside';

import '../index.scss';

const query = graphql`
  query DefaultQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM, YYYY")
            description
          }
          id
        }
      }
    }
    site {
      siteMetadata {
        title
        contact {
          label
          url
          handle
          icon
        }
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { allMarkdownRemark, site } = data;
      const { contact, title } = site.siteMetadata;

      const postsListItems = allMarkdownRemark.edges.map(({ node }) => {
        const { fields, frontmatter, id } = node;
        const { date, title } = frontmatter;

        return (
          <li key={id}>
            <Link to={fields.slug} title={date}>
              {title}
            </Link>
          </li>
        );
      });

      const contactListItems = contact.map(({ handle, icon, label, url }) => (
        <li key={icon}>
          <a
            href={`${url}${handle}`}
            rel="noopener noreferrer"
            target="_blank"
            data-icon={icon}
          >
            {label}
          </a>
        </li>
      ));

      return (
        <Fragment>
          <Helmet title={title}>
            <html dir="ltr" lang="en" />
            <meta name="description" content="" />
          </Helmet>

          <Header title={title} />
          <main role="main">{children}</main>
          <aside>
            <Aside title="Posts" listItems={postsListItems} />
            <Aside title="Contact" listItems={contactListItems} />
          </aside>
        </Fragment>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;