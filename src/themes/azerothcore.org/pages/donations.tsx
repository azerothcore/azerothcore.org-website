import * as React from 'react';
import { useSWRPages } from 'swr';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import { Button, Card, Container, Col, Row, Spinner } from 'reactstrap';
import DonationPieChart from '@/components/DonationPieChart';
import { useDonations } from '@/utils/donation-hooks';
import { formatDate } from '@/utils/functions';

const Donations: React.FC = () => {
  const [errorOnFetch, setErrorOnFetch] = React.useState(false);
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    'donations',

    // page component
    ({ offset = 1, withSWR }) => {
      const { data, error } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useDonations(offset)
      );

      if (error) {
        setErrorOnFetch(true);
      }
      return (
        <ul className="donation-list-container">
          {data &&
            data.givewp_donations &&
            data.givewp_donations.map((donation, key) => (
              <li className="donation-item" key={key}>
                <Card className="donation-card" body>
                  <div className="card-image-container">
                    <img
                      src={`${process.env.BACKEND_URL}/bot-avatar.png`}
                      loading="lazy"
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
                        {` ${donation.total}`}
                      </li>
                    </ul>
                  </div>
                </Card>
              </li>
            ))}
          <style jsx>
            {`
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
        </ul>
      );
    },

    // get next page's offset from the page endCursor
    SWR => {
      return null;
      // there's no next page
      // if (SWR.data && !SWR.data.posts.pageInfo.hasNextPage) return null;

      // // offset = page endCursor
      // return SWR.data.posts.pageInfo.endCursor;
    },
    // deps of the page component
    []
  );
  React.useEffect(() => {
    if (
      inView &&
      pages.length > 0 &&
      !isReachingEnd &&
      !isLoadingMore &&
      !errorOnFetch
    ) {
      loadMore();
    }
  }, [inView, pages, isLoadingMore, isReachingEnd, errorOnFetch, loadMore]);
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
          <Row>
            <Col>
              <h3>Donations</h3>
              {pages}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="load-more" ref={ref}>
                {!isReachingEnd && !isLoadingMore && (
                  <Button onClick={loadMore}>Load more</Button>
                )}
                {isLoadingMore && !errorOnFetch && (
                  <Spinner
                    style={{ width: '3rem', height: '3rem' }}
                    type="grow"
                  />
                )}
                {errorOnFetch && (
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
          }
          .error-fetch {
            text-align: center;
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
