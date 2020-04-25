/* eslint camelcase: 0 */
import { formatDistanceToNow, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { Col, Container, Row } from 'reactstrap';
import useSWR from 'swr';
import CardFeature from '../components/CardFeature';
import Layout from '../components/Layout';
import { cutString, fetcher } from '../utils/functions';

export async function getStaticProps() {
  const features = (await import('../data/homePageFeatures/features')).default;
  const fs = (await import('fs')).default;
  const path = (await import('path')).default;

  const featureDirectory = path.join(
    process.cwd(),
    'src/data/homePageFeatures'
  );
  const pageFeatures = [];
  features.forEach(feature => {
    const filePath = path.join(featureDirectory, feature.mdFileName);
    const content = fs.readFileSync(filePath, 'utf8');
    const cardFeature = {
      id: feature.id,
      icon: feature.icon,
      title: feature.title,
      text: content,
    };
    pageFeatures.push(cardFeature);
  });

  return {
    props: {
      pageFeatures,
    },
  };
}

export default function Index({ pageFeatures }) {
  const { data, error } = useSWR(
    'https://api.github.com/repos/azerothcore/azerothcore-wotlk/commits?per_page=15',
    fetcher
  );

  return (
    <Layout>
      <div className="features-wrapper">
        <Container>
          <Row>
            {pageFeatures.map(feature => (
              <Col sm="6" lg="4" key={feature.id}>
                <CardFeature
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
                />
              </Col>
            ))}
          </Row>
          <hr />
          <Row className="text-center">
            <Col md="6" lg="6" xl="4">
              <div className="facebook-page-container">
                <h2>Latest posts</h2>
                <FacebookProvider appId="1676433352594466">
                  <Page
                    href="https://www.facebook.com/AzerothCore"
                    tabs="timeline"
                    width="340px"
                    hideCover
                    smallHeader
                  />
                </FacebookProvider>
              </div>
            </Col>
            <Col md="6" lg="6" xl="8">
              <h2>Latest GitHub commits</h2>
              <div className="commits">
                {!data && !error && <p>Loading latest GitHub commits</p>}
                {error && <p>Error while fetching latest GitHub commits</p>}
                {data && (
                  <ul className="commits-list">
                    {data.map(commitObj => {
                      const { author, commit, html_url, sha } = commitObj;
                      return (
                        <li key={sha}>
                          <img
                            src={
                              author?.avatar_url ||
                              `${process.env.BACKEND_URL}/bot-avatar.png`
                            }
                            loading="lazy"
                            alt="Github avatar"
                            className="github-avatar"
                            width="25px"
                          />
                          {author ? (
                            <a href={author.html_url} className="github-user">
                              {author.login}
                            </a>
                          ) : (
                            commit.author.name
                          )}
                          <span className="item-separator">committed</span>
                          <span className="github-link-container">
                            <a
                              href={html_url}
                              title={commit.message}
                              className="github-commit-link"
                            >{`${cutString(commit.message)}`}</a>
                          </span>
                          <span className="github-time">{`${formatDistanceToNow(
                            parseISO(commit.author.date)
                          )} ago`}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .github-avatar {
            width: 25px;
            height: 25px;
            min-width 25px;
          }
          .commits-list {
            list-style: none;
            text-align: left;
            margin: 0;
          }
          .commits-list li{
            margin: 5px 0;
            white-space: nowrap;
            display: flex;
          }
          .github-avatar {
            margin-right: 5px;
          }
          .github-link-container {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;            
          }
          .github-time {
            margin-left: 5px;
          } 
          hr {
            border: 1px solid #ca0000;
          }
          .item-separator {
            margin: 0 5px;
          }
          @media (max-width: 1200px) {
            .commits-list li {
              white-space: normal;
              display: -webkit-box;
            }
            .github-link-container {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: normal;            
            }
          }
          @media (max-width: 767px) {
            .facebook-page-container {
              padding-bottom: 25px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .features-wrapper h3 {
            margin: 0;
            font-size: 24px;
          }
        `}
      </style>
    </Layout>
  );
}

Index.propTypes = {
  pageFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
