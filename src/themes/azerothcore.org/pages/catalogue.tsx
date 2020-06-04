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
import { useSWRPages } from 'swr';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/Layout';
import CatalogueFilters from '@/components/CatalogueFilters';
import { useCatalogueList } from '@/utils/catalogue-hooks';
import { getPreviewText } from '@/utils/functions';
import { useCategories } from '@/utils/categories-hooks';
import { useMediaQuery } from 'react-responsive';

const Catalogue: React.FC = () => {
  const [filters, setFilters] = React.useState({ search: '', categoryIn: [] });
  const { data: categories } = useCategories();
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });

  const mediumScreen = useMediaQuery({ query: '(max-width: 991px)' });
  const smallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  const moduleCategories = React.useMemo(() => {
    const parentCategory = categories?.categories?.nodes.find(
      category => category.name === 'AzerothCore-Wotlk'
    );

    const childCategories = parentCategory && parentCategory.children.nodes;
    return childCategories || [];
  }, [categories]);

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    'catalogue-list',

    // page component
    ({ offset, withSWR }) => {
      const { data, error } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCatalogueList(offset, filters.search, filters.categoryIn)
      );
      return (
        <>
          <Row>
            {data &&
            data.catalogueItems !== null &&
            data.catalogueItems.nodes.length > 0 ? (
              data.catalogueItems.nodes.map(item => {
                return (
                  <Col lg="6" md="6" xl="6" key={item.databaseId}>
                    <div className="testimonials-card-container">
                      <Card className="post-card" body>
                        <div className="testimonial-image-container">
                          {item.featuredImage ? (
                            <img
                              src={item.featuredImage.sourceUrl}
                              alt={item.featuredImage.altText}
                            />
                          ) : (
                            <img
                              src={`${process.env.BACKEND_URL}/logo.png`}
                              alt="Azeroth Core logo"
                            />
                          )}
                        </div>
                        <hr />
                        <CardTitle className="post-card-title">
                          <h3>{item.title}</h3>
                        </CardTitle>
                        <div className="card-text">
                          <div className="card-preview-text">
                            <ReactMarkdown
                              source={
                                item.content
                                  ? getPreviewText(item.content, 100)
                                  : ''
                              }
                              escapeHtml={false}
                            />
                          </div>
                        </div>
                        <div className="button-container">
                          {/* <LinkPrefetch
                              href="/[...dynamic]"
                              as={`${process.env.BACKEND_URL}/catalogue/${item.slug}`}
                              passHref
                              prefetch={false}
                              className="testimonials-link"
                              prepare={() =>
                                getCurrentCatalogueItem(testimonial.slug)
                              }
                            >
                              <Button className="post-card-button">
                                Read more
                              </Button>
                            </LinkPrefetch> */}
                        </div>
                      </Card>
                    </div>
                  </Col>
                );
              })
            ) : (
              <Col xl="12">
                {!isLoadingMore && (
                  <div className="no-data-content">
                    {!data && (
                      <Spinner
                        style={{ width: '3rem', height: '3rem' }}
                        type="grow"
                      />
                    )}
                    <p>
                      {error && 'There was an error while loading the data'}
                      {data &&
                        filters.search.length > 0 &&
                        'The search did not bring any results'}
                      {data &&
                        filters.search.length === 0 &&
                        `There are no available items`}
                    </p>
                  </div>
                )}
              </Col>
            )}
          </Row>

          <style jsx>
            {`
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
              .no-data-content {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 15px;
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
        </>
      );
    },

    // get next page's offset from the page endCursor
    SWR => {
      // there's no next page
      if (SWR.data && !SWR.data.catalogueItems.pageInfo.hasNextPage)
        return null;

      // offset = page endCursor
      return SWR.data.catalogueItems.pageInfo.endCursor;
    },

    // deps of the page component
    [filters]
  );

  const handleSubmit = values => {
    setFilters(values);
  };

  return (
    <Layout
      page="catalogue"
      title="Catalogue"
      lead="Enhance your AzerothCore experience"
    >
      <div className="catalogue-container">
        <Container>
          <Row className="catalogue-header">
            <Col xs="12" md="6">
              {mediumScreen && (
                <CatalogueFilters
                  handleSubmit={handleSubmit}
                  categories={moduleCategories}
                  filters={filters}
                  isDesktop={false}
                />
              )}
            </Col>
            <Col xs="12" md="6" style={{ padding: '0 25px' }}>
              <div className="submit-instructions">
                <p>
                  Want to submit your <strong>module</strong>? Check the
                  instructions here
                </p>
                <p>
                  Want to submit your <strong>lua script</strong>? Check the
                  instructions here
                </p>
              </div>
            </Col>
          </Row>
          <div className="page-content-wrapper">
            {!mediumScreen && (
              <div className="desktop-filters">
                <CatalogueFilters
                  handleSubmit={handleSubmit}
                  categories={moduleCategories}
                  filters={filters}
                  isDesktop
                />
              </div>
            )}
            <div className="page-catalogue">
              {pages}
              <div className="load-more" ref={ref}>
                {!isReachingEnd && !isLoadingMore && (
                  <Button onClick={loadMore}>Load more</Button>
                )}
                {isLoadingMore && (
                  <Spinner
                    style={{ width: '3rem', height: '3rem' }}
                    type="grow"
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <style jsx global>{`
        .catalogue-header {
          flex-direction: ${smallScreen ? 'column-reverse' : 'row'};
        }
      `}</style>
      <style jsx>
        {`
          .load-more {
            display: flex;
            justify-content: center;
            margin-top: 15px;
          }
          p {
            text-align: center;
          }
          .submit-instructions {
            background-color: #d1ecf1;
            border: 1px solid #bee5eb;
            color: #0c5460;
            padding: 15px 15px;
            border-radius: 0.25rem;
            margin-bottom: ${smallScreen ? '15px' : '0'};
          }
          .submit-instructions p {
            text-align: left;
          }
          .submit-instructions p:last-child {
            margin-bottom: 0;
          }
          .page-content-wrapper {
            display: flex;
          }
          .desktop-filters {
            padding: 10px 5px;
          }
          .page-catalogue {
            flex: 1;
          }
        `}
      </style>
    </Layout>
  );
};

export default Catalogue;
