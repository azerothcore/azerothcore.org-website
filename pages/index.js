import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardFeature from '../components/CardFeature';
import Layout from '../components/Layout';
import features from '../data/features';

export default function Index() {
  return (
    <Layout>
      <div className="features-wrapper">
        <Container>
          <Row>
            {features.map(feature => (
              <Col sm="6" lg="4" key={feature.id}>
                <CardFeature
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <style jsx global>
        {`
          .features-wrapper {
            padding: 40px 0;
          }
          .features-wrapper h3 {
            margin: 0;
            font-size: 24px;
          }
        `}
      </style>
    </Layout>
  );
}
