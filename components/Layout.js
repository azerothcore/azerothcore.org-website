import Header from './Header';
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
} from '@fortawesome/free-solid-svg-icons';

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
  faBars
);

const Layout = props => (
  <>
    <Header />
    <div></div>
    {props.children}
    <style jsx>
      {`
        div {
          height: 600px;
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
      `}
    </style>
  </>
);

export default Layout;
