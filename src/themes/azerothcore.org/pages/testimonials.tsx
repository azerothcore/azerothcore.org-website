import * as React from 'react';
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/Layout';
import {
  useTestimonialsList,
  getCurrentTestimonial,
} from '@/utils/testimonials-hooks';
import { getPreviewText } from '@/utils/functions';
import LinkPrefetch from '@/components/LinkPrefetch';

const Testimonials: React.FC = () => {
  const { data, error } = useTestimonialsList();

  return (
    <Layout
      page="testimonials"
      title="Testimonials & Projects powered by AzerothCore"
      lead="Find out who is using AzerothCore"
    >
      <div className="testimonials-container">
        <Container>
          {!data && (
            <Row>
              <Col>
                <div className="no-data-content">
                  {error && <p>Error while fetching the testimonials</p>}
                  {!error && (
                    <div className="spinner-container">
                      <Spinner
                        style={{ width: '3rem', height: '3rem' }}
                        type="grow"
                      />
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          )}
          {data && data.testimonials === null && (
            <div className="no-data-content">
              <p>No testimonials found</p>
            </div>
          )}

          <Row>
            {data &&
              data.testimonials !== null &&
              data.testimonials.nodes.map(testimonial => {
                return (
                  <Col lg="6" md="6" xl="4" key={testimonial.id}>
                    <div className="testimonials-card-container">
                      <Card className="post-card" body>
                        <div className="testimonial-image-container">
                          <img
                            src={testimonial.featuredImage.sourceUrl}
                            alt={testimonial.featuredImage.altText}
                          />
                        </div>
                        <hr />
                        <CardTitle className="post-card-title">
                          <h3>{testimonial.title}</h3>
                        </CardTitle>
                        <div className="card-text">
                          <div className="card-preview-text">
                            <ReactMarkdown
                              source={
                                testimonial.content
                                  ? getPreviewText(testimonial.content, 100)
                                  : ''
                              }
                              escapeHtml={false}
                            />
                          </div>
                        </div>
                        <div className="button-container">
                          <LinkPrefetch
                            href="/[...dynamic]"
                            as={`${process.env.BACKEND_URL}/testimonials/${testimonial.slug}`}
                            passHref
                            prefetch={false}
                            className="testimonials-link"
                            prepare={() =>
                              getCurrentTestimonial(testimonial.slug)
                            }
                          >
                            <Button className="post-card-button">
                              Read more
                            </Button>
                          </LinkPrefetch>
                        </div>
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
          .no-data-content {
            display: flex;
            justify-content: center;
          }
          p {
            text-align: center;
          }
          .testimonials-card-container {
            padding: 10px;
          }
          .card-text {
            margin-bottom: 10px;
            min-height: 72px;
          }
          h3 {
            font-size: 1.35rem;
            margin-bottom: 0.3rem;
          }
          hr {
            margin-top: 20px;
            margin-bottom: 0.7rem;
          }
          .button-container {
            display: flex;
            justify-content: stretch;
          }
          .testimonial-image-container {
            height: 170px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            width: auto;
            max-height: 100%;
            max-width: 100%;
          }
        `}
      </style>
      <style jsx global>
        {`
          .post-card-title {
            margin-bottom: 0;
          }
          .post-card-button {
            width: 100%;
          }
          .card-preview-text p {
            margin: 0;
          }
          .card-preview-text p::first-letter {
            text-transform: uppercase;
          }
          .card-preview-text ol,
          .card-preview-text li {
            list-style: none;
          }
          .testimonials-link {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </Layout>
  );
};

export default Testimonials;
