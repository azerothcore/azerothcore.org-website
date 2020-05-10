import * as React from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Spinner } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '@/utils/functions';
import { useCurrentPost } from '@/utils/blog-hooks';
import Layout from './Layout';
import { RouteComponentProps } from 'react-router-dom';

type MatchParam = {
  slug: string;
};

type MatchProps = RouteComponentProps<MatchParam>;

const Post: React.FC<MatchProps> = ({ match }) => {
  const { slug } = match.params;
  const router = useRouter();
  const { data, error } = useCurrentPost(slug);

  React.useEffect(() => {
    if (data && data.post === null) {
      router.push('/blog');
    }
  }, [data, router]);

  return (
    <Layout
      page="blog-post"
      lead={
        data && data.post
          ? `${data.post.author.name} | ${formatDate(data.post.date)}`
          : ''
      }
      title={data?.post?.title || ''}
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
            {data && data.post === null && (
              <div className="no-data-content">
                <p>Post not found. Redirecting to the blog page</p>
              </div>
            )}
            {data && data.post !== null && (
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
};

export default Post;
