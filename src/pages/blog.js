import { format, parseISO } from 'date-fns';
import { request } from 'graphql-request';
import Link from 'next/link';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner
} from 'reactstrap';
import useSWR, { useSWRPages } from 'swr';
import Layout from '../components/Layout';
import { getPreviewText } from '../utils/functions';

const API = 'http://azerothcore.altervista.org/wp/graphql';
const fetcher = (query, variables) => request(API, query, variables);

const query = `
query Posts($first: Int, $after: String) {
  posts(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      date
      title
      slug
      id
      content(format: RENDERED)
      author {
        name
      }
    }
  }
}`;
function Blog() {
  const [errorOnFetch, setErrorOnFetch] = useState(false);
  const [ref, inView, entry] = useInView({
    rootMargin: '-50px 0px',
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    'blog-posts',

    // page component
    ({ offset, withSWR }) => {
      const { data, error } = withSWR(
        useSWR([query, offset], (q, cursor) =>
          fetcher(q, { first: 3, after: cursor }),
        ),
      );

      if (error) {
        setErrorOnFetch(true);
      }
      return (
        <Row>
          {data &&
            data.posts.nodes.map(post => {
              return (
                <Col lg="12" key={post.id}>
                  <div className="post-card-container">
                    <Card className="post-card" body>
                      <CardTitle className="post-card-title">
                        <h3>{post.title}</h3>
                      </CardTitle>
                      <CardSubtitle className="post-card-subtitle">
                        <span>{`${post.author.name} | ${format(
                          parseISO(post.date),
                          'dd LLLL yyyy',
                        )}`}</span>
                      </CardSubtitle>
                      <hr />
                      <CardText>
                        <div className="card-preview-text">
                          <ReactMarkdown
                            source={getPreviewText(post.content, 300)}
                            escapeHtml={false}
                          />
                        </div>
                      </CardText>
                      <Link
                        href={`/blog/${post.slug}`}
                        as={`${process.env.BACKEND_URL}/blog/${post.slug}`}
                      >
                        <Button className="post-card-button">
                          Read the post
                        </Button>
                      </Link>
                    </Card>
                  </div>
                </Col>
              );
            })}
          <style jsx>
            {`
              .post-card-container {
                padding: 20px;
              }
              h3 {
                font-size: 1.35rem;
                margin-bottom: 0.3rem;
              }
              hr {
                margin-top: 0.2rem;
                margin-bottom: 0.7rem;
              }
            `}
          </style>
        </Row>
      );
    },

    // get next page's offset from the page endCursor
    SWR => {
      // there's no next page
      if (SWR.data && !SWR.data.posts.pageInfo.hasNextPage) return null;

      // offset = page endCursor
      return SWR.data.posts.pageInfo.endCursor;
    },

    // deps of the page component
    [],
  );

  React.useEffect(() => {
    if (
      inView &&
      pages.length > 0 &&
      !isReachingEnd &&
      !isLoadingMore &&
      !errorOnFetch
    ) {
      loadMore();
    }
  }, [inView, pages, isLoadingMore, isReachingEnd, errorOnFetch]);
  return (
    <Layout>
      <div className="postlist-container">
        <Container>
          {pages}
          <Row>
            <Col>
              <div className="load-more" ref={ref}>
                {!isReachingEnd && !isLoadingMore && (
                  <Button onClick={loadMore}>Load more</Button>
                )}
                {isLoadingMore && !errorOnFetch && (
                  <Spinner
                    style={{ width: '3rem', height: '3rem' }}
                    type="grow"
                  />
                )}
                {errorOnFetch && (
                  <p>There was an error fetching the blog posts</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .load-more {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      <style jsx global>
        {`
          .post-card-title {
            margin-bottom: 0;
          }
          .post-card-subtitle {
            margin-bottom 10px;
          }
          .post-card-subtitle span {
            color: var(--gray);
            font-size: 0.9rem;
          }
          .post-card-button {
            margin-left: auto;
          }
          .card-preview-text p {
            margin: 0;
          }
          .card-preview-text ol, .card-preview-text li {
            list-style: none;
          }
          p {
            text-align: center;
          } 
        `}
      </style>
    </Layout>
  );
}

export default Blog;
