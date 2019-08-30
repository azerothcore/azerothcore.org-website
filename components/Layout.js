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
  faHeart
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
  faHeart
);

const Layout = props => (
  <>
    <Header />
    {props.children}
  </>
);

export default Layout;
