import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useRouter } from 'next/router';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { formatDate } from '@/utils/functions';
import ReactMarkdown from 'react-markdown';
import Layout from './Layout';
import { useCatalogueItem } from '@/utils/catalogue-hooks';

type MatchParam = {
  slug: string;
};

type MatchProps = RouteComponentProps<MatchParam>;

const CatalogueItem: React.FC<MatchProps> = ({ match }) => {
  const { slug } = match.params;
  const router = useRouter();
  const { data, error } = useCatalogueItem(slug);

  React.useEffect(() => {
    if (data && data.post === null) {
      router.push('/catalogue');
    }
  }, [data, router]);

  return (
    <Layout
      page="catalogue-item-post"
      lead={
        data && data.catalogueItem
          ? `${data.catalogueItem.author.name} | ${formatDate(
              data.catalogueItem.date
            )}`
          : ''
      }
      title={data?.catalogueItem?.title || ''}
    >
      <Container>
        <Row>
          <Col>
            {!data && (
              <div className="no-data-content">
                {error && <p>Error while fetching the module</p>}
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
            {data && data.catalogueItem === null && (
              <div className="no-data-content">
                <p>Module not found. Redirecting to the catalogue page</p>
              </div>
            )}
            {data && data.catalogueItem !== null && (
              <>
                <div className="catalogue-item-image-container">
                  {data.catalogueItem.featuredImage && (
                    <img
                      src={data.catalogueItem.featuredImage.sourceUrl}
                      alt={data.catalogueItem.featuredImage.altText}
                    />
                  )}
                </div>
                <ReactMarkdown
                  source={data.catalogueItem.content}
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
        .catalogue-item-image-container {
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

export default CatalogueItem;
