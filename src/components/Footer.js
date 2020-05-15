import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <div className="footer">
      <Container>
        <p>
          {`© AzerothCore ${year} ● Brought to you with `}{' '}
          <FontAwesomeIcon size="sm" icon="heart" /> {` and C++`}
        </p>
        <Link href="/donations" as={`${process.env.BACKEND_URL}/donations`}>
          <img
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            alt="PayPal - The safer, easier way to pay online!"
          />
        </Link>
        <p className="last">
          {'Most webservices of AzerothCore are powered by '}{' '}
          <FontAwesomeIcon size="sm" icon={['fab', 'github']} />.
          {`You can even edit this site sending a PR `}
          <a href="https://github.com/azerothcore/azerothcore.github.io">
            here
          </a>
          <br />
          WebSite{' '}
          <a href="https://github.com/azerothcore/azerothcore.github.io/graphs/contributors">
            Contributors
          </a>
        </p>
      </Container>
      <style jsx>{`
        .footer {
          color: #fff;
          text-align: center;
          padding: 18px 0;
          background: #170104;
        }
        img {
          margin-bottom: 0.5rem;
          cursor: pointer;
        }
        p {
          margin-bottom: 0.5rem;
        }
        .last {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default Footer;
