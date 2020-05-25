import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import { Button, Card, Container, Col, Row, Spinner } from 'reactstrap';
import DonationPieChart from '@/components/DonationPieChart';
import { usePaginatedDonations } from '@/utils/donation-hooks';
import { formatDate } from '@/utils/functions';

const images = ['robot-base-1.png', 'robot-base-2.png', 'robot-base-3.png'];

const Donations: React.FC = () => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });

  const {
    data,
    error,
    hasNextPage,
    isLoading,
    loadMore,
  } = usePaginatedDonations();

  React.useEffect(() => {
    if (inView && hasNextPage && !isLoading && !error) {
      loadMore();
    }
  }, [inView, hasNextPage, isLoading, error, loadMore]);

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
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Please, help the AzerothCore project to stay alive! We will use
                your donation for the following reasons:
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <b>Fixed costs:</b>
              <ol>
                <li>
                  Demo Server and other <strong>maintenance costs</strong>{' '}
                  (~41€/month)
                </li>
                <li>Domain-related costs (~100€/year)</li>
              </ol>
            </Col>
            <Col xs="12" sm="6">
              <b>Development budget:</b>
              <ol>
                <li>
                  <strong>We will hire developers and place bounties</strong> on
                  bountysource platform to complete the developing roadmap and
                  fix critical bugs
                </li>
                <li>Licenses and software needed for our job.</li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
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
          <Row>
            <Col>
              <h3>Donations</h3>
              <ul className="donation-list-container">
                {data &&
                  data.map((donation, key) => (
                    <li className="donation-item" key={key}>
                      <Card className="donation-card" body>
                        <div className="card-image-container">
                          <img
                            src={`${process.env.BACKEND_URL}/${
                              images[(Math.random() * images.length) | 0]
                            }`}
                            loading="lazy"
                            width="70px"
                            height="70px"
                            alt="Placeholder image"
                          />
                        </div>
                        <div className="card-list-container">
                          <ul>
                            <li>
                              <span>From:</span>
                              {` ${donation.first_name}`}
                            </li>
                            <li>
                              <span>Date:</span>
                              {` ${formatDate(donation.date)}`}
                            </li>
                            <li>
                              <span>Amount:</span>
                              {` €${donation.total}`}
                            </li>
                          </ul>
                        </div>
                      </Card>
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="load-more" ref={ref}>
                {hasNextPage && !isLoading && (
                  <Button onClick={loadMore}>Load more</Button>
                )}
                {isLoading && !error && (
                  <Spinner
                    style={{ width: '3rem', height: '3rem' }}
                    type="grow"
                  />
                )}
                {error && (
                  <p className="error-fetch">
                    There was an error fetching the donations
                  </p>
                )}
              </div>
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
          .load-more {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }
          .error-fetch {
            text-align: center;
          }
          .donation-list-container {
            margin: 0;
            padding: 0;
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 10px;
          }
          .card-image-container {
            height: 100%;
            display: flex;
            padding: 0 5px;
          }
          .card-image-container img {
            height: 70px;
            width: auto;
          }
          .card-list-container {
            flex-grow: 1;
            padding: 0 5px;
          }
          .card-list-container ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .card-list-container li span {
            font-weight: bold;
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
          .donation-card {
            display: flex;
            flex-direction: row;
            padding: 1rem;
            width: 300px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Donations;
