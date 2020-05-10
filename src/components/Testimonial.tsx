import * as React from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Spinner } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { useCurrentTestimonial } from '@/utils/testimonials-hooks';
import Layout from './Layout';
import { RouteComponentProps } from 'react-router-dom';

type MatchParam = {
  slug: string;
};

type MatchProps = RouteComponentProps<MatchParam>;

const Testimonial: React.FC<MatchProps> = ({ match }) => {
  const { slug } = match.params;
  const router = useRouter();
  const { data, error } = useCurrentTestimonial(slug);

  React.useEffect(() => {
    if (data && data.testimonial === null) {
      router.push('/testimonials');
    }
  }, [data, router]);

  return (
    <Layout
      page="testimonial-post"
      lead=""
      title={data?.testimonial?.title || ''}
    >
      <Container>
        <Row>
          <Col>
            {!data && (
              <div className="no-data-content">
                {error && <p>Error while fetching the testimonial</p>}
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
            {data && data.testimonial === null && (
              <div className="no-data-content">
                <p>
                  Testimonial not found. Redirecting to the testimonials page
                </p>
              </div>
            )}
            {data && data.testimonial !== null && (
              <>
                <div className="testimonial-image-container">
                  <img
                    src={data.testimonial.featuredImage.sourceUrl}
                    alt={data.testimonial.featuredImage.altText}
                  />
                </div>
                <ReactMarkdown
                  source={data.testimonial.content}
                  escapeHtml={false}
                />
              </>
            )}
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .no-data-content {
          display: flex;
          justify-content: center;
        }
        .testimonial-image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        img {
          width: auto;
          max-height: 350px;
          max-width: 100%;
        }
        p {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Testimonial;
