import { format, parseISO } from 'date-fns';
import { request } from 'graphql-request';
import Link from 'next/link';
import React from 'react';
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
} from 'reactstrap';
import useSWR from 'swr';
import Layout from '../components/Layout';
import { getPreviewText } from '../utils/functions';

const API = 'http://azerothcore.altervista.org/wp/graphql';
const fetcher = query => request(API, query);
const query = `
query Posts {
  posts {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
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
  const { data, error } = useSWR(query, fetcher);

  return (
    <Layout>
      {error && <div>There was an error while fetching the blog posts</div>}
      <div className="postlist-container">
        <Container>
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
                        <Link href="/">
                          <Button className="post-card-button">
                            Read the post
                          </Button>
                        </Link>
                      </Card>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
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
        `}
      </style>
    </Layout>
  );
}

export default Blog;
