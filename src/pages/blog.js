import { request } from 'graphql-request';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import useSWR from 'swr';
import Layout from '../components/Layout';

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
        nickname
      }
    }
  }
}`;
function Blog() {
  const { data, error } = useSWR(query, fetcher);
  console.log(data);

  return (
    <Layout>
      {error && <div>There was an error while fetching the blog posts</div>}
      <div className="postlist-container">
        <Container>
          <Row>
            {data &&
              data.posts.nodes.map(post => {
                return (
                  <Col lg="12">
                    <div className="post-card" key={post.id}>
                      <h3>{post.title}</h3>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          h3 {
            font-size: 1.35 rem;
          }
        `}
      </style>
    </Layout>
  );
}

export default Blog;
