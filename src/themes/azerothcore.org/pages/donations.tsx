import * as React from 'react';
import Layout from '@/components/Layout';
import { Button, Container, Col, Row } from 'reactstrap';
import DonationPieChart from '@/components/DonationPieChart';

const Donations: React.FC = () => {
  return (
    <Layout
      page="donations"
      title="Donate to the AzerothCore Project"
      lead="Support the development of AzerothCore"
    >
      <div className="donations-container">
        <Container>
          <Row>
            <Col>
              <DonationPieChart />
              <div className="donation-button-container">
                <a
                  href="https://azerothcore.altervista.org/wp/donations/145/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button size="lg" className="donation-button">
                    Donate to the AzerothCore Project
                  </Button>
                </a>
              </div>
              <p>
                Please, help the AzerothCore project to stay alive! We will use
                your donation for the following reasons:
              </p>
              <b>Fixed costs:</b>
              <ol>
                <li>
                  Demo Server and other <strong>maintenance costs</strong>{' '}
                  (~41€/month)
                </li>
                <li>Domain-related costs (~100€/year)</li>
              </ol>
              <b>Development budget:</b>
              <ol>
                <li>
                  <strong>We will hire developers and place bounties</strong> on
                  bountysource platform to complete the developing roadmap and
                  fix critical bugs
                </li>
                <li>Licenses and software needed for our job.</li>
              </ol>
              <p>
                If all AzerothCore users will donate at least 10€, we can reach
                our yearly goal to keep up the project active!
              </p>
              <p>
                <strong>
                  You will also receive the contributor level that allow you
                  accessing to priority support channels and several premium
                  modules & tools!
                </strong>
              </p>
              <p>
                Leave us a comment explaining what are the things you would like
                having improved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          ol,
          ul {
            padding-left: 17px;
          }
          .donation-button-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
          }
        `}
      </style>
      <style jsx global>
        {`
          .donation-button {
            background-image: linear-gradient(to bottom, #d90000, #610101);
            border-color: #610101;
          }
          .donation-button:hover {
            background-color: unset;
            border-color: unset;
          }
          .donation-button:active:focus {
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
          }
          .donation-button:focus {
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
          }
        `}
      </style>
    </Layout>
  );
};

export default Donations;
