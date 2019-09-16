import Header from './Header';
import Footer from './Footer';
import { Container, Button } from 'reactstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faRss,
  faExternalLinkAlt,
  faUsers,
  faNewspaper,
  faComments,
  faDollarSign,
  faCloudDownloadAlt,
  faInfoCircle,
  faThumbsUp,
  faHeart,
  faBars,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(
  fab,
  faHome,
  faRss,
  faExternalLinkAlt,
  faUsers,
  faNewspaper,
  faComments,
  faDollarSign,
  faCloudDownloadAlt,
  faInfoCircle,
  faThumbsUp,
  faHeart,
  faBars,
  faAngleRight
);

const Layout = props => (
  <>
    <Header />
    <div className="page-wrapper">
      <div className="page-header">
        <Container>
          <img src="/static/images/logo.png"></img>
          <h1>AzerothCore</h1>
          <p className="lead">Complete Open Source and Modular solution for MMO</p>
          <Link href="/wiki/installation/">
            <Button size="lg" color="danger" className="btn-installation">
              Installation instructions{' '}
              <FontAwesomeIcon width="0" icon="angle-right" className="btn-installation_icon" />
            </Button>
          </Link>
          <div className="github-buttons">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="100px"
              height="20px"
            ></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=fork&count=true"
              frameBorder="0"
              scrolling="0"
              width="90px"
              height="20px"
            ></iframe>
          </div>
          <div className="social-button-container">
            <ul className="social-button_list">
              <li>
                <a className="nav-link_social nav-link" href="https://www.facebook.com/AzerothCore/">
                  <FontAwesomeIcon width="0" icon={['fab', 'facebook-f']} />
                </a>
              </li>
              <li>
                <a className="nav-link_social nav-link" href="https://twitter.com/azeroth_core">
                  <FontAwesomeIcon width="0" icon={['fab', 'twitter']} />
                </a>
              </li>
              <li>
                <a className="nav-link_social nav-link" href="https://www.linkedin.com/company/azerothcore">
                  <FontAwesomeIcon width="0" icon={['fab', 'linkedin-in']} />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {props.children}
    </div>
    <Footer />
    <style jsx>
      {`
        .page-wrapper {
          min-height: 100vh;
          width: 100%;
        }
        .page-header {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
            url(static/images/background.jpg);
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          padding-top: 100px;
          padding-bottom: 50px;
          color: #fff;
          text-align: center;
        }
        h1 {
          margin-top: 20px;
        }
        .github-buttons {
          margin-top: 14px;
        }
        .social-button-container {
          justify-content: center;
          margin-top: 14px;
          display: none;
        }
        .social-button_list {
          display: flex;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
        }
        @media (max-width: 860px) {
          .social-button-container {
            display: flex;
          }
          .page-header {
            padding-bottom: 25px;
          }
        }
        @media (max-width: 570px) {
          .lead {
            font-size: 16px;
          }
        }
      `}
    </style>
    <style jsx global>
      {`
        .btn-installation {
          background-image: linear-gradient(to bottom, #d90000, #610101);
          border-color: #610101;
        }
        .btn-installation:hover {
          background-color: unset;
          border-color: unset;
        }
        .btn-installation:active:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
        }
        .btn-installation:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
        }
        .btn-installation_icon {
          vertical-align: -0.18em;
        }
      `}
    </style>
  </>
);

export default Layout;
