import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import Layout from '@/components/Layout';

/* eslint-disable-next-line */
export default function _LoadingPage() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div>
              <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </Layout>
  );
}
