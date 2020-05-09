import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '@/components/Layout';
/* eslint-disable-next-line */
export default function _NotFoundPage() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 style={{ textAlign: 'center' }}>404 - Page Not Found</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
