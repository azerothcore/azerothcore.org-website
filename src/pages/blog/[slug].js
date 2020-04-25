import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Container, Row, Col, Spinner } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { gqlFetcher, formatDate } from '../../utils/functions';

const query = `
query Post($id: ID!) {
  post(id: $id, idType: SLUG) {
    author {
      name
    }
    title
    content(format: RENDERED)
    date
  }
}
`;

function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR([query, slug], (q, sl) =>
    gqlFetcher(q, { id: sl })
  );

  return (
    <Layout
      page="blog-post"
      lead={
        data ? `${data.post.author.name} | ${formatDate(data.post.date)}` : ''
      }
      title={data ? data.post.title : ''}
    >
      <Container>
        <Row>
          <Col>
            {!data && (
              <div className="no-data-content">
                {error && <p>Error while fetching the blog post</p>}
                {!error && (
                  <div className="spinner-container">
                    <Spinner
                      style={{ width: '3rem', height: '3rem' }}
                      type="grow"
                    />
                  </div>
                )}
              </div>
            )}
            {data && (
              <ReactMarkdown source={data.post.content} escapeHtml={false} />
            )}
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .no-data-content {
          display: flex;
          justify-content: center;
        }
        p {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}

export default Post;
