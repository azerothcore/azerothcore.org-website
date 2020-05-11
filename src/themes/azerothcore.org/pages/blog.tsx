import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import {
  Button,
  Card,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import { useSWRPages } from 'swr';
import Layout from '@/components/Layout';
import { getPreviewText, formatDate } from '@/utils/functions';
import { usePostList, getCurrentPost } from '@/utils/blog-hooks';
import LinkPrefetch from '@/components/LinkPrefetch';

/**
 *
 */
const Blog: React.FC = () => {
  const [errorOnFetch, setErrorOnFetch] = React.useState(false);
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    'blog-posts',

    // page component
    ({ offset, withSWR }) => {
      const { data, error } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePostList(offset)
      );

      if (error) {
        setErrorOnFetch(true);
      }
      return (
        <Row>
          {data &&
            data.posts.nodes.map(post => {
              return (
                <Col lg="12" key={post.id}>
                  <div className="post-card-container">
                    <Card className="post-card" body>
                      <CardTitle className="post-card-title">
                        <h3>{post.title}</h3>
                      </CardTitle>
                      <CardSubtitle className="post-card-subtitle">
                        <span>{`${post.author.name} | ${formatDate(
                          post.date
                        )}`}</span>
                      </CardSubtitle>
                      <hr />
                      <div className="card-text">
                        <div className="card-preview-text">
                          <ReactMarkdown
                            source={getPreviewText(post.content, 350)}
                            escapeHtml={false}
                          />
                        </div>
                      </div>
                      <div className="button-container">
                        <LinkPrefetch
                          className=""
                          href="/[...dynamic]"
                          as={`${process.env.BACKEND_URL}/blog/${post.slug}`}
                          passHref
                          prefetch={false}
                          prepare={() => getCurrentPost(post.slug)}
                        >
                          <Button className="post-card-button">
                            Read the post
                          </Button>
                        </LinkPrefetch>
                      </div>
                    </Card>
                  </div>
                </Col>
              );
            })}
          <style jsx>
            {`
              .post-card-container {
                padding: 20px;
              }
              .card-text {
                margin-bottom: 10px;
              }
              h3 {
                font-size: 1.35rem;
                margin-bottom: 0.3rem;
              }
              hr {
                margin-top: 0.2rem;
                margin-bottom: 0.7rem;
              }
              .button-container {
                display: flex;
                justify-content: flex-end;
              }
            `}
          </style>
        </Row>
      );
    },

    // get next page's offset from the page endCursor
    SWR => {
      // there's no next page
      if (SWR.data && !SWR.data.posts.pageInfo.hasNextPage) return null;

      // offset = page endCursor
      return SWR.data.posts.pageInfo.endCursor;
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
      page="blog"
      title="AzerothCore Blog"
      lead="Stay updated with the latest news from our developers"
    >
      <div className="postlist-container">
        <Container>
          {pages}
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
                  <p>There was an error fetching the blog posts</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .load-more {
            display: flex;
            justify-content: center;
          }
          p {
            text-align: center;
          }
        `}
      </style>
      <style jsx global>
        {`
          .post-card-title {
            margin-bottom: 0;
          }
          .post-card-subtitle {
            margin-bottom 10px;
          }
          .post-card-subtitle span {
            color: var(--gray);
            font-size: 0.9rem;
          }
          .post-card-button {
            margin-left: auto;
          }
          .card-preview-text p {
            margin: 0;
          }
          .card-preview-text p::first-letter {
            text-transform: uppercase;
          }
          .card-preview-text ol, .card-preview-text li {
            list-style: none;
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
