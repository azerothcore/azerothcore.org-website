import * as React from 'react';
import Layout from '@/components/Layout';
import { Container, Col, Row } from 'reactstrap';
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
              <p>
                Please, help the AzerothCore project to stay alive! We will use
                your donation for the following reasons:
              </p>
              <b>Fixed costs:</b>
              <ol>
                <li>
                  Pull Requests & Demo Server <strong>maintenance costs</strong>{' '}
                  (~41€/month)
                </li>
                <li>Domain-related costs (~100€/year)</li>
              </ol>
              <b>Extra budget:</b>
              <ol>
                <li>
                  <strong>We will hire developers and place bounties</strong> on
                  bountysource platform to complete the developing roadmap and
                  fix critical bugs
                </li>
                <li>Licenses and software needed for our job.</li>
              </ol>
              <div className="chart-container">
                <DonationPieChart />
              </div>
              <p>
                While we work to integrate the donation system, you can donate
                by clicking on the link below.
                <br />
                <a
                  href="https://azerothcore.altervista.org/wp/donations/145/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Donate to the AzerothCore Project
                </a>
              </p>
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
          .chart-container {
            height: 400px;
          }
          @media (max-width: 769px) {
            .chart-container {
              height: 320px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Donations;
