import {
    Container,
    Row,
    Col
  } from 'reactstrap';

  import Layout from '../components/Layout';

export default function _404() {
    return <Layout><Container><Row><Col><h1 style={{textAlign:"center"}}>404 - Page Not Found</h1></Col></Row></Container></Layout>
}